import axios from "axios";
import { axiosInstance } from "../helpers/axiosInstance";
const API_KEY = process.env.REACT_APP_API_KEY_TMDB;

export function fetchMovies(page = 1) {
  return async (dispatch, getState) => {
    try {
      const response = await axiosInstance({
        url: `/movie/now_playing?api_key=${API_KEY}&page=${page}`,
        method: "GET",
      });
      if (response.data.results.length === 0) {
        dispatch({
          type: "SET_IS_NO_DATA",
          payload: true,
        });
      } else {
        dispatch({
          type: "ADD_MOVIES",
          payload: response.data.results,
        });
        // dispatch({
        //   type: "SET_IS_NO_DATA",
        //   payload: false,
        // });
      }
    } catch (error) {
      console.log(error, "<<< err");
    }
  };
}

export function fetchDetail(id) {
  return async (dispatch, getState) => {
    try {
      const response = await axiosInstance({
        url: `/movie/${id}?api_key=${API_KEY}`,
        method: "GET",
      });
      console.log(response.data, "<< res detail");
      dispatch({
        type: "SET_DETAIL_MOVIES",
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
}

export function fetchSimilarMovies(id) {
  return async (dispatch, getState) => {
    try {
      const response = await axiosInstance({
        url: `/movie/${id}/similar?api_key=${API_KEY}`,
        method: "GET",
      });
      console.log(response.data, "<< res similar");
      dispatch({
        type: "SET_RELATED_MOVIES",
        payload: response.data.results,
      });
    } catch (error) {
      console.log(error, "<<err");
    }
  };
}
