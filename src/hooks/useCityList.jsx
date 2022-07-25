import { useEffect, useState } from "react";
import axios from "axios";
import convertUnits from "convert-units";
import { getCityCode } from "../utils/utils";

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const appid = "8548ce8ec745e1ea8db3cfed3bcbadd6";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;
      const response = await axios.get(url);

      try {
        const { data } = response;
        const temperature = Number(
          convertUnits(data.main.temp).from("K").to("C").toFixed(0)
        );
        const state = data.weather[0].main.toLowerCase();

        const propName = getCityCode(city, countryCode);
        const propValue = { temperature, state };

        setAllWeather((allWeather) => ({
          ...allWeather,
          [propName]: propValue,
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
