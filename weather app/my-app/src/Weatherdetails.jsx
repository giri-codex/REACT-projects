import React from "react";

const Weatherdetails = ({ icon, temp, city, country, lan, log, humidity, wind }) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="WeatherIcon" />
      </div>
      <div className="temp">{temp} °C</div>
      <div className="city">{city}</div>
      <div className="country">{country}</div>
      <div className="corders">
        <div className="lan">Latitude<span>{lan}</span></div>
        <div className="log">Longitude<span>{log}</span></div>
      </div>
      <div className="dataconatiner">
        <div className="elements">
          <div className="humidity-percent">{humidity}%</div>
          <div className="humidity-text">Humidity</div>
        </div>
        <div className="elements">
          <div className="wind-percent">{wind} k/mph</div>
          <div className="wind-text">Wind</div>
        </div>
      </div>
    </>
  );
};

export default Weatherdetails;
