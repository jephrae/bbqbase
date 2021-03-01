import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://bbqbaseback.herokuapp.com/recipes/")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>list test</h1>
      <div className="recipes-container">
        {recipes.map((recipe) => {
          return (
            <Card key={recipe.id}>
              <Card.Img variant="top" src={recipe.photo_url} />
              <Card.Body>
                <Card.Title>
                  {recipe.name} {recipe.meat_type} {recipe.meat_cut}
                </Card.Title>
                <Card.Text>{recipe.desc}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
