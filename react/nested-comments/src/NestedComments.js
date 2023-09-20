import "./App.css";

const NestedComment = ({ data }) => {
  if (data.items.length > 0) {
    return (
      <>
        {data.name && <div className="parent-comment">{data.name}</div>}
        {data.items.map((each) => (
          <NestedComment data={each} key={each.id} />
        ))}
      </>
    );
  }
  return <div className="child-comment">{data.name}</div>;
};

export default NestedComment;
