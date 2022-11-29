import React, { createContext, ReactNode } from "react";
import { useFetch } from "../../hooks/useFetch";
import type { TISContext } from "./InfiniteScrollContext.types";

export const InfiniteScrollContext = createContext({} as TISContext);

type TInfiniteScrollContextProvider = {
  children: ReactNode;
};

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

export const InfiniteScrollContextProvider: React.FC<
  TInfiniteScrollContextProvider
> = ({ children }) => {
  const [pokemons, isLoading] = useFetch(BASE_URL);

  return (
    <InfiniteScrollContext.Provider value={{ pokemons, isLoading }}>
      {children}
    </InfiniteScrollContext.Provider>
  );
};
