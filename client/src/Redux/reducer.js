import {
  GET_COUNTRIES,
  CREATE_ACTIVITIES,
  GET_SEARCH,
  GET_COUNTRYID,
} from "./action";


const initialState = {
  country: [],
  CountryName: [],
  countrySearch: [],
  activitiesDiscor: [],
  countryID: [],
  feel: false,
};

const rootReducer = (state = initialState, action) => {
 
switch (action.type) {
  case GET_COUNTRIES:
    return { ...state, country: action.payload };

  case GET_SEARCH:
    return { ...state, feel: true, countrySearch: action.payload };

  case CREATE_ACTIVITIES:
    return { ...state, activitiesDiscor: action.payload };

  case GET_COUNTRYID:
      return {
        ...state,
        countryID: action.payload,
      };

  default:
    return { ...state };
}

}
export default rootReducer;