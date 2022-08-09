import React, { useReducer } from "react";

export const WeatherStateContext = React.createContext();

export const WeatherDispatchContext = React.createContext();

const initialValue = {
  allWeather: {},
  allChartData: {},
  allForecastItemList: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_WEATHER":
      const weatherCity = action.payload;
      const newAllWeather = { ...state.allWeather, ...weatherCity };
      return { ...state, allWeather: newAllWeather };
    case "SET_CHART_DATA":
      const chartDataCity = action.payload;
      const newChartDataCity = { ...state.chartDataCity, ...chartDataCity };
      return { ...state, allChartData: newChartDataCity };
    case "SET_FORECAST_ITEM_LIST":
      const forecastItemListCity = action.payload;
      const newForecastItemListCity = {
        ...state.forecastItemList,
        ...forecastItemListCity,
      };
      return { ...state, allForecastItemList: newForecastItemListCity };
    default:
      return state;
  }
};

const WeatherContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <WeatherDispatchContext.Provider value={dispatch}>
      <WeatherStateContext.Provider value={state}>
        {children}
      </WeatherStateContext.Provider>
    </WeatherDispatchContext.Provider>
  );
};

export default WeatherContext;
