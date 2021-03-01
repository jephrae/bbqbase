import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import List from "./Components/List";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={List} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
