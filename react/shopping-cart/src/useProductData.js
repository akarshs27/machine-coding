import { useReducer , useEffect } from "react";

function reducer(state, action) {
    switch(action.type) {

      case 'IS_LOADING' :
        return {...state, isLoading: action.payload}

      case 'SET_PRODUCTS' :
        return {...state, products: action.payload};
        
      case 'ADD_PRODUCT_TO_CART' :
        return {...state, cart: [...state.cart, {...action.payload}]};

      case 'REMOVE__PRODUCT_FROM_CART' : 
        return {...state, cart: state.cart.filter(each => each.id !== action.payload.id)}
      
      case 'CHANGE_QUANTITY' : 
        return {
          ...state, cart: state.cart.filter(each => each.id === action.payload.id ? each.qty= action.payload.qty : each.qty)
        }

        default:
          throw new Error('Unhandled action');
    }
}

export default function useProductData() {
  const [state, dispatch] = useReducer(reducer, {
      products: [],
      cart: [],
      isLoading: false,
    } );

    async function getProductList() {
      try {
          dispatch({
            type: 'IS_LOADING',
            payload: true
          });
          const response = await fetch('https://dummyjson.com/products');
          const data = await response.json();
          dispatch({
              type: 'SET_PRODUCTS',
              payload: data.products
          })
          dispatch({
            type: 'IS_LOADING',
            payload: false
          })
      } catch(Error) {
          console.log("Error", Error);
        }
    }

     function addProductToCart(each) {
      dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        payload: {...each, qty: 1}
      })
    }

    function removeProductFromCart(each) {
      dispatch({
        type: 'REMOVE__PRODUCT_FROM_CART',
        payload: each
      })
    } 

    function handleQtyChange(id, qty) {
      dispatch({
        type: 'CHANGE_QUANTITY',
        payload: {
            id,
            qty
        }
    })
    }

    useEffect(() => {
      getProductList();
    },[])

    return {
      state,
      addProductToCart,
      removeProductFromCart,
      handleQtyChange
    }
    
}
