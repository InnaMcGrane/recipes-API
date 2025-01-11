import React from 'react'
import cn from 'classnames'
import styles from "./listRecipes.module.scss"
import Recipe from '../Recipe/Recipe'

const ListRecipes = () => {
  return (
    <div className={cn(styles['list-recipes'])}>
      <Recipe/>
    </div>
  )
}

export default ListRecipes