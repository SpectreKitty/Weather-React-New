import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import WeatherForecast from "./WeatherForecast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <WeatherForecast />
    <footer>
      Coded by Astry Brana, open-sourced on
      <a href="https://github.com/SpectreKitty/Weather-React-New"> GitHub </a>
      hosted on <a href="https://delicious-pastelito.netlify.app/"> Netlify</a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
