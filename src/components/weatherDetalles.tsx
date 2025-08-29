import type { Weather } from "../hooks/useWeather";
import { formatTemperature } from "../utils";
type WeatherProps = {
  weather: Weather;
};

export default function WeatherDetalles({ weather }: WeatherProps) {
  return (
    <div>
      <h2> Clima de: {weather.name}</h2>
      <p>{formatTemperature(weather.main.temp)}&deg;C</p>
      <div>
        <p>
          Min: <span>{formatTemperature(weather.main.temp_min)}&deg;C </span>
        </p>
        <p>
          Min: <span>{formatTemperature(weather.main.temp_max)}&deg;C </span>
        </p>
      </div>
    </div>
  );
}
