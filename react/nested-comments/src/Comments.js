import { useState } from "react";
import "./App.css";

const Comments = ({ comment, onAddComment, onDeleteComment }) => {
  const [input, setInput] = useState("");
  const [openReplyInput, setOpenReplyInput] = useState(false);
  const [replyInput, setReplyInput] = useState("");

  function handleAddComment() {
    onAddComment(comment.id, replyInput);
    setOpenReplyInput(false);
    setReplyInput("");
  }

  return (
    <>
      {comment.id === 1 ? (
        <div>
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type"
          />
          <button
            onClick={() => {
              onAddComment(comment.id, input);
              setInput("");
            }}
          >
            Add Comment
          </button>
        </div>
      ) : (
        <div className="each-comment">
          <span>{comment.name}</span>
          <div>
            <button onClick={() => setOpenReplyInput(true)}>Reply</button>
            <button onClick={() => onDeleteComment(comment.id)}>Delete</button>
          </div>
          {openReplyInput && (
            <div>
              <input
                type="text"
                value={replyInput}
                onChange={(event) => setReplyInput(event.target.value)}
              />
              <button onClick={handleAddComment}>Reply</button>
              <button onClick={() => setOpenReplyInput(false)}>Cancel</button>
            </div>
          )}
        </div>
      )}

      {comment?.items?.map((each) => {
        return (
          <Comments
            comment={each}
            key={each.id}
            onAddComment={onAddComment}
            onDeleteComment={onDeleteComment}
          />
        );
      })}
    </>
  );
};

export default Comments;
