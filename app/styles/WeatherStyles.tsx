import styled from "styled-components";

interface LocationTabProps {
  isSelected: boolean;
}

export const WeatherContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
  gap: 10px;
  border-radius: 10px;
  width: 500px;
  margin: 20px auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const Location = styled.div<LocationTabProps>`
  background-color: ${({ isSelected }) => (isSelected ? "black" : "#e0e0e0")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  padding: 10px;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  border-radius: 10px;

  @media (max-width: 768px) {
    grid-column: span 2;
  }

  @media (max-width: 480px) {
    grid-column: span 1;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const WeatherType = styled.div`
  font-size: 11px;
`;

export const CurrentWeather = styled.div`
  font-size: 11px;
`;

export const CurrentTempNumber = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

export const ForecastDay = styled.div`
  padding-bottom: 5px;
`;

export const ForecastTemp = styled.div`
  font-size: 32px;
  padding-bottom: 40px;
`;

export const CurrentCity = styled.div`
  grid-column: span 2;
  background-color: #212121;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  font-size: 4em;
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
    grid-column: span 2;
  }

  @media (max-width: 480px) {
    grid-column: span 1;
  }
`;

export const WeatherDetailsContainer = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 768px) {
    grid-column: span 2;
  }

  @media (max-width: 480px) {
    grid-column: span 1;
    grid-template-columns: 1fr;
  }
`;

export const WeatherDetails = styled.div`
  background-color: #28b5be;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.5em;

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

export const Icon = styled.div`
  font-size: 2em;
  color: white;

  @media (max-width: 480px) {
    font-size: 2.5em;
  }
`;

export const ForecastContainer = styled.div`
  grid-column: 3;
  grid-row: 2 / span 2;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    grid-column: span 2;
    grid-row: span 1;
  }

  @media (max-width: 480px) {
    grid-column: span 1;
  }
`;

export const Forecast = styled.div`
  background-color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 1em;
  border-radius: 10px;
  font-weight: bold;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;
