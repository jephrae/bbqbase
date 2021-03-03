import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function New() {
  const initialInfo = {
    name: "",
    meat_type: "",
    meat_cut: "",
    cooktime: "",
    temp: "",
    credit: "",
    photo_url: "",
    desc: "",
    instructions: "",
  };

  const [recipe, setRecipe] = useState(initialInfo);
  console.log("This is working");

  const clicked = () => {
    console.log("clicked");
  };
  const handleSubmit = (e) => {
    clicked();
    e.preventDefault();
    sendDetailsToServer();
    setRecipe(initialInfo);
  };

  console.log(recipe);
  const sendDetailsToServer = () => {
    console.log("Starting process...");

    if (
      recipe.name.length &&
      recipe.meat_type.length &&
      recipe.meat_cut.length &&
      recipe.desc.length
    ) {
      console.log("Connecting to url");
      axios.post("https://bbqbaseback.herokuapp.com/recipes/", recipe).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    event.preventDefault();
    setRecipe((prestate) => ({
      ...prestate,
      [id]: value,
    }));
  };

  // const [recipe, setRecipe] = useState({});
  // const history = useHistory();

  // const handleChange = (event) => {
  //   const { id, value } = event.target;
  //   setRecipe((prestate) => ({
  //     ...prestate,
  //     [id]: value,
  //   }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // console.log(recipe);
  //   addNewRecipe();
  //   // const options = {
  //   //   method: "POST",
  //   //   headers: { "Content-Type": "application/json" },
  //   //   body: JSON.stringify(recipe),
  //   // };
  //   // let response = await fetch("https://bbqbaseback.herokuapp.com/recipes", {
  //   //   method: "POST",
  //   //   headers: { "Content-Type": "application/json" },
  //   //   body: JSON.stringify(),
  //   // });
  //   // let resjson = await response.json();
  //   // console.log(resjson);
  //   // // fetch("https://bbqbaseback.herokuapp.com/recipes", options)
  //   // //   .then(history.push("/recipes"))
  //   // //   .catch(console.error);

  //   // setRecipe({ ...recipe, resjson });
  // };
  // const addNewRecipe = async (recipe) => {
  //   let recipeResponse = await fetch(
  //     "https://bbqbaseback.herokuapp.com/recipes",
  //     {
  //       credentials: "include",
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(recipe),
  //     }
  //   );
  //   let resjson = await recipeResponse.json();
  //   // console.log(resjson);
  //   // console.log(resjson.status);
  //   console.log(recipeResponse);
  //   console.log(resjson);
  //   console.log(recipe);
  //   // fetch("https://bbqbaseback.herokuapp.com/recipes", options)
  //   //   .then(history.push("/recipes"))
  //   //   .catch(console.error);

  //   setRecipe({ ...recipe });
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control
          placeholder="Enter the recipe's name"
          name="name"
          value={recipe.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Select Meat Type:</Form.Label>
        <select
          className="form-control"
          value={recipe.meat_type}
          onChange={handleChange}
          name="type"
        >
          <option selected>Choose Meat</option>
          <option value="CK">Chicken</option>
          <option value="BF">Beef</option>
          <option value="PK">Pork</option>
          <option value="FH">Fish</option>
          <option value="GM">Game</option>
        </select>
      </Form.Group>

      <Form.Group>
        <Form.Label>What cut of meat?</Form.Label>
        <Form.Control
          placeholder="Enter the Cut of Meat"
          name="cut"
          value={recipe.meat_cut}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>How long does the Recipe take?</Form.Label>
        <Form.Control
          placeholder="Enter the cooktime here"
          name="cooktime"
          value={recipe.cooktime}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>What is the temperature for this Recipe?</Form.Label>
        <Form.Control
          placeholder="Enter the temperature here"
          name="temp"
          value={recipe.temp}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Recipie by:</Form.Label>
        <Form.Control
          placeholder="credit whose recipe this is"
          name="credit"
          value={recipe.credit}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Photo URL:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Link to image of Recipe"
          name="photo_url"
          value={recipe.photo_url}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter description of the Recipe"
          name="desc"
          value={recipe.desc}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Instructions</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Recipe Instrucitons:"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}
