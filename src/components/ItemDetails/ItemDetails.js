import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { mealdb } = useParams();
  const [meal, setmeal] = useState([]);
  const { strMealThumb, strMeal, strInstructions } = meal;
  console.log(meal);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealdb}`)
      .then((res) => res.json())
      .then((data) => setmeal(data.meals[0]));
  }, [mealdb]);
  return (
    <div>
      <Card className="mx-auto" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            {strInstructions ? strInstructions.slice(0, 100) : "Not Found"}
          </Card.Text>
          =
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetails;
