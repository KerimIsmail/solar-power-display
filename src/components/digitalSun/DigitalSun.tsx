import { calculateSunScreenPosition } from "@/helper/SunCalcHelper";
import "./DigitalSun.css";

type DigitalSunProps = {
  altitude: number | null; // Winkel über dem Horizont
  azimuth: number | null; // Winkel entlang des Horizonts
  icon: string;
};

export default function DigitalSun({
  altitude,
  azimuth,
}: Readonly<DigitalSunProps>) {
  if (
    altitude === null ||
    azimuth === null ||
    // Sonne nicht sichtbar
    altitude < -Math.PI / 2
  ) {
    return;
  }

  const { x, y } = calculateSunScreenPosition(azimuth, altitude);

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "#ffd900",
          opacity: 0.6,
          transform: "translate(-50%, -50%)",
          animation: "sunPulse 3s ease-in infinite",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#ffd900",
          opacity: 0.8,
          transform: "translate(-50%, -50%)",
          animation: "sunPulse 3s ease-in infinite 1s",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#ffd900",
          opacity: 0.2,
          transform: "translate(-50%, -50%)",
          animation: "sunPulse 3s ease-in infinite 2s",
        }}
      ></div>
{/*
      <img
        alt="Sonne"
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        width={60}
        height={60}
        style={{
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          transform: "translate(-50%, -50%)",
          opacity: 0,
        }}
      />*/}
    </>
  );
}
