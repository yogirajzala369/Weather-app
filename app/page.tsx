"use client";
import React, { useState, useEffect } from "react";
import {
  fetchCurrentWeather,
  fetchForecastWeather,
} from "./services/weatherService";
import {
  WeatherContainer,
  WeatherDetailsContainer,
  Location,
  CurrentCity,
} from "./styles/WeatherStyles";
import WeatherDetails from "./components/WeatherDetails";
import WeatherForecast from "./components/WeatherForecast";
import { WeatherData } from "./types/WeatherData";

const Home: React.FC = () => {
  const [city, setCity] = useState("Tokyo");
  const citiesList = ["Tokyo", "New York", "Moscow"];

  const [weatherData, setWeatherData] = useState<WeatherData>({
    today: null,
    tomorrow: null,
    sunday: null,
    monday: null,
  });

  const changeCity = (city: string) => {
    setCity(city);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const todayData = await fetchCurrentWeather(city);
        const tomorrowDate = new Date();
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        const tomorrowData = await fetchForecastWeather(
          city,
          tomorrowDate.toISOString().slice(0, 10)
        );

        const sundayDate = new Date();
        sundayDate.setDate(sundayDate.getDate() + (7 - sundayDate.getDay())); // Here I am getting data for next Sunday
        const sundayData = await fetchForecastWeather(
          city,
          sundayDate.toISOString().slice(0, 10)
        );

        const mondayDate = new Date();
        mondayDate.setDate(mondayDate.getDate() + (8 - mondayDate.getDay())); // Here I am getting data for next Monday
        const mondayData = await fetchForecastWeather(
          city,
          mondayDate.toISOString().slice(0, 10)
        );

        setWeatherData({
          today: todayData,
          tomorrow: tomorrowData,
          sunday: sundayData,
          monday: mondayData,
        });
      } catch (error) {
        console.error(
          "Seems like there are some issues fetching weather data:",
          error
        );
      }
    };

    fetchWeather();
  }, [city]);

  if (
    !weatherData.today ||
    !weatherData.tomorrow ||
    !weatherData.sunday ||
    !weatherData.monday
  ) {
    return <div>Loading the best weather app...</div>;
  }

  const forecasts = [
    { day: "TOMORROW", temperature: weatherData.tomorrow.day.maxtemp_c },
    { day: "SUNDAY", temperature: weatherData.sunday.day.maxtemp_c },
    { day: "MONDAY", temperature: weatherData.monday.day.maxtemp_c },
  ];

  return (
    <WeatherContainer>
      {citiesList.map((cityName) => (
        <Location
          key={cityName}
          isSelected={cityName === city}
          onClick={() => changeCity(cityName)}
        >
          {cityName.toUpperCase()}
        </Location>
      ))}
      <CurrentCity>{city.toUpperCase()}</CurrentCity>
      <WeatherDetailsContainer>
        <WeatherDetails
          temperature={weatherData.today.current.temp_c}
          condition={weatherData.today.current.condition.text}
          isCurrent
        />
        <WeatherDetails
          temperature={weatherData.today.current.temp_c}
          condition={weatherData.today.current.condition.text}
        />
      </WeatherDetailsContainer>
      <WeatherForecast forecasts={forecasts} />
    </WeatherContainer>
  );
};

export default Home;
