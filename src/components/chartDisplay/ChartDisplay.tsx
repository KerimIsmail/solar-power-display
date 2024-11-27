import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const chartConfig = {
  watt: {
    label: "Watt",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

type Props = {
  title: string;
  description?: string;
  data: any;
  isLoading: boolean;
};

export default function ChartDisplay({
  title,
  description,
  data,
  isLoading,
}: Readonly<Props>) {
  const formatTimestampToTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <>
      {!isLoading ? (
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="max-h-[300px] min-w-[100%]"
            >
              <AreaChart
                accessibilityLayer
                data={data}
                margin={{
                  left: 0,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={true} />
                <XAxis
                  dataKey="timestamp"
                  tickLine={true}
                  axisLine={true}
                  tickMargin={8}
                  tickFormatter={formatTimestampToTime}
                />
                <YAxis
                  tickLine={true}
                  axisLine={true}
                  tickMargin={8}
                  tickFormatter={(value) => {
                    return value + " W";
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <defs>
                  <linearGradient id="fillWatt" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-watt)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-watt)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="currentEnergy"
                  type="natural"
                  fill="url(#fillWatt)"
                  fillOpacity={0.4}
                  stroke="var(--color-watt)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col space-y-3 flex-grow">
          <Skeleton className="h-[404px] rounded-xl" />
        </div>
      )}
    </>
  );
}
