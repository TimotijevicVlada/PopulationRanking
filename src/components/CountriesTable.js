import React from "react";
import { Link } from "react-router-dom";

const CountriesTable = ({ countries, loading }) => {
  return (
    <div className="countries_container">
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        countries.map((country) => (
          
          <div className="country_row" key={country.name.common}>
            <Link to={`/${country.name.common}`}>
            <div className="country_name">
                <img src={country.flags.png} alt={country.name.common} />
                {country.name.common}
            </div>
            <div className="country_population">
                <i className="fas fa-user"></i>{country.population.toLocaleString()}
            </div>
            <div className="country_area">{country.area} km<sup>2</sup></div>
            </Link>
          </div>
          
        ))
      )}
    </div>
  );
};

export default CountriesTable;
