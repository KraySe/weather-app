import { useEffect, useState } from "react";
import axios from "axios";
import { getWeatherUrl } from "../utils/urls";
import getAllWeather from "../utils/transform/getAllWeather";
import { getCityCode } from "../utils/utils";

const useCityList = (cities, allWeather, onSetAllWeather) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const url = getWeatherUrl({ city, countryCode });

      try {
        const propName = getCityCode(city, countryCode);
        onSetAllWeather({ [propName]: {} });

        const { data } = await axios.get(url);
        const allWeatherAux = getAllWeather(data, city, countryCode);

        onSetAllWeather(allWeatherAux);
      } catch (error) {
        if (error.response) {
          setError("ups!! it seems that an error has occurred");
        } else if (error.request) {
          setError("ups!! check your internet connection");
        } else {
          setError("ups!! problem loading data");
        }
      }
    };

    cities.forEach(({ city, countryCode }) => {
      if (!allWeather[getCityCode(city, countryCode)]) {
        setWeather(city, countryCode);
      }
    });
  }, [cities, allWeather, onSetAllWeather]);

  return { error, setError };
};

export default useCityList;
