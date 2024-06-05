import React, { useEffect, useState } from "react";

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  async function fetchData(params) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=4dd727a48c77373dd78edb846065e2f6`
      );
      const result = await res.json();

      if (result) {
        setWeatherData(result);
      }
    } catch {
      throw new Error("fail");
    }
  }
  useEffect(() => {
    fetchData("istanbul");
  }, []);

  function handleInput(e) {
    setInputValue(e.target.value);
  }
  function handleButton(e) {
    fetchData(inputValue);
  }
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  console.log(weatherData);
  return (
    <div>
      <div className="mt-[100px]">
        <div className=" space-x-5">
          <input
            type="text"
            className="border border-solid"
            placeholder="Enter City Name"
            value={inputValue}
            onChange={(e) => handleInput(e)}
          />
          <button onClick={() => handleButton()}>Search</button>
        </div>
        <div className="flex flex-row gap-5 justify-center mt-5">
          <h1>{weatherData.name}</h1>
          <span>{weatherData?.sys?.country} </span>
        </div>
        <span>{getCurrentDate()}</span>
        <div>
          {weatherData?.main?.temp}
        </div>
        <p>
          {weatherData?.weather[0]?.main}
        </p>
      </div>
    </div>
  );
}
