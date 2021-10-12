import { useState, useEffect } from "react";
import "./App.css";
import CountriesTable from "./components/CountriesTable";
import HeaderCountries from "./components/HeaderCountries";
import SearchBar from "./components/SearchBar";

function App() {
  const [countries, setCountries] = useState([]);
  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter((country) => 
    country.name.common.toLowerCase().includes(keyword)
    )

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countryData = await response.json();
      console.log(countryData);
      setCountries(countryData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  }

  return (
    <div className="App">
      <SearchBar countries={countries} onInputChange={onInputChange}/>
      <HeaderCountries />
      <CountriesTable countries={filteredCountries}/>
    </div>
  );
}

export default App;
