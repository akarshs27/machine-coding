function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state ? state + 1 : 1;

    case "DECREMENT":
      return state ? state - 1 : 0;

    case "RESET":
      return 0;
  }
}

// const reducers = combineReducers({
//   counterReducer: counterReducer,
// });

// console.log(reducers);
// const store = createStore(counterReducer);
const store = createStore(counterReducer);

document.querySelector(".plus").addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

document.querySelector(".minus").addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});

document.querySelector(".reset").addEventListener("click", () => {
  store.dispatch({ type: "RESET" });
});

store.subscribe(() => {
  const state = store.getState();
  document.querySelector(".counter").innerHTML = state;
});
