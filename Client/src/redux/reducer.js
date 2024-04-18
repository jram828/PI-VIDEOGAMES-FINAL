import { sortA_Z } from "../utils/sortA_Z";
import { sortRA } from "../utils/sortRA";
import { sortRD } from "../utils/sortRD";
import { sortZ_A } from "../utils/sortZ-A";
import { CLEAN_FILTER, CLEAN_VIDEOGAMES, SET_LOADING, SET_PAGE } from "./actionTypes";
import {ADD_FAV, CLOSE_VIDEOGAME, FILTER_VIDEOGAMES_BY_GENRE, FILTER_VIDEOGAMES_BY_ORIGIN, GET_VIDEOGAMES, GET_VIDEOGAME_BY_NAME, ORDER_VIDEOGAMES_BY_NAME, ORDER_VIDEOGAMES_BY_RATING, REMOVE_FAV, SET_SOURCE_FILTER} from "./actionTypes";

let initialState = {
  initialVideogames: [],
  myFavorites: [],
  initialMyFavorites: [],
  allVideogames: [],
  foundVideogame: [],
  initialFoundVideogame: [],
  videoPageContent: [],
  sourceFilter: "all",
  loading: "",
  page:1
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      //console.log("Payload Get Videogames: ", action.payload);
      return {
        ...state,
        allVideogames: action.payload,
        initialVideogames: action.payload,
      };

    case GET_VIDEOGAME_BY_NAME:
      //console.log("Payload Get Videogames By Name: ", action.payload);
      return {
        ...state,
        foundVideogame: action.payload,
        initialFoundVideogame: action.payload,
        loading: true,
      };

    case FILTER_VIDEOGAMES_BY_GENRE:
      if (action.payload.sourceFilter === "all") {
        //console.log("Payload Filter by  Sou: ", action.payload);
        if (action.payload.genre.toUpperCase() === "TODOS") {
          return {
            ...state,
            allVideogames: state.initialVideogames,
          };
        } else {
          //console.log("Genres filter by genre: ", state.allVideogames);

          let videogamesFilter = state.allVideogames.filter((videogame) =>
            videogame.genres
              .toUpperCase()
              .includes(action.payload.genre.toUpperCase())
          );
          //console.log("Videogames filter: ", videogamesFilter);

          if (videogamesFilter.length !== 0) {
            return {
              ...state,
              allVideogames: videogamesFilter,
              page:1
            };
          } else {
            return {
              ...state,
              allVideogames: [],
              loading: false,
            };
          }
        }
      } else if (action.payload.sourceFilter === "favorites") {
        //console.log('Payload genres filter: ', action.payload)
        if (action.payload.genre.toUpperCase() === "TODOS") {
          return {
            ...state,
            myFavorites: state.initialMyFavorites,
          };
        } else {
          //console.log("Genres filter by genre: ", state.myFavorites);

          let videogamesFilter = state.myFavorites.filter((videogame) =>
            videogame.genres
              .toUpperCase()
              .includes(action.payload.genre.toUpperCase())
          );

          if (videogamesFilter.length !== 0) {
            return {
              ...state,
              myFavorites: videogamesFilter,
              loading: false,
              page: 1,
            };
          } else {
            return {
              ...state,
              myFavorites: [],
              loading: false,
            };
          }
        }
      } else {
        if (action.payload.genre.toUpperCase() === "TODOS") {
          return {
            ...state,
            foundVideogame: state.initialFoundVideogame,
          };
        } else {
          //console.log("Search filter by genre: ", state.foundVideogame);

          let videogamesFilter = state.foundVideogame.filter((videogame) =>
            videogame.genres
              .toUpperCase()
              .includes(action.payload.genre.toUpperCase())
          );

          if (videogamesFilter.length !== 0) {
            return {
              ...state,
              foundVideogame: videogamesFilter,
              loading: false,
              page:1
            };
          } else {
            return {
              ...state,
              foundVideogame: [],
              loading: false,
            };
          }
        }
      }

    case CLOSE_VIDEOGAME:
      //console.log("Payload cLOSE : ", action.payload);
      return {
        ...state,
        allVideogames: state.allVideogames.filter(
          (videogame) => videogame.id !== action.payload
        ),
      };

    case FILTER_VIDEOGAMES_BY_ORIGIN:
      //console.log("Payload origin: ", action.payload);
      if (action.payload.sourceFilter === "all") {
        if (action.payload.origin.toUpperCase() === "TODOS") {
          return {
            ...state,
            allVideogames: state.initialVideogames,
          };
        } else if (action.payload.origin.toUpperCase() === "CREADO") {
          let videogamesFilterOrig = state.initialVideogames.filter(
            (videogame) => videogame.id.length === 36
          );

          if (videogamesFilterOrig.length !== 0) {
            return {
              ...state,
              allVideogames: videogamesFilterOrig,
              loading: false,
              page: 1,
            };
          } else {
            return {
              ...state,
              allVideogames: [],
              loading: false,
            };
          }
        } else {
          let videogamesFilterOrig = state.initialVideogames.filter(
            (videogame) => videogame.id.length !== 36
          );

          if (videogamesFilterOrig.length !== 0) {
            return {
              ...state,
              allVideogames: videogamesFilterOrig,
              loading: false,
              page: 1,
            };
          } else {
            return {
              ...state,
              allVideogames: [],
              loading: false,
            };
          }
        }
      } else if (action.payload.sourceFilter === "favorites") {
        if (action.payload.origin.toUpperCase() === "TODOS") {
          return {
            ...state,
            myFavorites: state.initialMyFavorites,
          };
        } else if (action.payload.origin.toUpperCase() === "CREADO") {
          let videogamesFilterOrig = state.initialMyFavorites.filter(
            (videogame) => videogame.id.length === 36
          );

          if (videogamesFilterOrig.length !== 0) {
            return {
              ...state,
              myFavorites: videogamesFilterOrig,
              loading: false,
              page: 1,
            };
          } else {
            return {
              ...state,
              myFavorites: [],
              loading: false,
            };
          }
        } else {
          let videogamesFilterOrig = state.initialMyFavorites.filter(
            (videogame) => videogame.id.length !== 36
          );

          if (videogamesFilterOrig.length !== 0) {
            return {
              ...state,
              myFavorites: videogamesFilterOrig,
              loading: false,
              page: 1,
            };
          } else {
            return {
              ...state,
              myFavorites: [],
              loading: false,
            };
          }
        }
      } else {
        //console.log("Origin search: ", action.payload.origin.toUpperCase());
        if (action.payload.origin.toUpperCase() === "TODOS") {
          return {
            ...state,
            foundVideogame: state.initialFoundVideogame,
          };
        } else if (action.payload.origin.toUpperCase() === "CREADO") {
          let videogamesFilterOrig = state.initialFoundVideogame.filter(
            (videogame) => videogame.id.length === 36
          );

          if (videogamesFilterOrig.length !== 0) {
            return {
              ...state,
              foundVideogame: videogamesFilterOrig,
              loading: false,
              page: 1,
            };
          } else {
            return {
              ...state,
              foundVideogame: [],
              loading: false,
            };
          }
        } else {
          // console.log('State Found: ',state.foundVideogame);
          let videogamesFilterOrig = state.initialFoundVideogame.filter(
            (videogame) => videogame.id.length !== 36
          );

          if (videogamesFilterOrig.length !== 0) {
            return {
              ...state,
              foundVideogame: videogamesFilterOrig,
              loading: false,
              page: 1,
            };
          } else {
            return {
              ...state,
              foundVideogame: [],
              loading: false,
            };
          }
        }
      }
    case ORDER_VIDEOGAMES_BY_RATING:
      if (action.payload.sourceFilter === "all") {
        if (action.payload.order.toUpperCase() === "RA") {
          return {
            ...state,
            allVideogames: sortRA([...state.allVideogames]),
          };
        } else {
          return {
            ...state,
            allVideogames: sortRD([...state.allVideogames]),
          };
        }
      } else if (action.payload.sourceFilter === "favorites") {
        if (action.payload.order.toUpperCase() === "RA") {
          return {
            ...state,
            myFavorites: sortRA([...state.myFavorites]),
          };
        } else {
          return {
            ...state,
            myFavorites: sortRD([...state.myFavorites]),
          };
        }
      } else {
        if (action.payload.order.toUpperCase() === "RA") {
          return {
            ...state,
            foundVideogame: sortRA([...state.foundVideogame]),
          };
        } else {
          return {
            ...state,
            foundVideogame: sortRD([...state.foundVideogame]),
          };
        }
      }

    case ORDER_VIDEOGAMES_BY_NAME:
      if (action.payload.sourceFilter === "all") {
        if (action.payload.order.toUpperCase() === "A-Z") {
          return {
            ...state,
            allVideogames: sortA_Z([...state.allVideogames]),
          };
        } else {
          return {
            ...state,
            allVideogames: sortZ_A([...state.allVideogames]),
          };
        }
      } else if (action.payload.sourceFilter === "favorites") {
        if (action.payload.order.toUpperCase() === "A-Z") {
          return {
            ...state,
            myFavorites: sortA_Z([...state.myFavorites]),
          };
        } else {
          return {
            ...state,
            myFavorites: sortZ_A([...state.myFavorites]),
          };
        }
      } else {
        if (action.payload.order.toUpperCase() === "A-Z") {
          return {
            ...state,
            foundVideogame: sortA_Z([...state.foundVideogame]),
          };
        } else {
          return {
            ...state,
            foundVideogame: sortZ_A([...state.foundVideogame]),
          };
        }
      }

    case ADD_FAV:
      return {
        ...state,
        initialMyFavorites: [...state.initialMyFavorites, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (videogame) => videogame.id !== action.payload
        ),
      };

    case CLEAN_FILTER:
      return {
        ...state,
        myFavorites: state.initialMyFavorites,
        allVideogames: state.initialVideogames,
        foundVideogame: state.initialFoundVideogame,
      };

    case CLEAN_VIDEOGAMES:
      return {
        ...state,
        foundVideogame: [],
      };

    case SET_SOURCE_FILTER:
      return {
        ...state,
        sourceFilter: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
