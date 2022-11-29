import { Card } from "./components/Card";
import { useFetch } from "./hooks/useFetch";
import { Loading } from "./components/Loading";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

const App = () => {
  const [pokemons, isLoading] = useFetch(BASE_URL);

  console.log(pokemons);

  if (isLoading) return <Loading />;

  return (
    <div className="App">
      {pokemons.map((pokemon) => {
        return <Card key={pokemon.id} {...pokemon} />;
      })}
    </div>
  );
};

export default App;
