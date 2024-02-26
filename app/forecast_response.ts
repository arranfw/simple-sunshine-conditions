export interface ForecastConditions {
  freezing_level: {
    imperial: number;
    metric: number;
  };
  temperature: {
    low?: {
      imperial: number;
      metric: number;
    };
    high?: {
      imperial: number;
      metric: number;
    };
  };
  precipitation: {
    type: string;
    amount: string;
  };
  wind: {
    direction: string;
    speed: {
      imperial: number;
      metric: number;
    };
  };
}

export interface ForecastDay {
  period: string;
  conditions: ForecastConditions;
  summary: string;
  iconcode: string;
}

export interface SnowfallData {
  forecast: {
    todayOnly: ForecastDay;
    today: ForecastDay[];
    week: ForecastDay[];
  };
  summary: string;
  timestamp: string;
  snowreport: {
    homepage: {
      title: string;
      imperial: string;
      metric: number;
    };
    overnight: {
      title: string;
      imperial: string;
      metric: number;
      display: boolean;
    };
    past24Hours: {
      title: string;
      imperial: string;
      metric: number;
      display: boolean;
    };
    historical: {
      title: string;
      inverval_days: number;
      imperial: string;
      metric: number;
      display: boolean;
    };
    settledBase: {
      title: string;
      imperial: string;
      metric: number;
      display: boolean;
    };
    seasonTotal: {
      title: string;
      imperial: string;
      metric: number;
      display: boolean;
    };
    summary: string;
    village_temp: {
      imperial: number;
      metric: number;
      iconcode: string;
    };
    timestamp: string;
  };
}
