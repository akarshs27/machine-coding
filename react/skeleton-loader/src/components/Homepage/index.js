import HomepageSkeleton from "./HomepageSkeleton";
import { useDataFetcher } from "../hooks/useDataFetcher";

const Homepage = () => {
  const { isLoading, data: shoppingCartData } = useDataFetcher(
    "https://fakestoreapi.com/products?limit=10"
  );

  return (
    <>
      {isLoading ? (
        <div className="skeleton-wrapper">
          <HomepageSkeleton count={8} />
        </div>
      ) : (
        <div className="cart-wrapper">
          {shoppingCartData.map((each) => (
            <div key={each.id} className="each-cart-wrapper">
              <img
                src={each.image}
                alt={each.title}
                className="each-cart-image"
              />
              <div className="cart-info-wrapper">
                <h2 className="each-cart-title">{each.title}</h2>
                <p className="each-cart-price">$ {each.price}</p>
                <p className="each-cart-price">{each.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Homepage;
