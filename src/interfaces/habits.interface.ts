export interface HabitInterface {
  name: string;
  description?: string;
  avatar?: string;

  color?: string;
  unit?: string;
  type: "measurable" | "y/n";

  target?: number;
  frequency?: number;

  groupKey?: string;
  owner: string;

  data?: TimeSeriesInterface[];
}

interface TimeSeriesInterface {
  timestamp: Date;
  value: number;
}
