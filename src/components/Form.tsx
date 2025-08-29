import { countries } from "../data/countries";
import { useState } from "react";
import type { searchtype } from "../type";
import styles from "./form.module.css";
export default function Formmodules() {
  const [search, setSearch] = useState<searchtype>({
    city: "",
    country: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city"> Ciudad </label>
        <input
          id="city"
          type="text"
          name="city"
          value={search.city}
          onChange={handleChange}
          placeholder="Ciudad"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="pais"> Pais </label>
        <select
          id="pais"
          value={search.country}
          onChange={handleChange}
          name="country"
        >
          <option value="">----Seleciona el Pais----</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {" "}
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" className={styles.submit} value="Consultar Clima" />
    </form>
  );
}
