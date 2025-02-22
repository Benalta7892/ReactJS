// ACTION
const BUT_PHONE = "BUY_PHONE";

function buyPhone() {
  return {
    type: BUT_PHONE,
  };
}

// Reducer
// (prevState, action) => newState

const initialState = {
  phones: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
      };
    default:
      return state;
  }
};
