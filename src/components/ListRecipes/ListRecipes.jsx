import React from "react";
import cn from "classnames";
import styles from "./listRecipes.module.scss";
import Recipe from "../Recipe/Recipe";
import RecipeLoader from "../RecipeLoader/RecipeLoader";

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
              />
            );
          })
        : new Array(8).fill(undefined).map((el, i) => <RecipeLoader key={i} />)}
    </div>
  );
};

export default ListRecipes;
