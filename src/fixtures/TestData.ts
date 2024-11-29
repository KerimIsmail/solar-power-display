import { BackendData } from "@/types/BackendData";

export const TEST_DATA: BackendData = {
  daily: "12020",
  total: "10000",
  measurements: [
    { timestamp: "2024-01-01T08:00:00Z", currentEnergy: "120" }, // Schwacher Tag
    { timestamp: "2024-01-02T08:05:00Z", currentEnergy: "220" }, // Sonniger Tag
    { timestamp: "2024-01-03T08:10:00Z", currentEnergy: "180" }, // Leichter Wechsel
    { timestamp: "2024-01-04T08:15:00Z", currentEnergy: "300" }, // Sehr sonnig
    { timestamp: "2024-01-05T08:20:00Z", currentEnergy: "250" }, // Durchschnittlich
    { timestamp: "2024-01-06T08:25:00Z", currentEnergy: "100" }, // Viel bewölkt
    { timestamp: "2024-01-07T08:30:00Z", currentEnergy: "400" }, // Perfekte Bedingungen
    { timestamp: "2024-01-08T08:35:00Z", currentEnergy: "320" }, // Klarer Himmel
    { timestamp: "2024-01-09T08:40:00Z", currentEnergy: "200" }, // Teilweise bewölkt
    { timestamp: "2024-01-10T08:45:00Z", currentEnergy: "180" }
  ],
};
