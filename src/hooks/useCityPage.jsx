import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { getForecastUrl } from "../utils/urls";
import { toCelsius } from "../utils/utils";
import getChartData from "../utils/transform/getChartData";

const useCityPage = () => {
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { city, countryCode } = useParams();

  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl({ city, countryCode });

      try {
        const { data } = await axios.get(url);

        const dataAux = getChartData(data);

        setChartData(dataAux);

        const interval = [4, 8, 12, 16, 24];
        const forecastItemListAux = data.list
          .filter((item, index) => interval.includes(index))
          .map((item) => {
            return {
              hour: moment.unix(item.dt).hour(),
              weekDay: moment.unix(item.dt).format("dddd"),
              state: item.weather[0].main.toLowerCase(),
              temperature: toCelsius(item.main.temp),
            };
          });
        setForecastItemList(forecastItemListAux);
      } catch (error) {
        console.log(error);
      }
    };

    getForecast();
  }, [city, countryCode]);

  return { city, chartData, forecastItemList };
};

export default useCityPage;
