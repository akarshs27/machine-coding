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

  const onAddComment = (commentId, item) => {
    const newCommentStructure = insertNode(commentData, commentId, item);
    setCommentsData(newCommentStructure);
  };

  console.log("CommentData", commentData);

  return (
    <div className="App">
      <Comments comment={commentData} onAddComment={onAddComment} />
    </div>
  );
}

export default App;
