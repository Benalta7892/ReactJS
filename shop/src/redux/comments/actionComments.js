import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from "./type";

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
