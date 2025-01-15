import React from 'react'
import cn from 'classnames';
import styles from "./tag.module.scss"

const Tag = ({text}) => {
  return <span className={cn(styles["tag"])}>{text}</span>;
}

export default Tag