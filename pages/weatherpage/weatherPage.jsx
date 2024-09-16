import { useState } from "react";
import "./weatherPage.css";

function WeatherPage() {
    const [weather, setWeather] = useState({
        location: {
            name: ""
        },
        current: {
            temperature: "",
            weather_descriptions: "",
            humidity: ""
        }
    });


    async function fetchWeather(cityName) {
        const res = await fetch(`http://api.weatherstack.com/current?access_key=f4eca985bc0abda26f264fe47efbfd3b&query=${cityName}`);
        const data = await res.json();
        setWeather(data);
        console.log(data);
    }

    function handleClick() {
        const cityInput = document.getElementById("weather").value;
        fetchWeather(cityInput);  // 直接使用输入框的值来查询天气
    }

    return (
        <div className="contents">
            <h1>查询天气</h1>
            <input type="text" id="weather" />
            <button onClick={handleClick}>查询</button>
            <h3>城市: {weather.location.name}</h3>
            <h3>温度: {weather.current.temperature}</h3>
            <h3>天气: {weather.current.weather_descriptions}</h3>
            <img src={weather.current.weather_icons[0]} alt=""/>
            <h3>湿度: {weather.current.humidity}</h3>
        </div>
    );
}

export default WeatherPage;
