import { BackendData } from "@/types/BackendData";

export const TEST_DATA: BackendData = {
  daily: 12020,
  total: 822885.656,
  measurements: [
    { timestamp: "2024-01-01T08:00:00Z", currentEnergy: 120 },
    { timestamp: "2024-01-02T08:05:00Z", currentEnergy: 220 },
    { timestamp: "2024-01-03T08:10:00Z", currentEnergy: 180 },
    { timestamp: "2024-01-04T08:15:00Z", currentEnergy: 300 },
    { timestamp: "2024-01-05T08:20:00Z", currentEnergy: 250 },
    { timestamp: "2024-01-06T08:25:00Z", currentEnergy: 100 },
    { timestamp: "2024-01-07T08:30:00Z", currentEnergy: 400 },
    { timestamp: "2024-01-08T08:35:00Z", currentEnergy: 320 },
    { timestamp: "2024-01-09T08:40:00Z", currentEnergy: 200 },
    { timestamp: "2024-01-10T08:45:00Z", currentEnergy: 180 }
  ],
};
