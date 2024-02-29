import { ForecastTable } from "./ForecastTable";
import { SnowfallData } from "./forecast_response";
import { HtmlRenderer } from "./HtmlRenderer";
import {
  tableDataClass,
  tableDataPrimaryClass,
  tableRowClass
} from "./styleutils";

export default async function Home() {
  const forecastRequest = await fetch(
    "https://www.skibanff.com/api/data/weather-forecast",
    {
      next: { revalidate: 3600 }
    }
  );
  const forecastJson = (await forecastRequest.json()) as SnowfallData;

  return (
    <main className="flex min-h-screen flex-col gap-6 justify-between p-4">
      <div className="flex flex-col items-center ">
        <p className="text-lg">
          Current temp: {forecastJson.snowreport.village_temp.metric}°C
        </p>
        <p className="text-lg">
          Report time: {forecastJson.snowreport.timestamp}
        </p>
      </div>

      <h2 className="text-2xl">Snow Report</h2>

      <table className="">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Range
            </th>
            <th scope="col" className="px-6 py-3">
              Imperial
            </th>
            <th scope="col" className="px-6 py-3">
              Metric
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={tableRowClass}>
            <td className={tableDataPrimaryClass}>
              {forecastJson.snowreport.homepage.title}
            </td>
            <td className={tableDataClass}>
              {forecastJson.snowreport.homepage.imperial}
            </td>
            <td className={tableDataClass}>
              {forecastJson.snowreport.homepage.metric}cm
            </td>
          </tr>
          <tr className={tableRowClass}>
            <td className={tableDataPrimaryClass}>
              {forecastJson.snowreport.overnight.title}
            </td>
            <td className={tableDataClass}>
              {forecastJson.snowreport.overnight.imperial}
            </td>
            <td className={tableDataClass}>
              {forecastJson.snowreport.overnight.metric}cm
            </td>
          </tr>
          <tr className={tableRowClass}>
            <td className={tableDataPrimaryClass}>
              {forecastJson.snowreport.past24Hours.title}
            </td>
            <td className={tableDataClass}>
              {forecastJson.snowreport.past24Hours.imperial}
            </td>
            <td className={tableDataClass}>
              {forecastJson.snowreport.past24Hours.metric}cm
            </td>
          </tr>
          <tr className={tableRowClass}>
            <td className={tableDataPrimaryClass}>
              {forecastJson.snowreport.historical.title}
            </td>
            <td className={tableDataClass}>
              {forecastJson.snowreport.historical.imperial}
            </td>
            <td className={tableDataClass}>
              {forecastJson.snowreport.historical.metric}cm
            </td>
          </tr>
          <tr className={tableRowClass}>
            <td className={tableDataPrimaryClass}>
              {forecastJson.snowreport.settledBase.title}
            </td>
            <td className={tableDataClass}>
              {forecastJson.snowreport.settledBase.imperial}
            </td>
            <td className={tableDataClass}>
              {forecastJson.snowreport.settledBase.metric}cm
            </td>
          </tr>
          <tr className={tableRowClass}>
            <td className={tableDataPrimaryClass}>
              {forecastJson.snowreport.seasonTotal.title}
            </td>
            <td className={tableDataClass}>
              {forecastJson.snowreport.seasonTotal.imperial}
            </td>
            <td className={tableDataClass}>
              {forecastJson.snowreport.seasonTotal.metric}cm
            </td>
          </tr>
        </tbody>
      </table>

      <HtmlRenderer htmlText={forecastJson.snowreport.summary} />

      <ForecastTable
        forecastData={[
          ...forecastJson.forecast.today,
          ...forecastJson.forecast.week
        ]}
      />

      <HtmlRenderer htmlText={forecastJson.summary} />
    </main>
  );
}
