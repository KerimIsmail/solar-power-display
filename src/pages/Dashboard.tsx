import ChartDisplay from "@/components/chartDisplay/ChartDisplay";
import Co2Display from "@/components/co2Display/Co2Display";
import { ModeToggle } from "@/components/mode-toggle";
import NumberDisplay from "@/components/numberDisplay/NumberDisplay";
import SingleNumberDisplay from "@/components/singleNumberDisplay/SingleNumberDisplay";
import { TEST_DATA } from "@/fixtures/TestData";
import calculateSavedCO2 from "@/helper/CalculateSavedCO2";
import getCurrentDate from "@/helper/GetCurrentDate";
import { BackendData } from "@/types/BackendData";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState<null | BackendData>(null);

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

  return (
    <>
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
