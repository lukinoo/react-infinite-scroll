import React, { createContext, ReactNode, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import type { TISContext } from "./InfiniteScrollContext.types";

export const InfiniteScrollContext = createContext({} as TISContext);

type TInfiniteScrollContextProvider = {
  children: ReactNode;
};

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";

export const InfiniteScrollContextProvider: React.FC<
  TInfiniteScrollContextProvider
> = ({ children }) => {
  const [pokemons, isLoading, fetchPokemonApi] = useFetch(BASE_URL);

  const handleScroll = (e: Event): void => {
    if (!e.currentTarget) return;

    type THTMLDoc = HTMLDocument;

    // scroll events
    const {
      documentElement: { scrollTop, scrollHeight },
    } = e.target as THTMLDoc;

    // window height
    const { innerHeight } = window;

    // if user scroll at the bottom fetchPokemonAPi will get calls
    if (scrollTop + innerHeight + 1 >= scrollHeight) {
      fetchPokemonApi();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <InfiniteScrollContext.Provider
      value={{ pokemons, isLoading, fetchPokemonApi }}
    >
      {children}
    </InfiniteScrollContext.Provider>
  );
};
