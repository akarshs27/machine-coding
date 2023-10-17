import "./App.css";

const Box = ({ item, handleClicked }) => {
  if (item?.isVisible) {
    return (
      <div
        className="box"
        style={{ backgroundColor: item.isClicked ? "green" : "yellow" }}
        onClick={() => handleClicked(item)}
      >
        <p>{item.id}</p>
      </div>
    );
  }

  return <div className="hidden-box" />;
};

export default Box;
