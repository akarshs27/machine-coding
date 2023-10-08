import { useState } from "react";
import Comments from "./Comments";
import { useNode } from "./useNode";
import "./App.css";

const initialComment = {
  id: 1,
  items: [],
};

function App() {
  const [commentData, setCommentsData] = useState(initialComment);
  const { insertNode, deleteNode } = useNode();

  const onAddComment = (commentId, item) => {
    const newCommentStructure = insertNode(commentData, commentId, item);
    setCommentsData(newCommentStructure);
  };

  const onDeleteComment = (commentId) => {
    const newCommentStructure = deleteNode(commentData, commentId);
    setCommentsData(newCommentStructure);
  };

  console.log("CommentData", commentData);

  return (
    <div className="App">
      <Comments
        comment={commentData}
        onAddComment={onAddComment}
        onDeleteComment={onDeleteComment}
      />
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=JpWhBY6DjrQ
