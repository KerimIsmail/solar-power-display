import "./DigitalSun.css";

type DigitalSunProps = {
  altitude: number | null; // Winkel über dem Horizont
  azimuth: number | null; // Winkel entlang des Horizonts
};

export default function DigitalSun({
  altitude,
  azimuth,
}: Readonly<DigitalSunProps>) {
  if (altitude === null || azimuth === null || altitude < -Math.PI / 2) {
    // Sonne nicht sichtbar
    return null;
  }

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const topPadding = 50;

  // X: Position entlang des Horizonts (links nach rechts)
  // Azimuth: -Math.PI bis Math.PI -> Verschieben zu 0 bis 2*Math.PI, dann skalieren auf screenWidth
  const normalizedAzimuth = azimuth + Math.PI; // Bereich von 0 bis 2*Math.PI
  const x = (normalizedAzimuth / (2 * Math.PI)) * screenWidth;

  // Y: Höhe über dem Horizont, basierend auf Altitude
  // Altitude: -Math.PI/2 (Tiefpunkt) bis Math.PI/2 (Zenit)
  const horizonY = screenHeight - topPadding;
  const y = horizonY - Math.sin(altitude) * horizonY;

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
          animation: "pulse 3s ease-in infinite",
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
          animation: "pulse 3s ease-in infinite 1s",
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
          animation: "pulse 3s ease-in infinite 2s",
        }}
      ></div>
    </>
  );
}
