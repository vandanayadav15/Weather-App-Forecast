import React from "react";

const WeatherCard = ({ day }) => {
  return (
    <div data-aos="fade-up-right">
      <li>
        <p>Date: {new Date(day.date).toLocaleDateString()}</p>
        <p>Day: {day.day.condition.text}</p>
        <p>Avg Temperature (Celsius): {day.day.avgtemp_c}</p>
        <p>Sunrise: {day.astro.sunrise}</p>
        <p>Sunset: {day.astro.sunset}</p>
      </li>
    </div>
  );
};

export default WeatherCard;
