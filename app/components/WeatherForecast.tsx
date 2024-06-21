import React from "react";
import {
  Forecast,
  ForecastContainer,
  ForecastDay,
  ForecastTemp,
} from "../styles/WeatherStyles";

interface ForecastData {
  day: string;
  temperature: number;
}

interface WeatherForecastProps {
  forecasts: ForecastData[];
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecasts }) => {
  return (
    <ForecastContainer>
      <Forecast>
        {forecasts.map((forecast) => (
          <>
            <ForecastDay>{forecast.day}</ForecastDay>
            <ForecastTemp>{Math.round(forecast.temperature)}°</ForecastTemp>
          </>
        ))}
      </Forecast>
    </ForecastContainer>
  );
};

export default WeatherForecast;
