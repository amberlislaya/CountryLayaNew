import {React, useEffect, useState} from 'react'
import style from "./Home.module.css"
import Cards from '../../Components/Cards/Cards'
import { useSelector, useDispatch } from 'react-redux'
import {getCountriesAll, searchCountry} from '../../Redux/action'
import Pagination from '../../Components/Pagination/Pagination'



const Home = () => {

const countryAll = useSelector(state=>state.country)
const countryName = useSelector(state=>state.countrySearch)
const feel = useSelector(state =>state.feel)
const dispatch = useDispatch()
const [filt, setFilt] = useState(feel)

const [CountryPage, setCountryPage] = useState(10)
const [CurrentPage, setCurrentPage] = useState()

const lastIndex = CurrentPage * CountryPage
const firstIndex = lastIndex - CountryPage

let totalCountries = countryAll && countryAll.length !==0 ? countryAll.length:0
useEffect(()=>{
dispatch(getCountriesAll())
setCurrentPage(1)
setFilt(false)
},[])
console.log(totalCountries)
const handlerSearchName = (event) => {
  console.log(event.target.value)
setFilt(true);
 dispatch(searchCountry(event.target.value)) 
}

  return (
<div>


<div className={style.container}>
<input className={style.inputs} type="text" placeholder='Search' onChange={handlerSearchName}/>
</div>


<div className={style.home}>
<div >

</div>
{console.log(filt)}
</div>

{filt ? <Cards countryAll= {countryName} firstIndex = {firstIndex} lastIndex={lastIndex}/>: <Cards countryAll= {countryAll} firstIndex = {firstIndex} lastIndex={lastIndex}/>}
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

