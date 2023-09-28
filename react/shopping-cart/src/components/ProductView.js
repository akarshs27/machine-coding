import { useProductContext } from "../useProductContext";

const ProductView = () => {
    const {state: {products, isLoading, cart},addProductToCart,removeProductFromCart} = useProductContext();

    if(isLoading) {
        return <p>Loading</p>;
    }

    return (
        <div className="product-wrapper">
            {products?.map(each => (
                <div key={each.id} className="each-product">
                    <img src={each.thumbnail} alt={each.title} />
                    <p>{each.title}</p>
                    <p>$ {each.price}</p>
                    {cart?.some(eachProduct => eachProduct.id === each.id) 
                    ? 
                    (<button onClick={() => removeProductFromCart(each)}>- Remove from Cart</button>)
                     :
                    (<button onClick={() => addProductToCart(each)}
                >+ Add to Cart</button>)
                    }
                </div>
            ))}
        </div>
    )
}

export default ProductView