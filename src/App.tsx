import { useFetch } from "./hooks/useFetch";
import { Loading } from "./components/Loading";
import { InfiniteScroll } from "./view/InfiniteScroll";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

const App = () => {
  const [pokemons, isLoading] = useFetch(BASE_URL);

  console.log(pokemons);

  if (isLoading) return <Loading />;

  return (
    <div className="App">
      <InfiniteScroll />
    </div>
  );
};

export default App;
