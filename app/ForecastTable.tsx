import React from "react";
import { ForecastDay } from "./forecast_response";
import {
  tableDataPrimaryClass,
  tableDataClass,
  tableRowClass
} from "./styleutils";

const getSnowColor = (amount: string) => {
  const rangeMin = parseInt(amount.split("-")[0]);
  const rangeMax = parseInt(amount.split("-")[1]);
  const rangeTotal = (rangeMax + rangeMin) / 2;

  if (Number.isNaN(rangeTotal)) {
    return "";
  }

  console.log({ amount, minRange: rangeTotal });

  if (rangeTotal <= 3) {
    return "text-white";
  }

  if (rangeTotal <= 8) {
    return "text-green-500";
  }

  if (rangeTotal <= 13) {
    return "text-blue-500";
  }

  if (rangeTotal <= 18) {
    return "text-purple-500";
  }

  return "text-pink-500";
};

export const ForecastTable: React.FC<{ forecastData: ForecastDay[] }> = ({
  forecastData
}) => {
  console.log(forecastData[0].conditions.precipitation.amount);

  return (
    <div className="w-full">
      <h2 className="text-2xl mb-6">Forecast</h2>
      {forecastData.map((forecast) => (
        <div className="bg-slate-800 mb-2 border rounded p-2 flex flex-col items-center">
          <h3 className="bg-slate-900 text-lg w-full text-center ">
            {forecast.period}
          </h3>
          <p className="">{forecast.summary}</p>
          {forecast.conditions.temperature.low?.metric ? (
            <p>low: {forecast.conditions.temperature.low?.metric}</p>
          ) : null}
          {forecast.conditions.temperature.high?.metric ? (
            <p>high: {forecast.conditions.temperature.high?.metric}</p>
          ) : null}
          <p
            className={
              "font-extrabold " +
              getSnowColor(forecast.conditions.precipitation.amount)
            }
          >
            {forecast.conditions.precipitation.type}:{" "}
            {forecast.conditions.precipitation.amount}
          </p>
          <p className="">
            {forecast.conditions.wind.direction}{" "}
            {forecast.conditions.wind.speed.metric} km/h
          </p>
        </div>
      ))}
    </div>
  );
};
