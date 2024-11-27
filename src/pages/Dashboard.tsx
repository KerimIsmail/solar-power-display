import ChartDisplay from "@/components/chartDisplay/ChartDisplay";
import { ModeToggle } from "@/components/mode-toggle";
import NumberDisplay from "@/components/numberDisplay/NumberDisplay";
import SingleNumberDisplay from "@/components/singleNumberDisplay/SingleNumberDisplay";
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
      <SingleNumberDisplay content="1000" />

      <ChartDisplay title="t" />

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
    </>
  );
}
