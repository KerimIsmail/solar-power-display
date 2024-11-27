import ChartDisplay from "@/components/chartDisplay/ChartDisplay";
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
  }, []);

  return (
    <div>
      <h1>Solar Power Display</h1>
      <h1>1000 Watt</h1>

      <ChartDisplay title="Prognose" />
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      <div>
        <NumberDisplay title="Tagesertrag" number={123} />
        <NumberDisplay title="Gesamtertrag" number={1000} />
      </div>
    </div>
  );
}
