import React from "react";
import { ForecastDay } from "./forecast_response";
import { tableDataClass, tableRowClass } from "./page";

export const ForecastTable: React.FC<{ forecastData: ForecastDay[] }> = ({
  forecastData
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse">
        <thead className="bg-gray-800 dark:bg-gray-700">
          <tr>
            <th className={tableDataClass}>Period</th>
            <th className={tableDataClass}>Conditions</th>
            <th className={tableDataClass}>Temperature (Low)</th>
            <th className={tableDataClass}>Temperature (High)</th>
            <th className={tableDataClass}>Precipitation</th>
            <th className={tableDataClass}>Wind</th>
          </tr>
        </thead>
        <tbody className="bg-gray-700 dark:bg-gray-600">
          {forecastData.map((forecast, index) => (
            <tr key={index} className={tableRowClass}>
              <td className={tableDataClass}>{forecast.period}</td>
              <td className={tableDataClass}>{forecast.summary}</td>
              <td className={tableDataClass}>
                {forecast.conditions.temperature.low?.metric}°C
              </td>
              <td className={tableDataClass}>
                {forecast.conditions.temperature.high?.metric}°C
              </td>
              <td className={tableDataClass}>
                {forecast.conditions.precipitation.type}:{" "}
                {forecast.conditions.precipitation.amount}
              </td>
              <td className={tableDataClass}>
                {forecast.conditions.wind.direction}{" "}
                {forecast.conditions.wind.speed.metric} km/h
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
