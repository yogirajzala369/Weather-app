import React from "react";
import {
  WeatherDetails as StyledWeatherDetails,
  Icon,
  WeatherType,
  CurrentWeather,
  CurrentTempNumber,
} from "../styles/WeatherStyles";
import WeatherIcon from "./WeatherIcon";

interface WeatherDetailsProps {
  temperature: number;
  condition: string;
  isCurrent?: boolean;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  temperature,
  condition,
  isCurrent,
}) => {
  return (
    <StyledWeatherDetails
      style={{ backgroundColor: isCurrent ? "#28B5BE" : "#81c784" }}
    >
      {isCurrent ? (
        <>
          <CurrentTempNumber>{Math.round(temperature)}°</CurrentTempNumber>
          <CurrentWeather>CURRENT</CurrentWeather>
        </>
      ) : (
        <>
          <Icon>
            <WeatherIcon condition={condition} />
          </Icon>
          <WeatherType>{condition.toUpperCase()}</WeatherType>
        </>
      )}
    </StyledWeatherDetails>
  );
};

export default WeatherDetails;
