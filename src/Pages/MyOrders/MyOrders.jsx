import React, { useEffect, useRef } from "react";
import { Link} from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrder } from "../../redux/actions/order";
import useTitle from "../../Hooks/useTitle";

const MyOrders = () => {
  useTitle('My orders')
  const isToastShownRef = useRef(false);

  const {orders,loading, error}=useSelector(state=>state.orderDetails)
  const dispatch = useDispatch()

  useEffect(()=>{
    if (!isToastShownRef.current) {
      dispatch(getMyOrder())
      isToastShownRef.current = true;
    }
    
  },[dispatch, orders])
 
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders && orders.map((o,i) => (
              <tr key={o._id}>
                <td>#{o._id}</td>
                <td>{o.orderStatus}</td>
                <td>{
                o.orderItems.theClassic.quantity+
                o.orderItems.theCheesy.quantity+
                o.orderItems.theFirecracker.quantity
                }</td>
                <td>TK{o.totalAmount}</td>
                <td>{o.paymentMethod}</td>
                <td>
                  <Link to={`/order/${o._id}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
