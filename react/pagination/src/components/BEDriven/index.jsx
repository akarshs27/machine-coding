import { useState, useEffect } from "react";
import EachProduct from "../FEDriven/EachProduct";
import "../../App.css";

const LIMIT = 10;

const BEDriven = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage}`
      );
      const data = await response.json();
      console.log("data", data);
      setProducts(data.products);
      setTotalPages(data.total);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (products.length === 0) {
    return <p>No products</p>;
  }

  function handlePageClick(page) {
    setCurrentPage(page * 10);
  }

  return (
    <div className="products-wrapper">
      {products.map((eachProduct) => (
        <EachProduct key={eachProduct.id} product={eachProduct} />
      ))}
      <div>
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage((prev) => prev - 10)}
        >
          Prev
        </button>
        {[...Array(Math.ceil(totalPages / 10)).keys()].map((each, index) => (
          <button key={index} onClick={() => handlePageClick(index)}>
            {index + 1}
          </button>
        ))}
        <button
          disabled={totalPages - currentPage < 10}
          onClick={() => setCurrentPage((prev) => prev + 10)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BEDriven;
