// src/App.js
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import ForecastList from "./components/ForecastList";
import SearchBar from "./components/SearchBar";
import fetchWeatherData from "./services/api";
import "./App.css";

const App = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showForecast, setShowForecast] = useState(false);
  const { bottom: slideUp } = useSpring({
    bottom: showForecast ? "0px" : "-200px",
  });

  useEffect(() => {
    if (location && !loading) {
      handleSearch();
    }
  }, [location]);

  const handleSearch = async (newLocation) => {
    setLoading(true);
    setWeatherData(null);
    setError(false);

    try {
      const response = await fetchWeatherData(newLocation);
      setWeatherData(response);
      setLoading(false);
      setShowForecast(true);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error("Error fetching weather data:", error);
    }
  };
  return (
    <div className="app-container">
      <SearchBar
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onSearch={handleSearch}
      />
      <animated.div style={slideUp}>
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching weather data. Please try again.</p>}
        {weatherData && <ForecastList weatherData={weatherData} />}
      </animated.div>
    </div>
  );
};

export default App;
