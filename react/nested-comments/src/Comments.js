import { useState } from "react";
import "./App.css";

const Comments = ({ comment, onAddComment }) => {
  const [input, setInput] = useState("");
  const [openReplyInput, setOpenReplyInput] = useState(false);
  const [replyInput, setReplyInput] = useState("");

  function handleAddComment() {
    console.log("running");
    console.log("comment.id", comment.id);
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
              console.log("i also run");
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
            {/* <button onClick={() => {}}>Delete</button> */}
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
          <Comments comment={each} key={each.id} onAddComment={onAddComment} />
        );
      })}
    </>
  );
};

export default Comments;
