import styles from "./App.module.css";
import Form from "./components/Form";
import useWeather from "./hooks/useWeather";
import WeatherDetalles from "./components/weatherDetalles";

function App() {
  const { weather, fetchWeather, hasWeatherData } = useWeather();
  return (
    <>
      <h1 className={styles.title}>Buscardor de Clima</h1>
      <div className={styles.container}>
        {" "}
        <Form fetchWeather={fetchWeather} />
        {hasWeatherData && <WeatherDetalles weather={weather} />}
      </div>
    </>
  );
}

export default App;
