import React, { useState } from "react";
import "./Weather.css";
import Weatherdetails from "./Weatherdetails";

const Weather = () => {
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("CHENNAI");
  const [country, setCountry] = useState("India");
  const [lan, setLan] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [text, setText] = useState("chennai");
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState("");

  const search = async () => {
    let apiKey = "YOUR_API_KEY";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=metric`;

    setLoading(true);
    try {
      let res = await fetch(url);
      let data = await res.json();

      if (data.cod === "404") {
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLan(data.coord.lat);
      setLog(data.coord.lon);
      setCityNotFound(false);
    } catch (error) {
      seterror("Error fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="data">
        <input
          type="text"
          className="inputbox"
          placeholder="Enter city name"
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyDown={(e) => e.key === "Enter" && search()}
        />
        <div className="search">
          <button onClick={search}>Search</button>
        </div>
      </div>

      {!loading && !cityNotFound && (
        <Weatherdetails
          icon={icon}
          temp={temp}
          city={city}
          country={country}
          lan={lan}
          log={log}
          humidity={humidity}
          wind={wind}
        />
      )}

      {loading && <div className="loadingmsg">Loading......</div>}
      {error && <div className="errormsg">{error}</div>}
      {cityNotFound && <div className="citynotfound">City Not Found</div>}
    </div>
  );
};

export default Weather;
