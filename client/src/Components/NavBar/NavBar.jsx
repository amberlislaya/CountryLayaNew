import React from 'react'
import {Link} from "react-router-dom"
import style from "./NavBar.module.css"

const NavBar = () => {
  return (
<div className={style.container}>
<h5><Link to="/" className={style.landinLink}>COUNTRY<span>.LAYA</span></Link></h5>
   <div className={style.link}>
     <Link to="/home" className={style.link}>Home</Link> 
     <Link to="/details" className={style.link}>Details</Link> 
     <Link to="/discover" className={style.link}>Discover</Link>
     <Link to="/contact" className={style.link}>Contact</Link>
    </div>   
</div>


    
 
 
  )
}

export default NavBar;