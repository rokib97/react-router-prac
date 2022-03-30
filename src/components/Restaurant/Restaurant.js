import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import Item from "../Item/Item";
import "./Restaurant.css";

const Restaurant = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleInputValue = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((res) => res.json())
      .then((data) => setData(data.meals));
  }, [value]);
  return (
    <div>
      <div className="d-flex w-50 mx-auto">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleInputValue}
        />
      </div>
      <div className="card-container container">
        {data && data.map((dt) => <Item item={dt} key={dt.idMeal} />)}
      </div>
    </div>
  );
};

export default Restaurant;
