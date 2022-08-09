import React from "react";
import PropTypes from "prop-types";
import { List, Alert } from "@mui/material";
import useCityList from "../../hooks/useCityList";
import { getCityCode } from "../../utils/utils";
import CityListItem from "../CityListItem";

const renderCityAndCountry = (eventOnClickCity) => (cityAndCoutry, weather) => {
  const { city, countryCode } = cityAndCoutry;

  return (
    <CityListItem
      key={getCityCode(city, countryCode)}
      eventOnClickCity={eventOnClickCity}
      weather={weather}
      {...cityAndCoutry}
    />
  );
};

const CityList = ({ cities, onClickCity, data, actions }) => {
  const { allWeather } = data;
  const { error, setError } = useCityList(cities, allWeather, actions);
  return (
    <>
      {error && (
        <Alert onClose={() => setError(null)} severity={"error"}>
          {error}
        </Alert>
      )}
      <List>
        {cities.map((cityAndCoutry) =>
          renderCityAndCountry(onClickCity)(
            cityAndCoutry,
            allWeather[
              getCityCode(cityAndCoutry.city, cityAndCoutry.countryCode)
            ]
          )
        )}
      </List>
    </>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default React.memo(CityList);
