import React, { useState, useEffect } from "react";

export default function RecipeDeets(props) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(
      `https://bbqbaseback.herokuapp.com/recipes/${props.match.params.id}?format=json`
    )
      .then((res) => res.json())
      .then((res) => setRecipe(res))
      .catch(console.error);
  }, [props.match.params.id]);

  if (!recipe) {
    return <h2>loading...</h2>;
  }

  return (
    <div className="details-container">
      <h2>detail test</h2>
      <img src={recipe.photo_url} alt={recipe.name} />
      <div className="details">
        <h2>{recipe.name}</h2>
        <h3>{recipe.meat_cut}</h3>
        <h4>{recipe.desc}</h4>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}
