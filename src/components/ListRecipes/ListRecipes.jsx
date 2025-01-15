import React from "react";
import cn from "classnames";
import styles from "./listRecipes.module.scss";
import Recipe from "../Recipe/Recipe";

const ListRecipes = ({ dataRecipes }) => {
  const { recipes } = dataRecipes;
  console.log(recipes);
  return (
    <div className={cn(styles["list-recipes"])}>
      {recipes.map((objRecipe) => {
        return <Recipe id={objRecipe.id} title={objRecipe.name} img={objRecipe.image} rating={objRecipe.rating} tags={objRecipe.tags} key={objRecipe.id} />;
      })}
    </div>
  );
};

export default ListRecipes;
