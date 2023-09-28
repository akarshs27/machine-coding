import { useProductContext } from "../useProductContext";

const Cart = () => {
    const {state: {cart}, handleQtyChange} = useProductContext();


    const newTotal = cart.reduce((acc, each)=> {
        return acc + (each.price * each.qty);
    },0);

    return (
        <div className="cart-wrapper">
            <div className="total-amount">
                    <p>Total : $ {newTotal}</p>
            </div>
            {cart?.map((each) => (
                <div className="cart-card">
                    <img src={each.thumbnail} alt={each.title} />
                    <p>&nbsp;{each.title} &nbsp;</p>
                    <p>$ {each.price}</p>
                    <button onClick={() => handleQtyChange(each.id, each.qty - 1)}>-</button>
                        {each.qty} 
                        <button onClick={() => handleQtyChange(each.id, each.qty + 1)}> +</button>
                </div>
            ))}
        </div>
    )
}

export default Cart;