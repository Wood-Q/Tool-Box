import { useState } from "react";
import "./weatherPage.css";

function WeatherPage() {
  const [isLoading, setisLoading] = useState(false);

  const [weather, setWeather] = useState({
    location: {
      name: "",
    },
    current: {
      temperature: "",
      weather_descriptions: "",
      humidity: "",
    },
  });

  const [error, setError] = useState("");

  async function fetchWeather(cityName) {
    try {
      setisLoading(true);
      const res = await fetch(
        `http://api.weatherstack.com/current?access_key=f4eca985bc0abda26f264fe47efbfd3b&query=${cityName}`
      );

      if (!res.ok) {
        throw new Error("Something went wrong with fetching weather");
      }

      const data = await res.json();
      setWeather(data);
      console.log(data);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      setisLoading(false);
    }
  }

  function handleClick() {
    const cityInput = document.getElementById("weather").value;
    fetchWeather(cityInput); // 直接使用输入框的值来查询天气
  }

  function Loader() {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  function ErrorMessage({ message }) {
    return (
      <div>
        <p>
          <span>👻</span>
          {message}
        </p>
      </div>
    );
  }

  return (
    <div className="contents">
      <h1>查询天气</h1>
      <input type="text" id="weather" />
      <button onClick={handleClick}>查询</button>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div>
          <h3>城市: {weather.location.name}</h3>
          <h3>温度: {weather.current.temperature}</h3>
          <h3>天气: {weather.current.weather_descriptions}</h3>
          <h3>湿度: {weather.current.humidity}</h3>
        </div>
      )}
    </div>
  );
}

export default WeatherPage;
