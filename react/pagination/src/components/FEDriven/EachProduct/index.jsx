import "./style.css";

const EachProduct = ({ product }) => {
  const { title, thumbnail } = product;
  return (
    <div className="each-product">
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default EachProduct;
