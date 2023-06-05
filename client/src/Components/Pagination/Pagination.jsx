import React from 'react'
import { useState } from 'react';
import style from "./Pagination.module.css"
// import { Link } from 'react-router-dom';

const Pagination = ({CountryPage, CurrentPage, setCurrentPage, totalCountries}) => {

const [pageNumberLimited, sePageNumberLimited] = useState(5)
const [maxPageNumberLimited, setMaxPageNumberLimited] = useState(5)
const [minPageNumberLimited, setMinPageNumberLimited] = useState(0)



let pageNumber = [];
for(let i = 1; i <= Math.ceil(totalCountries/CountryPage); i++){
  pageNumber.push(i);
}

const handlerClick = (event) => {
setCurrentPage(Number(event.target.id))
}

const renderPageItems = pageNumber.map((number)=>{
  if(number < maxPageNumberLimited + 1 && number > minPageNumberLimited){

 return (
    <li key={number} id={number} onClick={handlerClick} className={CurrentPage == number ? style.active:null}>{number}</li>
  )
  }else{
    return null;
  }
 
})

const onNextPage = () =>{
 if(CurrentPage < pageNumber.length){
  setCurrentPage(CurrentPage +1);


  if(CurrentPage + 1 > maxPageNumberLimited){
    setMaxPageNumberLimited(maxPageNumberLimited + pageNumberLimited)
    setMinPageNumberLimited(minPageNumberLimited + pageNumberLimited)
  }
}
}

 const onPrevPage = () => {
  if(CurrentPage > 1){
  setCurrentPage(CurrentPage -1)
  if((CurrentPage - 1)%pageNumberLimited == 0){
    setMaxPageNumberLimited(maxPageNumberLimited - pageNumberLimited)
    setMinPageNumberLimited(minPageNumberLimited - pageNumberLimited)
  }

}
};

  return (
    
<div className={style.container}>
      
   <button className={style.prev} onClick={() => onPrevPage()}>Prev</button>
   {renderPageItems}
   <button className={style.next} onClick={() => onNextPage()}>Next</button>

</div>
  )
}

export default Pagination;