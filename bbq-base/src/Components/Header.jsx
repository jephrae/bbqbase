import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function Headers() {
  const history = useHistory();

  return (
    <header>
      <h1 className="title">BBQ BASE</h1>
      <Button onClick={() => history.push("/cars/new")}>Add Car</Button>
      <InputGroup className="mb-3 search">
        <FormControl placeholder="Search for Recipes" />
        <Button>Search!</Button>
      </InputGroup>
    </header>
  );
}
