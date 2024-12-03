import SunCalc from "suncalc";

export function getSunPosition(date: Date): {
  altitude: number;
  azimuth: number;
} {
  return SunCalc.getPosition(date, 51.93598, 6.87378);
}

export function getSunTimes(date: Date): {
  sunrise: Date;
  sunset: Date;
} {
  return SunCalc.getTimes(date, 51.93598, 6.87378);
}

export function calculateSunScreenPosition(azimuth: number, altitude: number) {
  const topPadding = 50;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const x = ((azimuth + Math.PI) / (2 * Math.PI)) * screenWidth;
  const horizonY = screenHeight;
  const y = horizonY - Math.sin(altitude) * (horizonY - topPadding);

  return { x, y };
}

export function calculateSunPath(sunrise: Date, sunset: Date) {
  const points: { x: number; y: number }[] = [];
  const totalSteps = 100; // Anzahl der Schritte für die Linie
  const duration = (sunset.getTime() - sunrise.getTime()) / totalSteps; // Zeitdifferenz pro Schritt

  for (let i = 0; i <= totalSteps; i++) {
    const time = new Date(sunrise.getTime() + i * duration);
    const sunPosition = getSunPosition(time);

    if (sunPosition.altitude < -Math.PI / 2) {
      continue; // Ignoriere Punkte unter dem Horizont
    }

    points.push(
      calculateSunScreenPosition(sunPosition.azimuth, sunPosition.altitude)
    );
  }

  return points;
}
