import React from 'react'
import Card from "../Card/Card"
import style from "./Cards.module.css"



const Cards = ({countryAll, firstIndex, lastIndex}) => {
  return (

<div className={style.cards}>
   {countryAll?.map((pai,index)=>{
            return <Card key={index}
            id={pai.id}
            name={pai.name}
            img={pai.image}
            continent={pai.continent}
            activity={pai.activity}/>
         }).slice(firstIndex, lastIndex)}
</div>
)
}

export default Cards

