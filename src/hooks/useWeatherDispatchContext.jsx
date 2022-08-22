import { useContext } from "react";
import { WeatherDispatchContext } from "../WeatherContext";

const useWeatherDispatchContext = () => {
  const dispatch = useContext(WeatherDispatchContext);

  if (!dispatch) {
    throw Error("Must set dispath provider");
  }

  return dispatch;
};

export default useWeatherDispatchContext;
