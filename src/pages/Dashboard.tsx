import ChartDisplay from "@/components/chartDisplay/ChartDisplay";
import { ModeToggle } from "@/components/mode-toggle";
import NumberDisplay from "@/components/numberDisplay/NumberDisplay";
import SingleNumberDisplay from "@/components/singleNumberDisplay/SingleNumberDisplay";
import axios from "axios";
import { useEffect, useState } from "react";

const chartData = [
  { timestamp: 1701093891520, watt: 152 },
  { timestamp: 1701093901520, watt: 284 },
  { timestamp: 1701093911520, watt: 498 },
  { timestamp: 1701093921520, watt: 207 },
];

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://192.168.188.144:5000/measurements")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();

    const interval = setInterval(() => {
      console.log("Updating data...");
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SingleNumberDisplay content="1000" />

      <ChartDisplay title="Verlauf" data={chartData} />

      <div className="flex gap-5">
        <NumberDisplay
          title="Tagesertrag"
          description="27.11.2024"
          content="123"
        />
        <NumberDisplay
          title="Gesamtertrag"
          description="Seit 2004"
          content="1000"
        />
      </div>

      <ModeToggle />

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}
