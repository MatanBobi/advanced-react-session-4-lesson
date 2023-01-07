import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import Spinner from "./Spinner/Spinner";

const PokemonPage = lazy(() => import("./PokemonPage"));

export function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Router>
          <Switch>
            <Route path="/pokemon/:id" component={PokemonPage} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}
