type DigitalSunProps = {
  altitude: number | null; // Winkel über dem Horizont
};

export default function DigitalSun({
  altitude,
}: Readonly<DigitalSunProps>) {
  if (!altitude || altitude <= 0) {
    return null;
  }

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const horizonY = screenHeight / 2;

  const x = (screenWidth / 2) + (screenWidth / 2) * (altitude / 90);
  const y = horizonY - (screenHeight / 2) * (altitude / 90);

  console.log("Altitude:", altitude);
  return;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#ffd900",
        opacity: 0.6,
        transform: "translate(-50%, -50%)", // Zentriert den Kreis
      }}
    ></div>
  );
}
