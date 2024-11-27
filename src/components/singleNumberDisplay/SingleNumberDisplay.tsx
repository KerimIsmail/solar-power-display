import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { AiFillThunderbolt } from "react-icons/ai";

type Props = {
  content: string;
};

export default function SingleNumberDisplay({ content }: Readonly<Props>) {
  return (
    <Card className="flex-grow">
      <CardContent className="flex justify-center font-bold text-5xl pt-6">
        <div className="w-full">
          <div className="flex justify-center w-full items-end gap-1">
            <AiFillThunderbolt className="text-red-500 text-4xl" />

            <p>{content}</p>

            <CardDescription className="text-4xl">W</CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
