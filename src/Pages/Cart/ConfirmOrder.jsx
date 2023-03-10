import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, createOrderOnlinePay } from "../../redux/actions/order";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from "axios";
import { server } from "../../redux/store";




const stripePromise=loadStripe('pk_test_51MM2bXEUzOIjs3850ZceXta2ian9MEvnN55bFWFTzUfdBd4Q61msbLe9UP2Xth7AFoXinUVQUY5zJYDj8ltziadQ00u78jnJpo')

const ConfirmOrder = () => {
  const [selectedPayment, setSelectedPayment] = useState('COD');
  const [clientSecret, setClientSecret] = useState('');

  // const stripe=useStripe()
  // const elements=useElements()

  const {cartItem,subTotal,tax,shippingCharge, total, shippingInfo} = useSelector(state=>state.cart)
  const {user}=useSelector(state=>state.auth)

  useEffect(()=>{
    const getSecret=async()=>{
      const {data} = await axios.post(`${server}/createpaymentintent`,
        {total},
        {
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        }
      )
      setClientSecret(data.clientSecret)
    }
    getSecret()
  },[total])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePaymentSelect = (event) => {
    setSelectedPayment(event.target.value);
  };

  const submithandler = async(e)=>{
    e.preventDefault()
    if (!user) return toast.error('Not logged in')

    if (selectedPayment==='COD') {
    const stats = await dispatch(createOrder(cartItem,subTotal,tax,shippingCharge, total, shippingInfo))
    if (stats.success===true) {
      toast.success(stats.message)
      dispatch({type:'clearMessage'})
      dispatch({type:'emptyState'})
      navigate('/paymentsuccess')
    }
    }else{
      // if (!stripe || ! elements) return
      // const card=elements.getElement(CardElement)
      // if (card===null) return

      // const {error, paymentMethod} = await stripe.createPaymentMethod({
      //   type: 'card',
      //   card,
      // });

      // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      //   clientSecret,
      //   {
      //       payment_method: {
      //           card: card,
      //           billing_details: {
      //               name: user.name
      //           },
      //       },
      //   },
      // );

      // if (paymentIntent.status==='succeeded') {
        const stats = await dispatch(createOrderOnlinePay(cartItem,subTotal,tax,shippingCharge, total, shippingInfo,selectedPayment))
        if (stats.success===true) {
          toast.success(stats.message)
          dispatch({type:'clearMessage'})
          dispatch({type:'emptyState'})
          navigate('/paymentsuccess')
        }
      // }
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
         
            {
                stripePromise && clientSecret && selectedPayment==='online' &&
                <Elements stripe={stripePromise} options={{clientSecret}}>
                  <section id="payment">
                      <p>Card Info <small>(demo)</small></p>
                      <div><CardElement options={CARD_ELEMENT_OPTIONS}></CardElement></div>
                  </section>
                </Elements>
            }

          <button>Place Order</button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;


// style card element
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
