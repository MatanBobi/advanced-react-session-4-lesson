import { createContext, useState } from "react";

interface ActivePokemonContext {
  activePokemon: string;
  setActivePokemon: (pokemon: string) => void;
}

export const ActivePokemonContext = createContext<ActivePokemonContext | null>(
  null
);

interface ActivePokemonProviderProps {}

export function ActivePokemonProvider(props: ActivePokemonProviderProps) {
  const [activePokemon, setActivePokemon] = useState("");
  const value = { activePokemon, setActivePokemon };

  return <ActivePokemonContext.Provider value={value} {...props} />;
}
