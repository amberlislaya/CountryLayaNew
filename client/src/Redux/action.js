import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_SEARCH = "GET_SEARCH";
export const CREATE_ACTIVITIES = "CREATE_ACTIVITIES";
export const GET_COUNTRYID = "GET_COUNTRYID";




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
      console.log(activitiesDiscor);
      dispatch({ type: CREATE_ACTIVITIES, payload: activitiesDiscor});
    } catch (error) {
      alert(error.response.data.error)
}   
  };
}

export const getCountryforID = (id) => {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/countries/${id}`);
        dispatch({type: GET_COUNTRYID, payload: response})
    }
}