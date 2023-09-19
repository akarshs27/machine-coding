import Comments from "./Comments";
import { useReducerHook } from "./useReducerHook";
import { CommentContext } from "./useCommentsContext";
import "./App.css";

function App() {
  const commentsData = useReducerHook();
  return (
    <CommentContext.Provider value={commentsData} className="App">
      <Comments />
    </CommentContext.Provider>
  );
}

export default App;
