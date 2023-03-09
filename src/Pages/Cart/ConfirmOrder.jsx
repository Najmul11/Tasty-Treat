import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/actions/order";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const [selectedPayment, setSelectedPayment] = useState('COD');

  const {cartItem,subTotal,tax,shippingCharge, total, shippingInfo} = useSelector(state=>state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePaymentSelect = (event) => {
    setSelectedPayment(event.target.value);
  };

  const submithandler = async(e)=>{
    e.preventDefault()
    if (selectedPayment==='COD') {
    const stats = await dispatch(createOrder(cartItem,subTotal,tax,shippingCharge, total, shippingInfo))
    if (stats.success===true) {
      toast.success(stats.message)
      dispatch({type:'clearMessage'})
      dispatch({type:'emptyState'})
      navigate('/paymentsuccess')
    }
    }else{

    }
  }

  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>

        <form onSubmit={submithandler}>
          <div onClick={() => setSelectedPayment('COD')}>
            <label htmlFor="cash">Cash On Delivery</label>
            <input type="radio" id="COD" name="payment" value="COD" checked={selectedPayment === 'COD'} onChange={handlePaymentSelect} />
          </div>
          <div onClick={() => setSelectedPayment('online')}>
              <label htmlFor="online">Online</label>
              <input type="radio" id="online" name="payment" value="online" checked={selectedPayment === 'online'} onChange={handlePaymentSelect} />
          </div>

          <button>Place Order</button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
