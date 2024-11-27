import ChartDisplay from "@/components/chartDisplay/ChartDisplay";
import { ModeToggle } from "@/components/mode-toggle";
import NumberDisplay from "@/components/numberDisplay/NumberDisplay";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    // {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
  }, []);

  return (
    <>
      <NumberDisplay title="Jetzt" datum="12.08.2000" number={123} />

      <ChartDisplay title="t" />

      <div className="flex gap-10">
        <NumberDisplay title="Tagesertrag" datum="12.08.2000" number={123} />
        <NumberDisplay title="Gesamtertrag" datum="12.08.2000" number={1000} />
      </div>

      <ModeToggle />
    </>
  );
}
