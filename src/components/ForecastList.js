// src/components/ForecastList.js
import React from "react";
import WeatherCard from "./WeatherCard";
import "../styles/ForecastList.css";

const ForecastList = ({ weatherData }) => {
  if (
    !weatherData ||
    !weatherData.forecast ||
    !weatherData.forecast.forecastday
  ) {
    // Handle the case where weatherData is null, forecast is not available, or forecastday is not available
    return <p>No forecast data available</p>;
  }

  return (
    <div data-aos="fade-up-right">
      <div className="forecast-list">
        <h2>Weather Forecast</h2>
        <ul>
          {weatherData.forecast.forecastday.map((day) => (
            <WeatherCard key={day.date_epoch} day={day} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ForecastList;
