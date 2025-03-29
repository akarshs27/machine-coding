import { useEffect, useState } from "react";
import "../../App.css";
import EachProduct from "./EachProduct";
import Pagination from "./Pagination";

const PAGE_SIZE = 10;

const FEDriven = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE;
  const end = (currentPage + 1) * PAGE_SIZE;

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (products.length === 0) {
    return <p>No product found</p>;
  }
  return (
    <>
      <div className="products-wrapper">
        {products.slice(start, end).map((eachProduct) => (
          <EachProduct key={eachProduct.id} product={eachProduct} />
        ))}
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default FEDriven;
