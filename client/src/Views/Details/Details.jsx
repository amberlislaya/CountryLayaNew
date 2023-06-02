import React, { useEffect } from 'react'
import {useParams, Link} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import {getCountryforID} from "../../Redux/action"
import style from "./Details.module.css"


const Details = () => {

  const {id} = useParams();
let obj = "";

 let detalle = useSelector (state => state.countryID.data)

 let dispatch = useDispatch();

 useEffect(()=>{
  dispatch(getCountryforID(id))
 },[])

if(detalle !== undefined){
  obj = {
    id:detalle.id,
    name:detalle.name,
    image:detalle.image,
    continent:detalle.continent,
    subregion:detalle.subregion,
    area:detalle.area,
    population:detalle.population,

  }
}

  return (
    <div className={style.container}>
<div>
  <p className={style.name}>{obj.name}</p>
  <img className={style.img} src={obj.image} alt="" />
  <p className={style.cont}>continent: {obj.continent}</p>
  <p className={style.sub}>subregion: {obj.subregion}</p>
  <p className={style.area}>area: {obj.area}</p>
  <p className={style.popu}>population: {obj.population}</p>
  <div>
  <Link to="/home"><button className={style.buttVolver}>Volver</button></Link>
</div>
</div>
</div>

  )
}



export default Details