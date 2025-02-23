// ACTION
const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET";

function buyPhone() {
  return {
    type: BUY_PHONE,
  };
}

function buyTablet() {
  return {
    type: BUY_TABLET,
  };
}

// Reducer

const initialState = {
  phones: 5,
  tablets: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
      };
    case BUY_TABLET:
      return {
        ...state,
        tablets: state.tablets - 1,
      };
    default:
      return state;
  }
};

// Creer le store
const store = Redux.createStore(reducer);

// Recuperer la data du Store
const availablePhones = document.getElementById("count-phone");
const availableTablets = document.getElementById("count-tab");
availablePhones.innerHTML = store.getState().phones;
availableTablets.innerHTML = store.getState().tablets;

// Effectuer le Dispatch d'une action
document.getElementById("buy-phone").addEventListener("click", function () {
  store.dispatch(buyPhone());
});
document.getElementById("buy-tablet").addEventListener("click", function () {
  store.dispatch(buyTablet());
});

// Listerner
store.subscribe(() => {
  availablePhones.innerHTML = store.getState().phones;
  availableTablets.innerHTML = store.getState().tablets;
});
