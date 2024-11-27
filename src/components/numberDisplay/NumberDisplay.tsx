import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  title: string;
  datum: string;
  number: number;
};

export default function NumberDisplay({ title, datum, number }: Readonly<Props>) {
  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardTitle>{ title }</CardTitle>
        <CardDescription>{ datum }</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{ number } khw</p>
      </CardContent>
    </Card>
  );
}
