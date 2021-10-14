import React, { useState, useEffect, useCallback } from "react";

//Match has access to ":id" that we put into a Route in App.js
const Details = ({ match }) => {


  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItem = useCallback( async () => {
    const respone = await fetch(
      `https://restcountries.com/v3.1/name/${match.params.id}`
    );
    const data = await respone.json();
    console.log(data);
    setItem(data);
    setLoading(false);
  }, [match.params.id])

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);



  

  return (
    <div className="details_container">
      {loading ? (
        <h1 className="details_loading">Loading...</h1>
      ) : (
        item.map((item) => (
          <div className="details_info" key={item.name.common}>
            <div className="flag">
                <div className="flag_up">
                    <img src={item.flags.png} alt={item.name.common} />
                    <h1>{item.name.common}</h1>
                    <p>{item.region}</p>
                </div>
                <div className="flag_bottom">
                    <div className="bottom_div">
                        <h3><i className="fas fa-user"></i> {item.population.toLocaleString()}</h3>
                        <span>Population</span>
                    </div>
                    <div className="bottom_div">
                        <h3>{item.area.toLocaleString()} km<sup>2</sup></h3>
                        <span>Area</span>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="details_title">Details</div>
                <div>
                    <span className="gray">Capital</span>
                    <span>{item.capital.map(item => (item))}</span>
                </div>
                <div>
                    <span className="gray">Native name</span>
                    <span>{item.name.official}</span>
                </div>
                <div>
                    <span className="gray">Subregion</span>
                    <span>{item.subregion}</span>
                </div>
                <div>
                    <span className="gray">Timoezone</span>
                    <span>{item.timezones.map(item => (item))}</span>
                </div>
                <div>
                    <span className="gray">Abbreviation</span>
                    <span>{item.fifa}</span>
                </div>
                <div>
                    <span className="gray">Google Maps</span>
                    <span><a href={item.maps.googleMaps} target="_blank" rel="noreferrer">Link to Google Maps</a></span>
                </div>
                <div className="border_countries">
                    <span className="gray">Neighbouring Countries</span>
                    <span>{!item.borders  ? "There is no neighbouring Countries (It's surrounding by the sea)" : item.borders.map(item => (item)).join(", ")}</span></div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Details;
