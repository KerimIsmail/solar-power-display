import ChartDisplay from "@/components/chartDisplay/ChartDisplay";
import Co2Display from "@/components/co2Display/Co2Display";
import DigitalSun from "@/components/digitalSun/DigitalSun";
import { ModeToggle } from "@/components/mode-toggle";
import NumberDisplay from "@/components/numberDisplay/NumberDisplay";
import SingleNumberDisplay from "@/components/singleNumberDisplay/SingleNumberDisplay";
import SunPath from "@/components/sunPath/SunPath";
import { TEST_DATA } from "@/fixtures/TestData";
import calculateSavedCO2 from "@/helper/CalculateSavedCO2";
import getCurrentDate from "@/helper/GetCurrentDate";
import { getSunPosition, getSunTimes } from "@/helper/SunCalcHelper";
import { BackendData, SunData, SunTimes } from "@/types/BackendData";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState<null | BackendData>(null);
  const [sunData, setSunData] = useState<null | SunData>(null);
  const [sunTimes, setSunTimes] = useState<null | SunTimes>(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:5000/measurements")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setData(TEST_DATA);
        });
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateSunData();

    const interval = setInterval(() => {
      updateSunData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function updateSunData() {
    setSunData(getSunPosition(new Date()));
    setSunTimes(getSunTimes(new Date()));
  }

  return (
    <>
      <SunPath
        sunrise={sunTimes ? sunTimes.sunrise : null}
        sunset={sunTimes ? sunTimes.sunset : null}
      />
      <DigitalSun
        altitude={sunData ? sunData.altitude : null}
        azimuth={sunData ? sunData.azimuth : null}
      />

      <SingleNumberDisplay
        content={
          data
            ? data.measurements[data.measurements.length - 1].currentEnergy
            : null
        }
      />

      <ChartDisplay title="Verlauf" data={data ? data.measurements : null} />

      <div className="flex gap-5">
        <NumberDisplay
          title="Tagesertrag"
          description={getCurrentDate()}
          content={data ? data.daily : null}
        />
        <NumberDisplay
          title="Gesamtertrag"
          description="Seit 2011"
          content={data ? data.total : null}
        />
      </div>

      <Co2Display
        title="CO₂ Einsparung"
        description="Seit 2011"
        content={data ? calculateSavedCO2(Number(data.total)).toString() : null}
      />

      <ModeToggle />
    </>
  );
}
