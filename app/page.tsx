import { HtmlRenderer } from "./HtmlRenderer";

interface Snowfall {
  title: string;
  imperial: string;
  metric: number;
}

const tableRowClass = "bg-gray-800";
const tableDataPrimaryClass =
  "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white";
const tableDataClass = "px-6 py-4";

export default async function Home() {
  const snowfallRequest = await fetch(
    "https://www.skibanff.com/api/data/snow-reports",
    {
      next: { revalidate: 3600 }
    }
  );
  const snowfallJson = await snowfallRequest.json();

  const forecastRequest = await fetch(
    "https://www.skibanff.com/api/data/weather-forecast",
    {
      next: { revalidate: 3600 }
    }
  );
  const forecastJson = await forecastRequest.json();

  console.log(forecastJson);

  const snowfall: Record<string, Snowfall> = {
    homepage: snowfallJson.homepage,
    overnight: snowfallJson.overnight,
    past24Hours: snowfallJson.past24Hours,
    historical: snowfallJson.historical,
    settledBase: snowfallJson.settledBase,
    seasonTotal: snowfallJson.seasonTotal
  };

  const summary: string = snowfallJson.summary;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <p>Current temp: {snowfallJson.village_temp.metric}°C</p>
        <p>Report time: {snowfallJson.timestamp}</p>
      </div>
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
            <td className={tableDataPrimaryClass}>{snowfall.homepage.title}</td>
            <td className={tableDataClass}>{snowfall.homepage.imperial}</td>
            <td className={tableDataClass}>{snowfall.homepage.metric}cm</td>
          </tr>
          <tr className={tableRowClass}>
            <td className={tableDataPrimaryClass}>
              {snowfall.overnight.title}
            </td>
            <td className={tableDataClass}>{snowfall.overnight.imperial}</td>
            <td className={tableDataClass}>{snowfall.overnight.metric}cm</td>
          </tr>
          <tr className={tableRowClass}>
            <td className={tableDataPrimaryClass}>
              {snowfall.past24Hours.title}
            </td>
            <td className={tableDataClass}>{snowfall.past24Hours.imperial}</td>
            <td className={tableDataClass}>{snowfall.past24Hours.metric}cm</td>
          </tr>
          <tr className={tableRowClass}>
            <td className={tableDataPrimaryClass}>
              {snowfall.historical.title}
            </td>
            <td className={tableDataClass}>{snowfall.historical.imperial}</td>
            <td className={tableDataClass}>{snowfall.historical.metric}cm</td>
          </tr>
          <tr className={tableRowClass}>
            <td className={tableDataPrimaryClass}>
              {snowfall.settledBase.title}
            </td>
            <td className={tableDataClass}>{snowfall.settledBase.imperial}</td>
            <td className={tableDataClass}>{snowfall.settledBase.metric}cm</td>
          </tr>
          <tr className={tableRowClass}>
            <td className={tableDataPrimaryClass}>
              {snowfall.seasonTotal.title}
            </td>
            <td className={tableDataClass}>{snowfall.seasonTotal.imperial}</td>
            <td className={tableDataClass}>{snowfall.seasonTotal.metric}cm</td>
          </tr>
        </tbody>
      </table>
      <HtmlRenderer htmlText={summary} />
    </main>
  );
}
