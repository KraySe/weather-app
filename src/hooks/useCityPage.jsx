import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getForecastUrl } from "../utils/urls";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";

const useCityPage = (onSetChartData, onSetForecastItemList) => {
  const { city, countryCode } = useParams();

  // Example:
  // useDebugValue(`useCityPage ${city}`)
  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl({ city, countryCode });

      try {
        const { data } = await axios.get(url);
        const dataAux = getChartData(data);
        const forecastItemListAux = getForecastItemList(data);

        onSetChartData(dataAux);
        onSetForecastItemList(forecastItemListAux);
      } catch (error) {
        console.log(error);
      }
    };

    getForecast();
  }, [city, countryCode, onSetChartData, onSetForecastItemList]);

  return { city, countryCode };
};

export default useCityPage;
