import { countries } from "../data/countries";
import { useForm } from "react-hook-form";
import Alert from "./alert";
import styles from "./form.module.css";
import type { searchtype } from "../type";

type FormProps = {
  fetchWeather: (data: searchtype) => Promise<void>;
};

export default function Form({ fetchWeather }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<searchtype>();

  const onSubmit = (data: searchtype) => {
    // data ya contiene city y country
    fetchWeather(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city"> Ciudad </label>
        <input
          id="city"
          type="text"
          placeholder="Ciudad"
          {...register("city", {
            required: "El nombre de la ciudad es obligatorio",
          })}
        />
        {errors.city && <Alert>{errors.city.message}</Alert>}
      </div>

      <div className={styles.field}>
        <label htmlFor="pais"> Pais </label>
        <select
          id="pais"
          {...register("country", {
            required: "El país es obligatorio",
          })}
        >
          <option value="">---- Selecciona el País ----</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.country && <Alert>{errors.country.message}</Alert>}
      </div>

      <input type="submit" className={styles.submit} value="Consultar Clima" />
    </form>
  );
}
