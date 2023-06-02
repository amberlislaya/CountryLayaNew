import React from 'react'
import style from "./Landing.module.css"
import {Link} from "react-router-dom"
// import image from "../../../public/"

const Landing = () => {
  return (
    <div className={style.landing}>
      <Link to="/home"><button className={style.button}>GO</button> </Link>  
      </div>
    // 
  )
}




export default Landing;