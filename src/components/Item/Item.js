import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const navigate = useNavigate();
  //   console.log(item);
  const handleDetails = () => {
    navigate(`/item/${idMeal}`);
  };
  const { strMeal, strMealThumb, strInstructions, idMeal } = item;
  return (
    <div className="mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strInstructions.slice(0, 100)}</Card.Text>
          <Button onClick={handleDetails} className="mx-2" variant="primary">
            Details
          </Button>
          <Link to={`/item/${idMeal}`}>Details</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
