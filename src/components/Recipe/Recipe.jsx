import React from 'react';
import cn from 'classnames';
import styles from "./recipe.module.scss"
import Tag from '../Tag/Tag';
import Tabs from '../Tabs/Tabs';

const Recipe = ({ id, title, img, rating, tags, instructions, ingredients, prepTimeMinutes, cookTimeMinutes, setCurrentDataImgPopup }) => {
  return (
    <div className={cn(styles["recipe"])}>
      <div className={cn(styles["recipe__img-wrapper"])} onClick={() => setCurrentDataImgPopup({title, img})}>
        <img className={cn(styles["recipe__img"])} src={img} alt={title} />
      </div>
      <div className={cn(styles["recipe__content"])}>
        <h2 className={cn(styles["recipe__title"])}>{title}</h2>
        <div className={cn(styles["recipe__rating"])}>rating: {rating}</div>
        <Tabs instructions={instructions} ingredients={ingredients} prepTimeMinutes={prepTimeMinutes} cookTimeMinutes={cookTimeMinutes} />
        <div className={cn(styles["recipe__tags"])}>
          {tags.map((text, i) => {
            return <Tag text={text} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipe

/* {
  "recipes": [
    {
      "id": 1,
      "name": "Classic Margherita Pizza",
      "ingredients": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
      "prepTimeMinutes": 20,
      "cookTimeMinutes": 15,
      "servings": 4,
      "difficulty": "Easy",
      "cuisine": "Italian",
      "caloriesPerServing": 300,
      "tags": [
        "Pizza",
        "Italian"
      ],
      "userId": 45,
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
      "rating": 4.6,
      "reviewCount": 3,
      "mealType": [
        "Dinner"
      ]
    } */