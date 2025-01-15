import React from "react";
import styles from "./app.module.scss";
import cn from "classnames";
import ListRecipes from "../ListRecipes/ListRecipes";
import { useState, useEffect } from "react";

const App = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        // console.log("data ->", data);
        setRecipes(data);
      });
  }, []);

  return <div className="app">{recipes && <ListRecipes dataRecipes={recipes}/>}</div>;
};

export default App;
// recipes && <ListRecipes dataRecipes={recipes}/>
