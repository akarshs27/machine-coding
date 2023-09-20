import { useReducer } from "react";
import { inititalState } from "./constants";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NEW_COMMENT": {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    default:
      console.error("No matching action found");
  }
}

export function useReducerHook() {
  const [state, dispatch] = useReducer(reducer, inititalState);

  function addNewComment(item) {
    dispatch({
      type: "ADD_NEW_COMMENT",
      payload: {
        id: Date.now(),
        name: item,
        items: [],
      },
    });
  }

  return {
    state,
    addNewComment,
  };
}
