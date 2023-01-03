import { PokemonsList } from "./PokemonsList";
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner/Spinner";
import { Dispatch, SetStateAction } from "react";

export function Home({
  setSelectedPokemon,
}: {
  setSelectedPokemon: Dispatch<SetStateAction<number | null>>;
}) {
  return (
    <>
      <Header>Pokémons</Header>
      <PokemonsList setSelectedPokemon={setSelectedPokemon} />
      <Footer />
    </>
  );
}
