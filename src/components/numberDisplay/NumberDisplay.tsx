import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  title: string;
  description?: string;
  content?: string;
};

export default function NumberDisplay({
  title,
  description,
  content,
}: Readonly<Props>) {
  return (
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
  );
}
