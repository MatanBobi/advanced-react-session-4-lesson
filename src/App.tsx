import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import Spinner from "./Spinner/Spinner";

const PokemonPage = lazy(() => import("./PokemonPage"));

export function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/pokemon/:id" element={<PokemonPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
