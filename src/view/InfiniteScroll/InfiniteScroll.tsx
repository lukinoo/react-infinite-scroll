import { useContext } from "react";
import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { InfiniteScrollContext } from "../../Context/InfiniteScrollContext";
import { SInfiniteScroll } from "./IntiniteScroll.styled";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const InfiniteScroll = () => {
  const { pokemons, isLoading } = useContext(InfiniteScrollContext);

  // auto animate
  const [animationParent] = useAutoAnimate<HTMLDivElement>();

  return (
    <SInfiniteScroll ref={animationParent}>
      {pokemons.map((pokemon) => {
        return <Card key={pokemon.id} {...pokemon} />;
      })}
      {isLoading && <Loading />}
    </SInfiniteScroll>
  );
};
