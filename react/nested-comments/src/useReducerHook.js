import { useReducer } from "react";
import { inititalState } from "./constants";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return state;

    default:
      console.error("No matching action found");
  }
}

export function useReducerHook() {
  const [state, dispatch] = useReducer(reducer, inititalState);

  return {
    state,
  };
}
