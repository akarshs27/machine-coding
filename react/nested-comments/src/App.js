import { useState, useEffect } from "react";
import Comments from "./Comments";
import { useNode } from "./useNode";
import "./App.css";

const initialComment = {
  id: 1,
  items: [],
};

function App() {
  const [commentData, setCommentsData] = useState(initialComment);
  const { insertNode } = useNode();
  const [count, setCount] = useState(0);

  const onAddComment = (commentId, item) => {
    const newCommentStructure = insertNode(commentData, commentId, item);
    setCommentsData(newCommentStructure);
    setCount((prev) => prev + 1);
  };

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  console.log("CommentData", commentData);

  return (
    <div className="App">
      <p>{count}</p>
      <Comments comment={commentData} onAddComment={onAddComment} />
    </div>
  );
}

export default App;
