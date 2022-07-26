import { useEffect, useState } from "react";
import axios from "axios";
import { getWeatherUrl } from "../utils/urls";
import getAllWeather from "../utils/transform/getAllWeather";

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const url = getWeatherUrl({ city, countryCode });

      try {
        const { data } = await axios.get(url);

        const allWeatherAux = getAllWeather(data, city, countryCode);

        setAllWeather((allWeather) => ({
          ...allWeather,
          ...allWeatherAux,
        }));
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
      setWeather(city, countryCode);
    });
  }, [cities]);

  return { allWeather, error, setError };
};

export default useCityList;
