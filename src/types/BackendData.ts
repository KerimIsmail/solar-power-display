export type Measurement = {
  timestamp: string;
  currentEnergy: number;
}

export type BackendData = {
  daily: number;
  total: number;
  measurements: Measurement[];
}