import React from 'react'
import {Link} from "react-router-dom"
import style from "./NavBar.module.css"

const NavBar = () => {
  return (
<div className={style.container}>
<Link to="/" className="fs-3">Country<span>Amberlis</span></Link>
<div>

<div className={style.link}>    
     <Link to="/home" className="">Home</Link> 
     <Link to="/create" className="">Create</Link>    
</div>
</div>

  
</div>


    
 
 
  )
}

export default NavBar;