import React from 'react'
import style from "./Card.module.css"
import {Link} from "react-router-dom"

const Card = ({id, name, img, continent }) => {
  return (
    <div>
<Link to={`/details/${id}`}>

<div className={style.cardName}> 
<div>
<h1 className={style.h4}>{name}</h1>
</div>

<div>
<h3 className={style.h5}>{continent}</h3>
</div>

<div>
<h5 className={style.h6}>{id}</h5>
</div>

<div>
<div className={style.img}>
<img src={img}/>
</div>

<div className={style.btn}>
  </div>
</div>
</div>
</Link>
</div>

  
    

)
}

export default Card;
