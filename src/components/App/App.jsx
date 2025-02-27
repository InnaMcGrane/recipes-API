import React from "react";
import styles from "./app.module.scss";
import cn from "classnames";
import ListRecipes from "../ListRecipes/ListRecipes";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import ShortText from "../ShortText/ShortText";

const App = () => {
  const [recipes, setRecipes] = useState(null);
  const [isRecipesLoaded, setIsRecipesLoaded] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        console.log("data ->", data);
        setRecipes(data);
        setIsRecipesLoaded(true);
      });
  }, []);

  const getRecipesByTitle = (title) => {
    const result = recipes.recipes.filter((element) => {
      if (element.name.toLowerCase().includes(title)) {
        return true;
      }
    });
    return result;
  };

  return (
    <div className="app">
      <div className="container">
        <Header setSearchText={setSearchText} />
      </div>
      <div className="container">{<ListRecipes isRecipesLoaded={isRecipesLoaded} dataRecipes={isRecipesLoaded ? getRecipesByTitle(searchText) : []} />}</div>
    </div>
  );
};

export default App;
// recipes && <ListRecipes dataRecipes={recipes}/>
