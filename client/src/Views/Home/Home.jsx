import {React, useEffect, useState} from 'react'
import style from "./Home.module.css"
import Cards from '../../Components/Cards/Cards'
import { useSelector, useDispatch } from 'react-redux'
import {getCountriesAll, searchCountry, filter, getActivity, filtActivity} from '../../Redux/action'
import Pagination from "../../Components/Pagination/Pagination"




const Home = () => {

const countryAll = useSelector(state=>state.country)
const countryName = useSelector(state=>state.countrySearch)
const feel = useSelector(state =>state.feel)
const activities = useSelector(state=>state.activitiesAll)
const filtAnd = useSelector(state=>state.filterActivity)
const dispatch = useDispatch()
const [filt, setFilt] = useState(feel)


const countryOrd = useSelector(state=>state.countryFilter)
const countryPop = useSelector(state=>state.countryPopu)
const [filtOrd, setFiltOrd] = useState(false)
const [filtOrdDecr, setFiltOrdDecr] = useState(false)
const [filtOrdeInc, setFiltOrdInc] = useState(false)
const [filtOrdDesc, setFiltOrdDesc] = useState(false)
const [filtCont, setFiltCont] = useState(false)
const [filtAct, setFiltAct] = useState(false)

const [CountryPage, setCountryPage] = useState(10)
const [CurrentPage, setCurrentPage] = useState()

const lastIndex = CurrentPage * CountryPage
const firstIndex = lastIndex - CountryPage

let totalCountries = countryAll && countryAll.length !==0 ? countryAll.length:0
useEffect(()=>{
dispatch(getActivity())
dispatch(getCountriesAll())
setCurrentPage(1)
setFilt(false)
},[])


console.log(totalCountries)
const handlerSearchName = (event) => {
  console.log(event.target.value)
setFilt(true);
setCurrentPage(1)
 dispatch(searchCountry(event.target.value)) 
}

const handlerChangeAsc = (event) => {
  event.preventDefault()
  if(event.target.name == "asc"){
  dispatch(filter(event.target.name)) 
  setFilt(false)
  setFiltOrd(true)
}
}
const hadlerChangeDesc = (event) =>{
  event.preventDefault()
  if(event.target.name == "desc"){
  dispatch(filter(event.target.name))
  setFilt(false)
  setFiltOrd(false)
  setFiltOrdDesc(true)
}
}
const handlerChangeInc = (event)=>{
  event.preventDefault()
  if(event.target.name == "inc") {
    dispatch(filter(event.target.name))
    setFilt(false)
  setFiltOrd(false)
  setFiltOrdDesc(false)
  setFiltOrdInc(true)  
}
}

const handlerChangeDecr = (event) => {  
  event.preventDefault()
  if(event.target.name == "decr"){
    dispatch(filter(event.target.name))
    setFilt(false)
  setFiltOrd(false)
  setFiltOrdDesc(false)
  setFiltOrdInc(false)
  setFiltOrdDecr(true)
  }
}

const handlerActivities = (event) => {
if(event.target.value !== "0"){
  setCurrentPage(1)
  setFiltAct(true)
  dispatch(filtActivity(event.target.value));
}else{
setFilt(false)
setFiltAct(false)
dispatch(getCountriesAll())
}
}

const onChangeCombo =(event)=>{
  if(isNaN(event.target.value)){
dispatch(getCountriesAll())
setCurrentPage(1)
// setFilt(true)
setFiltCont(true)
dispatch(filter(event.target.value))
}else{
  setFilt(false)
  dispatch(getCountriesAll())
}
}


         return (
<div>
<div className={style.container}>
  <select className={style.containerAct} name="Activities" onChange={handlerActivities}>
    <option className={style.containerSelect} value="Selection">Actividades</option>
    {activities?.map((element,index)=>{
      return <option key={index} value={element.name}>{element.name}</option>
    })}
  </select>

  <button className={style.ascdesc} name="inc" onClick={handlerChangeInc}>Popu +</button>
  <button className={style.ascdesc} name="asc" onClick={handlerChangeAsc}>Asc</button>
<input className={style.inputs} type="text" placeholder='Search' onChange={handlerSearchName}/>
<button className={style.ascdesc} name="desc" onClick={hadlerChangeDesc}>Desc</button>
<button className={style.ascdesc} name="decr" onClick={handlerChangeDecr}>Popu -</button>

<select className={style.select} name='Continet' onChange={onChangeCombo} >
  <option value="0">Continents</option>
  <option value="Africa">Africa</option>
  <option value="Asia">Asia</option>
  <option value="South America">South America</option>
  <option value="North America">North America</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>
</select>



</div>

<div className={style.home}>
<div >

</div>
{console.log(filt)}
</div>

{filt ? <Cards countryAll= {countryName} firstIndex = {firstIndex} lastIndex={lastIndex}/>: 
filtOrd ? 
 <Cards countryAll= {countryOrd} firstIndex = {firstIndex} lastIndex={lastIndex}/>: filtOrdDesc ?
 <Cards countryAll= {countryOrd} firstIndex = {firstIndex} lastIndex={lastIndex}/>: filtOrdeInc ? 
 <Cards countryAll= {countryPop} firstIndex = {firstIndex} lastIndex={lastIndex}/>: filtOrdDecr ?
 <Cards countryAll= {countryPop} firstIndex = {firstIndex} lastIndex={lastIndex}/>: filtCont ?
 <Cards countryAll= {countryOrd} firstIndex = {firstIndex} lastIndex={lastIndex}/>: filtAct ?
 <Cards countryAll= {filtAnd} firstIndex = {firstIndex} lastIndex={lastIndex}/>: 
 <Cards countryAll= {countryAll} firstIndex = {firstIndex} lastIndex={lastIndex}/>
 }
    <div>
      <Pagination CountryPage = {CountryPage}
            CurrentPage = {CurrentPage}
            setCurrentPage= {setCurrentPage} 
            totalCountries= {totalCountries}
            />
    </div>
    </div>
  )
}

export default Home

