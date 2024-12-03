import { calculateSunPath } from "@/helper/SunCalcHelper";

type SunPathProps = {
  sunrise: Date | null;
  sunset: Date | null;
};

export default function SunPath({ sunrise, sunset }: Readonly<SunPathProps>) {
  if (sunrise === null || sunset === null) {
    return null;
  }

  const pathData = calculateSunPath(sunrise, sunset)
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <path
        d={pathData}
        stroke="#ffd900"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}
