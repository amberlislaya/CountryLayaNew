import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_SEARCH = "GET_SEARCH";
export const CREATE_ACTIVITIES = "CREATE_ACTIVITIES";
export const GET_COUNTRYID = "GET_COUNTRYID";
export const FILTER = "FILTER";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";


export const getCountriesAll = () => {
 return async function ( dispatch ) {
     const getAllCountry = (await axios.get("http://localhost:3001/countries/")).data
     dispatch({ type: GET_COUNTRIES, payload: getAllCountry });
 };
}

export const searchCountry = (name) => {
    return async function (dispatch) {
        const countrySearch = await axios.get(`http://localhost:3001/countries/?name=${name}`)
        const dato = countrySearch.data;
        dispatch({ type: GET_SEARCH, payload: dato });
    };
}

export const createActivity = (activity) => {
  return async function (dispatch) {
    try {
      
      const activitiesDiscor = await axios.post("http://localhost:3001/activities", activity);
      dispatch({ type: CREATE_ACTIVITIES, payload: activitiesDiscor});
      alert("Actividad creada con exito")
      document.getElementById("name").value="";
      document.getElementById("dif").value = 1;
      document.getElementById("durt").value = 1;
      document.getElementById("sea").value = "select";
      document.getElementById("country1").value = "select";
      document.getElementById("country2").value = "select";
      document.getElementById("country3").value = "select";
      document.getElementById("sp").value = "";


    } catch (error) {
      alert(error.response.data.error)
      document.getElementById("name").value = "";
      document.getElementById("dif").value = 1;
      document.getElementById("durt").value = 1;
      document.getElementById("sea").value = "select";
      document.getElementById("country1").value = "select";
      document.getElementById("country2").value = "select";
      document.getElementById("country3").value = "select";
      document.getElementById("sp").value = "";


}   
  };
}

export const getCountryforID = (id) => {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/countries/${id}`);
        dispatch({type: GET_COUNTRYID, payload: response})
    }
}

export const filter = (fil) => {
  return function(dispatch) {
    return dispatch({type:FILTER, payload:fil})
  }
}

export const getActivity = () => {
  return async function(dispatch){
    const activities = (await axios.get(`http://localhost:3001/activities`)).data;
    dispatch({type: GET_ACTIVITIES,payload: activities})
  }
}

export const filtActivity =(act)=>{
  return function(dispatch){
    return dispatch({type:FILTER_ACTIVITY, payload:act})
  }
}