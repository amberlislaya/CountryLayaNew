import React from 'react'
import style from "./Home.module.css"
import Cards from '../../Components/Cards/Cards'

const Home = () => {
  return (
    <div className={style.home}>
      <h1>Cards-Home</h1>
      <Cards/>
    </div>
  )
}

export default Home

