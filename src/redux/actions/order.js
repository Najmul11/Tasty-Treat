import axios from "axios"
import { server } from "../store"

export const createOrder=(cartItem,subTotal,tax,shippingCharge, total, shippingInfo) => async(dispatch) =>{
    const order={
        cartItem,subTotal,tax,shippingCharge, total, shippingInfo
    }
    try {
        dispatch({type:"createOrderRequest"})

        const {data} = await axios.post(`${server}/createorder`,
        order,
        {
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        }
        )

        dispatch({type:"createOrderSuccess",payload:data.message })
        console.log(data)
        return data
    } catch (error) {
        console.log(error);
        dispatch({type:"createOrderFail", payload:error.response.data.message })
    }
}

export const getMyOrder = ()=>async(dispatch)=>{
    try {
        dispatch({type:"getMyOrderRequest"})
        const {data} = await axios.get(`${server}/myorders`,
        {
            withCredentials:true
        })
        dispatch({type:"getMyOrderSuccess", payload:data.orders})
    } catch (error) {
        dispatch({type:"getMyOrderFail", payload:error.response.data.message })
    }
}

export const getOrderDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: "getOrderDetailsRequest" });
  
      const { data } = await axios.get(`${server}/order/${id}`, {
        withCredentials: true,
      });
  
      dispatch({ type: "getOrderDetailsSuccess", payload: data.order });
    } catch (error) {
      dispatch({
        type: "getOrderDetailsFail",
        payload: error.response.data.message,
      });
    }
  };
