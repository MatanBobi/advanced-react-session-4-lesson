import { PokemonsList } from "./PokemonsList";
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner/Spinner";
import React, { Dispatch, SetStateAction, Suspense } from "react";

export function Home() {
  return (
    <>
      <Header>Pokémons</Header>
      <Suspense fallback={<Spinner />}>
        <PokemonsList />
      </Suspense>
      <Footer />
    </>
  );
}
