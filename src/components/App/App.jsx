import React from "react";
import styles from "./app.module.scss";
import cn from "classnames";
import ListRecipes from "../ListRecipes/ListRecipes";
import { useState, useEffect } from "react";
import Header from "../Header/Header";

const App = () => {
  const [recipes, setRecipes] = useState(null);
  const [isRecipesLoaded, setIsRecipesLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        // console.log("data ->", data);
        setRecipes(data);
        setIsRecipesLoaded(true);
      });
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Header />
      </div>

      <div className="container">{<ListRecipes isRecipesLoaded={isRecipesLoaded} dataRecipes={recipes} />}</div>
    </div>
  );
};

export default App;
// recipes && <ListRecipes dataRecipes={recipes}/>
