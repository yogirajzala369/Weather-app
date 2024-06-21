import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiCloud,
  WiRain,
  WiSnow,
  WiFog,
} from "react-icons/wi";

type WeatherIconMapping = {
  [key: string]: JSX.Element;
};

const weatherIconMap: WeatherIconMapping = {
  sunny: <WiDaySunny />,
  clear: <WiNightClear />,
  "partly cloudy": <WiDayCloudy />,
  cloudy: <WiDayCloudy />,
  overcast: <WiCloud />,
  rain: <WiRain />,
  "light rain": <WiRain />,
  "moderate rain": <WiRain />,
  "heavy rain": <WiRain />,
  "patchy rain nearby": <WiRain />,
  "light rain shower": <WiRain />,
  snow: <WiSnow />,
  "light snow": <WiSnow />,
  "heavy snow": <WiSnow />,
  fog: <WiFog />,
  mist: <WiFog />,
};

interface WeatherIconProps {
  condition: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition }) => {
  const conditionLower = condition.toLowerCase();

  return weatherIconMap[conditionLower] || <WiDaySunny />;
};

export default WeatherIcon;
