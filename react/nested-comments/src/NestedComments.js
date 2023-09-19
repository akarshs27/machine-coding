import "./App.css";

const NestedComment = ({ data }) => {
  if (data.items.length > 0) {
    return (
      <div className="comments">
        {data.items.map((each) => (
          <NestedComment data={each} key={each.id} />
        ))}
      </div>
    );
  }
  console.log("Data", data.name);

  return <div className="single-comment">{data.name}</div>;
};

export default NestedComment;
