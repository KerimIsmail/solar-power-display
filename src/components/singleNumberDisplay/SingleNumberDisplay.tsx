import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

type Props = {
  content: string;
};

export default function SingleNumberDisplay({ content }: Readonly<Props>) {
  return (
    <Card className="flex-grow">
      <CardContent className="flex justify-center font-bold text-5xl pt-6">
        <div>
          <p>{content} <span className="text-muted-foreground text-4xl">kWh</span></p>
          <CardDescription className="flex justify-center">
            10:45 Uhr
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
