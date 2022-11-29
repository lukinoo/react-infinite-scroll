interface TPokemon {
  name: string;
  url: string;
  id: string;
}

export type TISContext = {
  pokemons: Array<TPokemon>;
  isLoading: boolean;
};
