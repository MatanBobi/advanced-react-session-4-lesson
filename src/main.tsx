import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ActivePokemonProvider } from "./ActivePokemonContext";
import { App } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ActivePokemonProvider>
      <App />
    </ActivePokemonProvider>
  </StrictMode>
);
