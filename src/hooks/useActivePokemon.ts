import { useContext } from "react";
import { ActivePokemonContext } from "../ActivePokemonContext";

export function useActivePokemon() {
  const context = useContext(ActivePokemonContext);
  if (!context) {
    throw new Error(
      `useNetworkStatus must be used in a NetworkStatusProvider component`
    );
  }
  return context;
}
