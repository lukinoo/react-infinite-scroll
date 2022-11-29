import { useEffect, useState } from "react";
import axios from "axios";

type TPokemon = {
  name: string;
  url: string;
};

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Array<TPokemon>>([]);

  const fetchPokemonApi = async () => {
    setIsLoading(true);

    axios
      .get(url)
      .then(({ data }) => {
        const { results }: { results: Array<TPokemon> } = data;

        const new_pokemons: Array<TPokemon> = [];
        results.forEach((p: TPokemon) => new_pokemons.push(p));

        setPokemons(new_pokemons);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchPokemonApi();
  }, [url]);

  return [pokemons, isLoading];
};
