import {
  GET_COUNTRIES,
  CREATE_ACTIVITIES,
  GET_SEARCH,
  GET_COUNTRYID,
  FILTER,
  GET_ACTIVITIES,
  FILTER_ACTIVITY,
} from "./action";


const initialState = {
  country: [],
  CountryName: [],
  countrySearch: [],
  activitiesDiscor: [],
  countryID: [],
  countryFilter: [],
  countryPopu: [],
  activitiesAll: [],
  filterActivity: [],
  fillAdd: false,
  feel: false,
  countryFiltAsc: [],
  countryFiltDesc: [],
  countryPopuInc: [],
  countryPopuDecr: [],
  continentAsc: [],
  continentDesc: [],
  popuIncr: [],
  popuDecr: [],
  activityAsc: [],
  activityDesc: [],
  AscActivityPopu: [],
  DescActivityPopu:[],
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

  case FILTER:
    if (action.payload == "asc") {
      console.log(action.payload);
      return {
        ...state,
        feel: true,
        countryFilter: state.country.sort((prev, next) => {
          if (prev.name > next.name) return -1;
          if (prev.name < next.name) return 1;
          return 0;
        }),
      };
    }
    if (action.payload == "desc") {
      console.log(action.payload);
      return {
        ...state,
        feel: true,
        countryFilter: state.country.sort((prev, next) => {
          if (prev.name > next.name) return 1;
          if (prev.name < next.name) return -1;
          return 0;
        }),
      };
    }
    
    if (action.payload == "inc") {
      return {
        ...state,
        feel: true,
        countryPopu: state.country.sort((a, b) => {
          return b.population - a.population;
        }),
      };
    }
    if (action.payload == "decr") {
      return {
        ...state,
        fell: true,
        countryPopu: state.country.sort((a, b) => {
          return a.population - b.population;
        }),
      };
    }
    if(action.payload == "ascSearch"){
      return {
        ...state,
        countryFiltAsc: state.countrySearch.sort((prev, next) => {
          if (prev.name > next.name) return -1;
          if (prev.name < next.name) return 1;
          return 0;
        }),
      };
    }

    if(action.payload == "descSearch"){
      return {
        ...state,
        countryFiltDesc: state.countrySearch.sort((a, b) => a.name.localeCompare(b.name))
      };
    }

if (action.payload == "incSearch") {
  return {
    ...state,
    feel: true,
    countryPopuInc: state.countrySearch.sort((a, b) => {
      return b.population - a.population;
    }),
  };
}

if (action.payload == "decrSearch") {
  return {
    ...state,
    feel: true,
    countryPopuDecr: state.countrySearch.sort((a, b) => {
      return a.population - b.population;
    }),
  };
}

 if (action.payload == "ascContinent") {
   return {
     ...state,
     feel: true,
     continentAsc: state.countryFilter.sort((prev, next) => {
       if (prev.name > next.name) return -1;
       if (prev.name < next.name) return 1;
       return 0;
     }),
   };
 }

  if (action.payload == "descContinent") {
    return {
      ...state,
      feel: true,
      continentDesc: state.countryFilter.sort((prev, next) => {
        if (prev.name > next.name) return 1;
        if (prev.name < next.name) return -1;
        return 0;
      }),
    };
  }

  if (action.payload == "popuInc") {
  return {
    ...state,
    feel: true,
    popuIncr: state.countryFilter.sort((a, b) => {
      return b.population - a.population;
    }),
  }; 
  }
  if (action.payload == "popuDecr") {
      return {
        ...state,
        fell: true,
        popuDecr: state.countryFilter.sort((a, b) => {
          return a.population - b.population;
        }),
      };
    
}

if(action.payload == "ascActivity"){
  return {
    ...state,
    feel: true,
    activityAsc: state.filterActivity.sort((a, b) => {
      return b.name.localeCompare(a.name);
    }),
  };
}

if(action.payload == "descActivity"){
  return {
    ...state,
    feel: true,
    activityDesc: state.filterActivity.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }),
  };
  }

  if (action.payload == "popuAscAct") {
      return {
        ...state,
        fell: true,
        AscActivityPopu: state.filterActivity.sort((a, b) => {
          return a.population - b.population;
        }),
      };
    }

    if (action.payload == "popuDescAct") {
      return {
        ...state,
        fell: true,
        DescActivityPopu: state.filterActivity.sort((a, b) => {
          return b.population - a.population;
        }),
      };
    }

    if (
      action.payload == "Africa" ||
      action.payload == "Asia" ||
      action.payload == "South America" ||
      action.payload == "North America" ||
      action.payload == "Europe" ||
      action.payload == "Oceania"
    )
      return {
        ...state,
        fell: true,
        countryFilter: state.country.filter(
          (elem) => elem.continent == action.payload
        ),
      };

  case GET_ACTIVITIES:
    return {
      ...state,
      activitiesAll: action.payload,
    };

  case FILTER_ACTIVITY:
    if(state.country.find(e => e.Activities.length !== 0 && e.Activities.includes(action.payload))){
      let array = []
      for(let id of state.activitiesAll){
        if(id.name === action.payload){
          array.push(id.name)
        }
      }
      let info;
      info = state.country.filter(e=> e.Activities.length > 0 && e.Activities.includes(array[0]));
       return {
         ...state,
         fillAdd: true,
         filterActivity: info
       };
    }

  default:
    return { ...state };
}

}
export default rootReducer;