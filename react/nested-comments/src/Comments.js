import { useState } from "react";
import NestedComment from "./NestedComments";
import { useCommentsContext } from "./useCommentsContext";

const Comments = () => {
  const [inputText, setInputText] = useState("");
  const { state, addNewComment } = useCommentsContext();

  console.log("State", state);

  return (
    <div>
      <div className="add-comment-wrapper">
        <input
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          placeholder="Add comment"
        />
        <button
          onClick={() => {
            addNewComment(inputText);
            setInputText("");
          }}
        >
          Type
        </button>
      </div>
      <div className="nested-wrapper">
        {state?.items?.length > 0 && <NestedComment data={state} />}
      </div>
    </div>
  );
};

export default Comments;