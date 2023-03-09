import { configureStore } from "@reduxjs/toolkit"
import { cartReducer, orderReducer, ordersReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/usrReducer";

const store = configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer,
        order:orderReducer,
        orderDetails:ordersReducer
    }
})
export default store;
export const server = "http://localhost:4000/api/v1"