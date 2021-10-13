import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CountriesTable from "./components/CountriesTable";
import HeaderCountries from "./components/HeaderCountries";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Details from "./components/Details";

function App() {
  const [countries, setCountries] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  const [direction, setDirection] = useState("asc"); //"asc" or "desc"
  const [value, setValue] = useState("common"); //"name" or "population"

  //Funtion to sort the data by name or population
  const orderBy = (countries, value, direction) => {
    if (direction === "asc" && value === "population") {
      return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }
    if (direction === "asc" && value === "area") {
      return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }
    if (direction === "asc" && value === "common") {
      return [...countries].sort((a, b) =>
        a.name[value] > b.name[value] ? 1 : -1
      );
    }

    if (direction === "desc" && value === "population") {
      return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }
    if (direction === "desc" && value === "area") {
      return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }
    if (direction === "desc" && value === "common") {
      return [...countries].sort((a, b) =>
        a.name[value] > b.name[value] ? -1 : 1
      );
    }
    return countries;
  };

  //Variable that we filter and after that send to displaying
  const orderedCountries = orderBy(countries, value, direction);

  //Funtion to switch direction
  const switchDirection = () => {
    if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection("desc");
    }
  };

  //Funtion to set the value of sorting type
  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  //Filter funtion
  const filteredCountries = orderedCountries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword)
  );

  //Change keyword for filter
  const onInputChange = (e) => {
    setKeyword(e.target.value.toLowerCase());
  };

  //Fetch data from api
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countryData = await response.json();
      console.log(countryData);
      setCountries(countryData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
          <SearchBar countries={countries} onInputChange={onInputChange} />
          <HeaderCountries direction={direction} setValueAndDirection={setValueAndDirection}/>
          <Switch>
            <Route path="/" exact>
              <CountriesTable loading={loading} countries={filteredCountries} />
            </Route>
            <Route path="/:id" component={Details}/>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
