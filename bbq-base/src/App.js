import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import List from "./Components/List";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RecipeDeets from "./Components/RecipeDeets";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          {/* <Route path="/recipes/new" render={() => <New />} /> */}
          {/* <Route path="/recipes/:id" render={() => <RecipeDeets />} /> */}
          <Route path="/recipes/:id" component={RecipeDeets} />
          <Route path="/recipes" render={() => <List />} />
          <Route path="/" render={() => <Redirect to="/recipes" />} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
