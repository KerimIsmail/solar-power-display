import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";
import { FaLeaf } from "react-icons/fa6";

type Props = {
  title: string;
  description?: string;
  content: string | null;
};

export default function Co2Display({
  title,
  description,
  content,
}: Readonly<Props>) {
  return (
    <>
      {content ? (
        <Card className="flex-grow border-green-300 bg-green-50 dark:bg-transparent dark:border-green-500">
          <CardHeader className="pb-2">
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
          {content && (
            <CardContent className="flex justify-center font-bold text-4xl pb-8 items-end gap-1">
              <FaLeaf className="text-green-500 text-2xl -translate-y-0.5" />
              <p>{content} </p>
              <span className="text-muted-foreground text-2xl">kg</span>
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
