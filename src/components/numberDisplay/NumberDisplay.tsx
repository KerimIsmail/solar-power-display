import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

type Props = {
  title: string;
  description?: string;
  content?: string;
  isLoading: boolean;
};

export default function NumberDisplay({
  title,
  description,
  content,
  isLoading,
}: Readonly<Props>) {
  return (
    <>
      {!isLoading ? (
        <Card className="flex-grow">
          <CardHeader className="pb-2">
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
          {content && (
            <CardContent className="flex justify-center font-bold text-3xl pb-8">
              <p>
                {content}{" "}
                <span className="text-muted-foreground text-2xl">kWh</span>
              </p>
            </CardContent>
          )}
        </Card>
      ) : (
        <div className="flex flex-col space-y-3 flex-grow">
          <Skeleton className="h-[82px] rounded-xl" />
        </div>
      )}
    </>
  );
}
