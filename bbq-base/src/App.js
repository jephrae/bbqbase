import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" render={() => <Redirect to="/recipes" />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
