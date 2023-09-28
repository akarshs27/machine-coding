import { ProductContext } from "./useProductContext";
import ProductView from "./components/ProductView";
import Cart from "./components/Cart";
import useProductData from "./useProductData";

function App() {
  const productData = useProductData();
  return (
    <div className="wrapper">
      <ProductContext.Provider value={productData}>
        <ProductView />
        <Cart />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
