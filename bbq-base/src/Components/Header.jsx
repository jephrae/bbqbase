import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../img/bbqbaselogo.png";

export default function Headers() {
  const history = useHistory();

  return (
    <header>
      <h1 className="title">
        <Link to={"/recipes"}>
          <img src={Logo}></img>
        </Link>
      </h1>
      <Button onClick={() => history.push("/recipes/new")}>Add Recipe</Button>
      <InputGroup className="mb-3 search">
        {/* <FormControl placeholder="Search for Recipes" />
        <Button>Search!</Button> */}
      </InputGroup>
    </header>
  );
}
