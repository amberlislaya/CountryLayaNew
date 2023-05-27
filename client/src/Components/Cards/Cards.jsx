import React from 'react'
import Card from "../Card/Card"
import style from "./Cards.module.css"

const Cards = () => {
  return (
    <div className={style.cards}>

     <Card id={'ATF'} name={'gambia'} continent={'aficano'} />
     <Card id={'ATF'} name={'gambia'} continent={'aficano'}/>
     <Card id={'ATF'} name={'gambia'} continent={'aficano'}/>
     <Card id={'ATF'} name={'gambia'} continent={'aficano'}/>
     
     

    </div>
  )
}

export default Cards

