const cities = [
  {
    city: "Badajoz",
    country: "España",
    countryCode: "ES",
  },
  {
    city: "Cáceres",
    country: "España",
    countryCode: "ES",
  },
  {
    city: "Barcelona",
    country: "España",
    countryCode: "ES",
  },
];

export const getCities = () => cities;

export const getCountryNameByCountryCode = (countryCode) =>
  cities.filter((c) => c.countryCode === countryCode)[0].country;
