import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const baseUrl = `https://api.weatherapi.com/v1`;

export const fetchCurrentWeather = async (city: string) => {
  const response = await axios.get(
    `${baseUrl}/current.json?key=${apiKey}&q=${city}`
  );
  return response.data;
};

export const fetchForecastWeather = async (city: string, date: string) => {
  const response = await axios.get(
    `${baseUrl}/forecast.json?key=${apiKey}&q=${city}&dt=${date}`
  );
  return response.data.forecast.forecastday[0];
};
