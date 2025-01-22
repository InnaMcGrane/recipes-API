import React from "react";
import cn from "classnames";
import styles from "./listRecipes.module.scss";
import Recipe from "../Recipe/Recipe";
import RecipeLoader from "../RecipeLoader/RecipeLoader";

const ListRecipes = ({ dataRecipes, isRecipesLoaded }) => {
  const { recipes } = dataRecipes;
  console.log(recipes);
  return (
    <div className={cn(styles["list-recipes"])}>
      {isRecipesLoaded === true
        ? recipes.map((objRecipe) => {
            return <Recipe id={objRecipe.id} title={objRecipe.name} img={objRecipe.image} rating={objRecipe.rating} tags={objRecipe.tags} key={objRecipe.id} />;
          })
        : new Array(8).fill(undefined).map((el) => <RecipeLoader />)}
    </div>
  );
};

export default ListRecipes;
