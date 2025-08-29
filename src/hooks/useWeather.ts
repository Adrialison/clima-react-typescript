import axios from "axios";
import type { searchtype } from "../type";
import { z } from "zod";
import { useMemo, useState } from "react";

// Zod
const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
});
export type Weather = z.infer<typeof Weather>;
export default function useWeather() {
  const [weather, setWeather] = useState<Weather>({
    name: "",
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
  });

  const fetchWeather = async (search: searchtype) => {
    const appID = import.meta.env.VITE_API_KEY;
    try {
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appID}`;

      const { data } = await axios(url);

      const lat = data[0].lat;
      const lon = data[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`;
      // Zod
      const { data: weatherResult } = await axios(weatherUrl);
      const result = Weather.safeParse(weatherResult);
      if (result.success) {
        setWeather(result.data);
      }
      console.log(weatherResult);
    } catch (error) {
      console.log(error);
    }
  };

  const hasWeatherData = useMemo(() => weather.name, [weather]);

  return {
    fetchWeather,
    weather,
    hasWeatherData,
  };
}
