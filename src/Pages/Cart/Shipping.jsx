import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const {shippingInfo} =useSelector(state=>state.cart)
  const [phone, setPhone]  = useState(shippingInfo?shippingInfo.phone:'')
  const [address, setAddress]  = useState(shippingInfo?shippingInfo.address:'')

  const navigate = useNavigate()
  const dispatch =useDispatch()

  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch({type:"addShippingInfo",payload:{phone, address}})
    
    localStorage.setItem('shipping', JSON.stringify({phone, address}))
    navigate('/confirmorder')
  }
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>Address</label>
            <input onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="Enter House No." value={address} required/>
          </div>
          <div>
            <label>Phone No.</label>
            <input onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Enter Phone No." value={phone} required/>
          </div>
          <button >Confirm Order</button>
        </form>
      </main>
    </section>
  );
};
 
export default Shipping;
