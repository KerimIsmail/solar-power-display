export default function calculateSavedCO2(
  producedEnergy: number,
  co2PerKWh: number = 0.38
): number {
  if (producedEnergy < 0) {
    return 0;
  }

  const savedCO2InKg = producedEnergy * co2PerKWh;
  const savedCO2InTons = savedCO2InKg / 1000;

  return parseFloat(savedCO2InTons.toFixed(2));
}
