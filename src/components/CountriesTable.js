import React from 'react'

const CountriesTable = ({countries}) => {


    return (
        <div className="countries_container">
            {countries.map(country => (
                <div className="country_row" key={country.name.common}>
                    <div className="country_name">{country.name.common}</div>
                    <div className="country_population">{country.population.toLocaleString()}</div>
                </div>
            ))}
        </div>
    )
}

export default CountriesTable;
