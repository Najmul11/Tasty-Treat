import React,{useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../redux/actions/order";

const OrderDetails = () => {
  const isToastShownRef = useRef(false);

  const {id} = useParams()
  const {order,loading, error}=useSelector(state=>state.orderDetails)


  const dispatch = useDispatch()

  useEffect(()=>{
    if (!isToastShownRef.current) {
      dispatch(getOrderDetails(id))
      isToastShownRef.current = true;
    }
    
  },[dispatch,id])
  console.log(order);

  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {order?.shippingInfo?.address}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {order?.user?.name}
          </p>
          <p>
            <b>Phone</b>
            {order?.shippingInfo?.phoneNo}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {order?.orderStatus}
          </p>
          <p>
            <b>Placed At</b>
            {order?.createdAt}
          </p>
          <p>
            <b>Delivered At</b>
            {order?.deliveredAt? order.deliveredAt.split("T")[0] : "NA"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {order?.paymentMethod}
          </p>
          <p>
            <b>Payment Reference</b>#{"asdasdsadsad"}
          </p>
          <p>
            <b>Paid At</b>
            {"23-02-2003"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Sub Total</b>TK{order?.subTotal}
          </p>
          <p>
            <b>Shipping Charges</b>TK{order?.shippingCharges}
          </p>
          <p>
            <b>Tax</b>TK{order?.taxPrice}
          </p>
          <p>
            <b>Total Amount</b>TK{order?.totalAmount}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>THE CLASSIC</h4>
            <div>
              <span>{order?.orderItems?.cheeseBurger.quantity}</span> x <span>{order?.orderItems?.cheeseBurger.price}</span>
            </div>
          </div>
          <div>
            <h4>THE CHEESY</h4>
            <div>
              <span>{order?.orderItems?.vegCheeseBurger.quantity}</span> x <span>{order?.orderItems?.vegCheeseBurger.price}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{order?.orderItems?.burgerWithFries.quantity}</span> x <span>{order?.orderItems?.burgerWithFries.price}</span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{2132}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
