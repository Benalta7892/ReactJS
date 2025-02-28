import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from "./type";
import axios from "axios";

export const loadApiComment = () => {
  return {
    type: LOAD_COMMENTS,
  };
};

export const loadCommentsSuccess = (comments) => {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const loadCommentsError = (error) => {
  return {
    type: LOAD_COMMENTS_ERROR,
    payload: error,
  };
};

export const apiCall = () => {
  return (dispatch) => {
    dispatch(loadApiComment());

    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        dispatch(loadCommentsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(loadCommentsError(err.message));
      });
  };
};
