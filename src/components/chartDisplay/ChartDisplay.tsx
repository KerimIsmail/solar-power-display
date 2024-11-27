
type Props = {
  title: string;
};

export default function ChartDisplay({ title }: Readonly<Props>) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
