import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  movies: [],
  relatedMovies: [],
  detailMovie: {},
  isNoData: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIES":
      return { ...state, movies: [...state.movies].concat(action.payload) };
      break;
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
      break;

    case "SET_RELATED_MOVIES":
      return { ...state, relatedMovies: action.payload };
      break;

    case "SET_DETAIL_MOVIES":
      return { ...state, detailMovie: action.payload };
      break;

    case "SET_IS_NO_DATA":
      return { ...state, isNoData: action.payload };
      break;

    default:
      return state;
      break;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
