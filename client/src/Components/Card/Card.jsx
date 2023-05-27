import React from 'react'
import style from "./Card.module.css"

const Card = (props) => {
  return (
  <div className={style.card}>

  <div className={style.title}>
    <h3>{props.id}</h3>
</div>

  <div>
    <h4>{props.name}</h4>  
</div>

<div>{props.continent}
</div>

<div>{props.capital}</div>
</div>
)
}

export default Card
