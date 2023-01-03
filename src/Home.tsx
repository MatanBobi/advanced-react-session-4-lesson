import { PokemonsList } from "./PokemonsList";
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner/Spinner";
import { Dispatch, SetStateAction } from "react";

export function Home() {
  return (
    <>
      <Header>Pokémons</Header>
      <PokemonsList />
      <Footer />
    </>
  );
}
