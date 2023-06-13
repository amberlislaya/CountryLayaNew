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
const searchAsc = useSelector(state=>state.countryFiltAsc)
const searchDesc= useSelector(state=>state.countryFiltDesc)
const searchInc = useSelector(state=>state.countryPopuInc)
const searchDecr = useSelector(state=>state.countryPopuDecr)
const continentAsce = useSelector(state=>state.continentAsc)
const desContinent = useSelector(state=>state.continentDesc)
const popuI = useSelector(state=>state.popuIncr)
const popuDecr = useSelector(state=>state.popuDecr)
const activyAsc = useSelector(state=>state.activityAsc)
const activyDesc = useSelector(state=>state.activityDesc)
const popuAscAct = useSelector(state=>state.AscActivityPopu)
const popuDescAct = useSelector(state=>state.DescActivityPopu)


const countryOrd = useSelector(state=>state.countryFilter)
const countryPop = useSelector(state=>state.countryPopu)
const [filtOrd, setFiltOrd] = useState(false)
const [filtOrdDecr, setFiltOrdDecr] = useState(false)
const [filtOrdeInc, setFiltOrdInc] = useState(false)
const [filtOrdDesc, setFiltOrdDesc] = useState(false)
const [filtCont, setFiltCont] = useState(false)
const [filtAct, setFiltAct] = useState(false)
const [SearchAsc, setSearchAsc] = useState(false)
const [SearchDesc, setSearchDesc] = useState(false)
const [SearchInc, setSearchInc] = useState(false)
const [SearchDecr, setSearchDecr] = useState(false)
const [SearchContinent, setSearchContinentAsc] = useState(false)
const [ContinentDesc, setContinentDesc] = useState(false)
const [PopuInc, setPopuInc] = useState(false)
const [PopuDecr, setPopuDecr] = useState(false)
const [AscActivy, setAscActivity] = useState(false)
const [DescActivity, setDescActivity] = useState(false)
const [PopuAscAct, setPopuAscAct] = useState(false)
const [PopuDescAct, setPopuDescAct] = useState(false)


const [CountryPage, setCountryPage] = useState(10)
const [CurrentPage, setCurrentPage] = useState()
const [Search, setSearch] = useState({
 name:"",
 population:"" 
})

const [continent, setContinent] = useState({
  continent:"",
  popu:"",
})
const [activity, setActivity] = useState({
  activity:"",
  popuActivity:"",
})

const lastIndex = CurrentPage * CountryPage
const firstIndex = lastIndex - CountryPage

let totalCountries = countryAll && countryAll.length !==0 ? countryAll.length:0
useEffect(()=>{
dispatch(getActivity())
dispatch(getCountriesAll())
setCurrentPage(1)
setFilt(false)
},[])

const handlerSearchName = (event) => {
  console.log(event.target.value)
setFilt(true);
setCurrentPage(1)
setSearch({
  ...Search,
  name:event.target.value,
  population:event.target.value,
})
 dispatch(searchCountry(event.target.value)) 
}

const handlerChangeAsc = (event) => {
  event.preventDefault()
  if(Search.name){
dispatch(filter("ascSearch")) 
  setFilt(false)
  setFiltOrd(false)
  setSearchAsc(true)
  setFiltOrdInc(false)
  setFiltOrdDecr(false)
  setSearchContinentAsc(false)
setSearch({
  ...Search, name:"",
})

}else if(continent.continent){
dispatch(filter("ascContinent")) 
  setFilt(false)
  setFiltOrd(false)
  setSearchAsc(false)
  setFiltOrdInc(false)
  setFiltOrdDecr(false)
  setSearchContinentAsc(true)
setContinent({
  ...continent, name:"",
})

}else if(activity.activity){
  dispatch(filter("ascActivity")) 
  setFilt(false)
  setFiltOrd(false)
  setSearchAsc(false)
  setFiltOrdInc(false)
  setFiltOrdDecr(false)
  setSearchContinentAsc(false)
  setAscActivity(true)
  setDescActivity(false)

}
else{ 
dispatch(filter(event.target.name)) 
  setFilt(false)
  setFiltOrd(true)}
}

const hadlerChangeDesc = (event) =>{
  event.preventDefault()

  if(Search.name){
  dispatch(filter("descSearch"))
  setFilt(false)
  setSearchAsc(false)
  setFiltOrd(false)
  setFiltOrdDesc(false)
  setSearchDesc(true)
  setFiltOrdInc(false)
  setFiltOrdDecr(false)

}else if(continent.continent){
  dispatch(filter("descContinent"))
  setFilt(false)
  setSearchAsc(false)
  setFiltOrd(false)
  setFiltOrdDesc(false)
  setSearchDesc(false)
  setFiltOrdInc(false)
  setFiltOrdDecr(false)
  setContinentDesc(true)

}else if(activity.activity){
dispatch(filter("descActivity"))
  setFilt(false)
  setSearchAsc(false)
  setFiltOrd(false)
  setFiltOrdDesc(false)
  setSearchDesc(false)
  setFiltOrdInc(false)
  setFiltOrdDecr(false)
  setContinentDesc(false)
  setDescActivity(true)
  setAscActivity(false)
}
else{ 

dispatch(filter(event.target.name))
setFilt(false)
  setFiltOrd(false)
  setFiltOrdDesc(true)
}}

const handlerChangeInc = (event)=>{
  event.preventDefault()
  setSearchContinentAsc(false)
  setContinentDesc(false)
  if(Search.population) {
    dispatch(filter("incSearch"))
    setFilt(false)
  setFiltOrd(false)
  setFiltOrdDesc(false)
  setFiltOrdInc(false) 
  setSearchAsc(false)
  setSearchInc(true) 
  setSearchDesc(false)
  setSearch({
    ...Search,
    population:"",

  })

}else if(continent.continent){
   dispatch(filter("popuInc"))
    setFilt(false)
  setFiltOrd(false)
  setFiltOrdDesc(false)
  setFiltOrdInc(false) 
  setSearchAsc(false)
  setSearchInc(true) 
  setSearchDesc(false)
  setPopuInc(true)
  

}else if(activity.popuActivity){
dispatch(filter("popuAscAct"))
    setFilt(false)
  setFiltOrd(false)
  setFiltOrdDesc(false)
  setFiltOrdInc(false) 
  setSearchAsc(false)
  setSearchInc(true) 
  setSearchDesc(false)
  setPopuInc(false)
  setPopuAscAct(true)

}
else{
   dispatch(filter(event.target.name))
    setFilt(false)
  setFiltOrd(false)
  setFiltOrdDesc(false)
  setFiltOrdInc(true)
}
}

const handlerChangeDecr = (event) => {  
  event.preventDefault()
  if(Search.population){
    dispatch(filter("decrSearch"))
    setFilt(false)
  setFiltOrd(false)
  setFiltOrdDesc(false)
  setFiltOrdInc(false)
  setFiltOrdDecr(false)
  setSearchDecr(true)
  setSearchInc(false) 
  setSearchDesc(false)

  }else if(continent.continent){
    dispatch(filter("popuDecr"))
    setFilt(false)
  setFiltOrd(false)
  setFiltOrdDesc(false)
  setFiltOrdInc(false)
  setFiltOrdDecr(false)
  setSearchDecr(false)
  setSearchInc(false) 
  setSearchDesc(false)
  setPopuDecr(true)
  }
  else if(activity.popuActivity){
     dispatch(filter("popuDescAct"))
    setFilt(false)
  setFiltOrd(false)
  setFiltOrdDesc(false)
  setFiltOrdInc(false)
  setFiltOrdDecr(false)
  setSearchDecr(false)
  setSearchInc(false) 
  setSearchDesc(false)
  setPopuDecr(false)
  setPopuDescAct(true)
  }
  else{
    
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
  setFiltCont(false)
  dispatch(filtActivity(event.target.value));
  setActivity({...activity, activity: event.target.value, popuActivity: event.target.value})

}else{
setFilt(false)
setFiltAct(false)
dispatch(getCountriesAll())
}
}

const onChangeCombo =(event)=>{
setSearch({...Search,
name:""
})
document.getElementById("search").value=""
  if(isNaN(event.target.value)){
dispatch(getCountriesAll())
setCurrentPage(1)
setFiltCont(true)
setFilt(false)
dispatch(filter(event.target.value))
setContinent({
  ...continent,
  continent:event.target.value
})

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
<input className={style.inputs} type="text" id="search" placeholder='Search' onChange={handlerSearchName}/>
<button className={style.ascdesc} name="desc" onClick={hadlerChangeDesc}>Desc</button>
<button className={style.ascdesc} name="decr" onClick={handlerChangeDecr}>Popu -</button>

<select className={style.select} name='Continent' onChange={onChangeCombo} >
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
 <Cards countryAll= {filtAnd} firstIndex = {firstIndex} lastIndex={lastIndex}/>: SearchAsc ?
 <Cards countryAll= {searchAsc} firstIndex = {firstIndex} lastIndex={lastIndex}/>: SearchDesc ?
 <Cards countryAll= {searchDesc} firstIndex = {firstIndex} lastIndex={lastIndex}/>: SearchInc ?
 <Cards countryAll= {searchInc} firstIndex = {firstIndex} lastIndex={lastIndex}/>: SearchDecr ?
 <Cards countryAll= {searchDecr} firstIndex = {firstIndex} lastIndex={lastIndex}/>: SearchContinent ?
 <Cards countryAll= {continentAsce} firstIndex = {firstIndex} lastIndex={lastIndex}/>: ContinentDesc ?
 <Cards countryAll= {desContinent} firstIndex = {firstIndex} lastIndex={lastIndex}/>: PopuInc ?
 <Cards countryAll= {popuI} firstIndex = {firstIndex} lastIndex={lastIndex}/>: PopuDecr ?
 <Cards countryAll= {popuDecr} firstIndex = {firstIndex} lastIndex={lastIndex}/>: AscActivy ?
 <Cards countryAll= {activyAsc} firstIndex = {firstIndex} lastIndex={lastIndex}/>: DescActivity ?
 <Cards countryAll= {activyDesc} firstIndex = {firstIndex} lastIndex={lastIndex}/>: PopuAscAct ?
 <Cards countryAll= {popuAscAct} firstIndex = {firstIndex} lastIndex={lastIndex}/>: PopuDescAct ?
 <Cards countryAll= {popuDescAct} firstIndex = {firstIndex} lastIndex={lastIndex}/>:
 <Cards countryAll= {countryAll} firstIndex = {firstIndex} lastIndex={lastIndex}/>
 }
    <div>
      <Pagination CountryPage = {CountryPage}
            CurrentPage = {CurrentPage}
            setCurrentPage= {setCurrentPage} 
            totalCountries= {totalCountries}
            Countries = {countryName}
            countryOrd={countryOrd}
            filtAnd={filtAnd}
            filt={filt}
            filtOrd={filtOrd}
            filtOrdDesc={filtOrdDesc}
            filtOrdeInc={filtOrdeInc}
            filtOrdDecr={filtOrdDecr}
            filtCont={filtCont}
            filtAct={filtAct}
            SearchAsc={SearchAsc}
            SearchDesc={SearchDesc}
            SearchInc={SearchInc}
            SearchDecr={SearchDecr}
            SearchContinent={SearchContinent}
            ContinentDesc= {ContinentDesc}
            PopuInc= {PopuInc}
            PopuDecr={PopuDecr}
            AscActivy={AscActivy}
            DescActivity={DescActivity}
            PopuAscAct={PopuAscAct}
            PopuDescAct={PopuDescAct}

            />
    </div>
    </div>
  )
}

export default Home

