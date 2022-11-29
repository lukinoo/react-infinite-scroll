import { useContext } from "react";
import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { InfiniteScrollContext } from "../../Context/InfiniteScrollContext";
import { SInfiniteScroll } from "./IntiniteScroll.styled";

export const InfiniteScroll = () => {
  const { pokemons, isLoading } = useContext(InfiniteScrollContext);

  return (
    <SInfiniteScroll>
      {pokemons.map((pokemon) => {
        return <Card key={pokemon.id} {...pokemon} />;
      })}
      {isLoading && <Loading />}
    </SInfiniteScroll>
  );
};
