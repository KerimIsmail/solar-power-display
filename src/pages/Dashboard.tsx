import ChartDisplay from "@/components/chartDisplay/ChartDisplay";
import { ModeToggle } from "@/components/mode-toggle";
import NumberDisplay from "@/components/numberDisplay/NumberDisplay";
import SingleNumberDisplay from "@/components/singleNumberDisplay/SingleNumberDisplay";
import axios from "axios";
import { useEffect, useState } from "react";

type DataType = {
  daylie: string;
  total: string;
  measurements: [];
};
export default function Dashboard() {
  const [data, setData] = useState<null | DataType>(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:5000/measurements")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0"); // Tag mit führender Null
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Monat mit führender Null (Januar ist 0)
    const year = today.getFullYear();

    return `${day}.${month}.${year}`;
  }

  return (
    <>
      {data && (
        <>
          <SingleNumberDisplay content={data.measurements[data.measurements.length - 1].currentEnergy} />

          <ChartDisplay title="Verlauf" data={data.measurements} />

          <div className="flex gap-5">
            <NumberDisplay title="Tagesertrag" description={getCurrentDate()} content={data.daylie} />
            <NumberDisplay title="Gesamtertrag" description="Seit 2011" content={data.total} />
          </div>

          <ModeToggle />
        </>
      )}
    </>
  );
}
