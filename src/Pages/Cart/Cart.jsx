import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
// import burger3 from "../../assets/burger3.webp";
import burger3 from "../../assets/burger3.png";
import toast from 'react-hot-toast'

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const {cartItem:{
    cheeseBurger:{quantity:cheeseBurger},
    vegCheeseBurger:{quantity:vegCheeseBurger},
    burgerWithFries:{quantity:burgerWithFries}
  },
  subTotal,tax,shippingCharge, total}=useSelector(state=>state.cart)
const {cartItem:cart}=useSelector(state=>state.cart)


  const dispatch=useDispatch()
  const navigate= useNavigate()

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({type:'cheeseBurgerIncrement'})
        dispatch({type:"calculatePrice"})
        break;
      case 2:
        dispatch({type:'vegCheeseBurgerIncrement'})
        dispatch({type:"calculatePrice"})
        break;
      case 3:
        dispatch({type:'burgerWithFriesIncrement'})
        dispatch({type:"calculatePrice"})
        break;
    
      default:
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        if(cheeseBurger===0) break;
        dispatch({type:'cheeseBurgerDecrement'})
        dispatch({type:"calculatePrice"})
        break;
      case 2:
        if(vegCheeseBurger===0) break;
        dispatch({type:'vegCheeseBurgerDecrement'})
        dispatch({type:"calculatePrice"})
        break;
      case 3:
        if(burgerWithFries===0) break;
        dispatch({type:'burgerWithFriesDecrement'})
        dispatch({type:"calculatePrice"})
        break;
    
      default:
        break;
    }
  };

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cart))
    localStorage.setItem("cartPrices", JSON.stringify({subTotal,tax,shippingCharge, total}))
  },[cart, subTotal,tax,shippingCharge, total])

  const handleCheckout=()=>{
    if(total===0) {
      toast.error('No Item in cart')
    }else{
      navigate('/shipping')
    }
  }

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"THE CLASSIC"}
          img={burger1}
          value={cheeseBurger}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"THE CHEESY"}
          img={burger2}
          value={vegCheeseBurger}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"THE FIRECRACKER"}
          img={burger3}
          value={burgerWithFries}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>Tk{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>Tk{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>Tk{shippingCharge}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>Tk{total}</p>
          </div>
          <button onClick={handleCheckout}>Checkout</button>
        </article>
      </main>
    </section>
  );
};

export default Cart;
