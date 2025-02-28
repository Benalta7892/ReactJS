import { BUY_TV } from "./type";

const initialStateTv = {
  tv: 10,
};

const tvReducer = (state = initialStateTv, action) => {
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        tv: state.tv - (action.payload ?? 1),
      };
    default:
      return state;
  }
};

export default tvReducer;
