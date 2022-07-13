import React from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry = (cityAndCoutry) => {
  const { city, country } = cityAndCoutry;

  return (
    <li key={city}>
      <CityInfo city={city} country={country} />
      <Weather temperature={10} state="sunny" />
    </li>
  );
};

const CityList = ({ cities }) => {
  return (
    <ul>
      {cities.map((cityAndCoutry) => renderCityAndCountry(cityAndCoutry))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default CityList;
