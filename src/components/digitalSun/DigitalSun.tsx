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

  // X: Position entlang des Horizonts (links nach rechts)
  // Azimuth: -Math.PI bis Math.PI -> Verschieben zu 0 bis 2*Math.PI, dann skalieren auf screenWidth
  const normalizedAzimuth = azimuth + Math.PI; // Bereich von 0 bis 2*Math.PI
  const x = (normalizedAzimuth / (2 * Math.PI)) * screenWidth;

  // Y: Höhe über dem Horizont, basierend auf Altitude
  // Altitude: -Math.PI/2 (Tiefpunkt) bis Math.PI/2 (Zenit)
  const horizonY = screenHeight / 2;
  const topPadding = 50;
  const adjustedHorizonY = horizonY + topPadding;
  const y = adjustedHorizonY - Math.sin(altitude) * horizonY;

  function radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
  }

  function convertAzimuthFromSouthToNorth(radians: number): number {
    // Von Süden auf Norden umstellen
    let adjustedRadians = radians - Math.PI;
    if (adjustedRadians < 0) {
      adjustedRadians += 2 * Math.PI;
    }
    // In Grad umrechnen
    return radiansToDegrees(adjustedRadians);
  }

  // Gegebene Werte in Radiant
  const altitudeRad = 0.2197457852365384; // Höhe in Radiant
  const azimuthRad = 0.42232407707950803; // Azimut in Radiant

  // Umrechnung und Normalisierung
  const altitudeDeg = radiansToDegrees(altitudeRad);
  const azimuthDeg = convertAzimuthFromSouthToNorth(azimuthRad);

  console.log(`Altitude: ${altitudeDeg.toFixed(2)}°`);
  console.log(`Azimuth: ${azimuthDeg.toFixed(2)}°`);

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "0px",
          top: "50%",
          width: "100%",
          height: "2px",
          backgroundColor: "#ffffff",
          opacity: 0.2,
          zIndex: -1,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "0px",
          width: "2px",
          height: "100%",
          backgroundColor: "#ffffff",
          opacity: 0.2,
          zIndex: -1,
        }}
      ></div>

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
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "#ffd900",
          opacity: 0.1,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  );
}
