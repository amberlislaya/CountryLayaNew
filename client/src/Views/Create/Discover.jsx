import {React, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux"
import {createActivity, getCountriesAll} from '../../Redux/action'
import style from './Discover.module.css'

const Discover = () => {

const dispatch = useDispatch();
const countryAll = useSelector(state=>state.country)

const [activity, setActivity] = useState({
  name:"",
  difficulty: 1,
  duration: 1,
  season: "",
  countries: []
})

const [errors, setErrors] = useState({
  name:"",
  duration:""
})

 useEffect(()=>{
dispatch(getCountriesAll())
 },[]) 


const validate = (property, value) => {
var ExRegSoloLetras =/\d/;
console.log(property)
if(property == "name"){
if(ExRegSoloLetras.test(value)){

  setErrors({...errors, name : "El name solo puede contener letras" })
}
else if(value.length < 1) {
setErrors({...errors, name : "Debe completar el name" })
}else{setErrors({...errors, name : "" })}
}

if(property == "duration"){
  console.log("hola")
  if(value > 20){
    setErrors({...errors, duration : "Se supero el limite de tiempo permitido" })
  }
else {
  setErrors({...errors, duration : "" })

}
}

}

const handleCombo = (event) => {
const property = event.target.name;
const value = event.target.value;
let array = [];
array.push(...activity.countries,value)
setActivity({...activity, countries: [...array]})  
}

const handleCountries = (event) => {
const property = event.target.name;
const value = event.target.value;

  setActivity({
    ...activity,
    [property]: value
  });
  validate(property, value)
};

const handleRange = (event) => {
const property = event.target.name;
const value = event.target.value;
setActivity({
    ...activity,
    [property]: Number(value)
  });
  validate(property, value)
}

 const handleSubmit = (event) => {
  event.preventDefault();
dispatch(createActivity(activity))
  setErrors({
    ...errors, name:"",
    })
 }

 const hanlderCl = (event) => {
  event.preventDefault()
  setActivity({
    ...activity,
    duration:"1",
    difficulty:"1",
    
  })
document.getElementById("name").value=""
 }

  return (
<div className={style.cont}>

  <form onSubmit={handleSubmit}>

<div>
<h2 className={style.h2}>Discover</h2>

<label className={style.label}>Actividad</label>
<input className={style.inputact} type='text' name="name" id="name" onChange={handleCountries}/>
<br/>
<span className={style.error} id='sp'>{errors.name}</span>

<label className={style.label}>Difficulty : {activity.difficulty}</label>
<input className={style.inputa} id="dif" name='difficulty' type='range' onChange={handleRange} min='1' max='5' value={activity.difficulty}/>

<label className={style.label}>Duration : {activity.duration}</label>
<input  className={style.inputa} id="durt" name="duration" type='range' onChange={handleRange} step="1" min="1" max="24" value={activity.duration} />
<br/>
<span className={style.error}>{errors.duration}</span>

<label className={style.season}>Season</label>
<select className={style.cuadro} id="sea" name="season" onChange={handleCountries}>
    <option value='select'>Select Season</option>
    <option value='Verano'>Summer</option>
    <option value='Otoño'>Autumn</option>
    <option value='Invierno'>Winter</option>
    <option value='Primavera'>Spring</option>
</select>

<label className={style.label}>Country/Countries</label>
<select className={style.cuadro} id="country1" name="countryID"  onChange={handleCombo} >
    <option value="select" >Select Country</option>{countryAll && countryAll?.map(country => 
    <option key={country.id} value={country.id}>{country.name}</option>)}
</select>

<label className={style.label}>Country/Countries</label>
<select className={style.cuadro} id="country2" name="countryID"  onChange={handleCombo} >
    <option value="select" >Select Country</option>{countryAll && countryAll?.map(country => 
    <option key={country.id} value={country.id}>{country.name}</option>)}
</select> 

<label className={style.label}>Country/Countries</label>
<select className={style.cuadro} id="country3" name="countryID"  onChange={handleCombo} >
    <option value="select" >Select Country</option>{countryAll && countryAll?.map(country => 
    <option key={country.id} value={country.id}>{country.name}</option>)}
</select>
                 
<button className={style.button} type="submit">Submit</button>
<button className={style.clear} onClick={hanlderCl}>Clear All</button>
</div>
</form>       
</div>)
  
};

export default Discover;