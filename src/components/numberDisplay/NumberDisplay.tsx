import "./NumberDisplay.css";

type Props = {
  title: string;
  number: number;
};

export default function NumberDisplay({ title, number }: Readonly<Props>) {
  return (
    <div className="holder">
      <h1>{title}</h1>
      <p>{number}</p>
    </div>
  );
}
