import { useEffect, useState } from "react";
import axios from "axios";
import type { TUseFetch } from "./useFetch.types";
import { v4 as uuidv4 } from "uuid";

type TPokemon = {
  name: string;
  url: string;
  id: string;
};

export const useFetch = (url: string): TUseFetch<TPokemon> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Array<TPokemon>>([]);
  const [offset, setOffset] = useState(0);

  const fetchPokemonApi = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(url + offset);
      const { results }: { results: Array<TPokemon> } = data;

      const new_pokemons: Array<TPokemon> = [];

      results.forEach((p: TPokemon) =>
        new_pokemons.push({ ...p, id: uuidv4() })
      );

      setPokemons((c) => [...c, ...new_pokemons]);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }

    setOffset((c) => c + 1);
  };

  useEffect(() => {
    fetchPokemonApi();
  }, []);

  return [pokemons, isLoading, fetchPokemonApi];
};
