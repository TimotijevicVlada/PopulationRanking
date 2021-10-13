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
        <h1>Loading...</h1>
      ) : (
        item.map((item) => (
          <div key={item.name.common}>
            <h1>{item.name.common}</h1>
          </div>
        ))
      )}
    </div>
  );
};

export default Details;
