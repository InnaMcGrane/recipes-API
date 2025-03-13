import React from "react";
import cn from "classnames";
import styles from "./listRecipes.module.scss";
import Recipe from "../Recipe/Recipe";
import RecipeLoader from "../RecipeLoader/RecipeLoader";
import { createPortal } from "react-dom";
import PopUp from "../PopUp/PopUp";

const ListRecipes = ({ dataRecipes, isRecipesLoaded }) => {
  /* 
  isRecipesLoaded - показывает надо ли рисовать реальные рецепты или лоадеры
  */

  return (
    <div className={cn(styles["list-recipes"])}>
      {isRecipesLoaded === true
        ? dataRecipes.map((objRecipe) => {
            return (
              <Recipe
                id={objRecipe.id}
                title={objRecipe.name}
                img={objRecipe.image}
                rating={objRecipe.rating}
                tags={objRecipe.tags}
                key={objRecipe.id}
                instructions={objRecipe.instructions}
                ingredients={objRecipe.ingredients}
                prepTimeMinutes={objRecipe.prepTimeMinutes}
                cookTimeMinutes={objRecipe.cookTimeMinutes}
              />
            );
          })
        : new Array(8).fill(undefined).map((el, i) => <RecipeLoader key={i} />)}
      {createPortal(<PopUp><img src="https://lipsum.app/random/800x400" /></PopUp>, document.body)}
    </div>
  );
};

export default ListRecipes;
