import { Card } from "./components/Card";
import { useFetch } from "./hooks/useFetch";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

const App = () => {
  const [pokemons, isLoading] = useFetch(BASE_URL);

  console.log(pokemons);
  return (
    <div className="App">
      <Card />
    </div>
  );
};

export default App;
