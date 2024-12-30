import React, { useState } from "react";
import "./PlacesVisited.css";
import CountryList from "./CountryList";
import NewCountry from "./NewCountry";

const PlacesVisited = () => {
  const [countries, setCountries] = useState([
    { id: "c1", name: "Canada" },
    { id: "c2", name: "Spain" },
    { id: "c3", name: "Honduras" },
  ]);

  const onAddCountry = (newCountry) => {
    setCountries((prevCountries => [
      ...prevCountries,
      newCountry,
    ]))
  }

  return (
    <div>
      <h1 className="countries-header">Countries I have Visited</h1>
      <NewCountry addCountry={onAddCountry} />
      <CountryList countryList={countries} />
    </div>
  );
};

export default PlacesVisited;
