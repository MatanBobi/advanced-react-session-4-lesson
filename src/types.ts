export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
  };
  species: { name: string; url: string };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
}

export enum FetchState {
  Idle = "Idle",
  Pending = "Pending",
  Success = "Success",
  Error = "Error",
}

export interface PokemonType {
  type: { name: string; url: string };
}

export interface PokemonChain {}
