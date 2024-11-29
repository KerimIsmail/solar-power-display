export type Measurement = {
  timestamp: string;
  currentEnergy: string;
}

export type BackendData = {
  daily: string;
  total: string;
  measurements: Measurement[];
}