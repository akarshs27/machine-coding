import { createContext, useContext } from "react";

export const CommentContext = createContext();

export function useCommentsContext() {
  return useContext(CommentContext);
}
