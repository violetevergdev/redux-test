/** @format */

import { useFavorites } from "./hooks/useFavorites";
import RecipeItem from "./recipe-item/RecipeItem";
import { AiFillHeart } from "react-icons/ai";

function App() {
  const { favorites } = useFavorites();
  return (
    <section>
      <header>
        <AiFillHeart className="icon" />
        <span className="favoritesSum">{favorites.length}</span>
      </header>
      <div>
        <RecipeItem
          recipe={{
            id: 1,
            name: "Лазанья",
          }}
        />
        <RecipeItem
          recipe={{
            id: 2,
            name: "Паста",
          }}
        />
        <RecipeItem
          recipe={{
            id: 3,
            name: "Каша",
          }}
        />
      </div>
    </section>
  );
}

export default App;
