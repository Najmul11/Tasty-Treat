import { configureStore } from "@reduxjs/toolkit"
import { cartReducer, orderReducer, ordersReducer } from "./reducers/cartReducer";
import { reviewReducer } from "./reducers/reviewReducer";
import { authReducer } from "./reducers/usrReducer";

const store = configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer,
        order:orderReducer,
        orderDetails:ordersReducer,
        review:reviewReducer
    }
})
export default store;
export const server = "http://localhost:4000/api/v1"