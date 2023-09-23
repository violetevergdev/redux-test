/** @format */
import { useActions } from "../hooks/useActions";
import { useFavorites } from "../hooks/useFavorites";
import styles from "./RecipeItem.module.css";

import { useSelector } from "react-redux";

function RecipeItem({ recipe }) {
  const { favorites } = useFavorites();
  const { toggleFavorites } = useActions();

  const isExists = favorites.some((r) => r.id === recipe.id);

  console.log(favorites);
  return (
    <div className={styles.item}>
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExists ? "Remove from" : "Add to"} favorites
      </button>
    </div>
  );
}

export default RecipeItem;
