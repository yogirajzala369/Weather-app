export type WeatherData = {
  today: null | {
    current: any;
    maxtemp_c: number;
  };
  tomorrow: null | {
    day: any;
    maxtemp_c: number;
  };
  sunday: null | {
    day: any;
    maxtemp_c: number;
  };
  monday: null | {
    day: any;
    maxtemp_c: number;
  };
};
