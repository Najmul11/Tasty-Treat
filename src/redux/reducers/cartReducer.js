import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    cartItem:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems"))
    :{
        cheeseBurger:{
            quantity:0,
            price:200,
        },
        vegCheeseBurger:{
            quantity:0,
            price:500,
        },
        burgerWithFries:{
            quantity:0,
            price:1800,
        },
    },
    subTotal:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).subTotal:0,
    tax:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).tax:0,
    shippingCharge:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).shippingCharge:0,
    total:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).total:0,
    shippingInfo:localStorage.getItem("shipping")?JSON.parse(localStorage.getItem("shipping")):{}
}

export const cartReducer = createReducer(initialState,{
    cheeseBurgerIncrement: state =>{
        state.cartItem.cheeseBurger.quantity +=1;
    },
    vegCheeseBurgerIncrement: state =>{
        state.cartItem.vegCheeseBurger.quantity +=1;
    },
    burgerWithFriesIncrement: state =>{
        state.cartItem.burgerWithFries.quantity +=1;
    },
    cheeseBurgerDecrement: state =>{
        state.cartItem.cheeseBurger.quantity -=1;
    },
    vegCheeseBurgerDecrement: state =>{
        state.cartItem.vegCheeseBurger.quantity -=1;
    },
    burgerWithFriesDecrement: state =>{
        state.cartItem.burgerWithFries.quantity -=1;
    },

    calculatePrice : state =>{
        state.subTotal = state.cartItem.cheeseBurger.quantity* state.cartItem.cheeseBurger.price +
                        state.cartItem.vegCheeseBurger.quantity* state.cartItem.vegCheeseBurger.price +
                        state.cartItem.burgerWithFries.quantity* state.cartItem.burgerWithFries.price;
        
        state.tax= state.subTotal * .15;
        state.shippingCharge = state.subTotal > 2000 ? 50 : state.subTotal === 0 ? 0 : 200;
        state.total = state.subTotal + state.tax + state.shippingCharge
    },
    addShippingInfo:(state,action)=>{
        state.shippingInfo={
            phone:action.payload.phone,
            address:action.payload.address
        }
        
    },

    emptyState:state=>{
        state.cartItem = {
            cheeseBurger:{
                quantity:0,
                price:200,
            },
            vegCheeseBurger:{
                quantity:0,
                price:500,
            },
            burgerWithFries:{
                quantity:0,
                price:1800,
            },
        };
        state.subTotal = 0;
        state.tax= 0;
        state.shippingCharge = 0
        state.total = 0
    },
})


export const orderReducer = createReducer({},{
    createOrderRequest:state =>{
        state.loading = true;
    },
    
    createOrderSuccess:(state, action) =>{
        state.loading = false;
        state.message = action.payload
    },
    
    createOrderFail:(state, action) =>{
        state.loading = false;
        state.error= action.payload
    },

    clearError:state=>{
        state.error=null
    },

    clearMessage:state=>{
        state.message=null
    },
    
})

export const ordersReducer = createReducer({orders:[],order:{}},{
    getMyOrderRequest:state =>{
        state.loading = true;
    },
    
    getMyOrderSuccess:(state, action) =>{
        state.loading = false;
        state.orders = action.payload
    },
    
    getMyOrderFail:(state, action) =>{
        state.loading = false;
        state.error= action.payload
    },
    getOrderDetailsRequest:state =>{
        state.loading = true;
    },
    
    getOrderDetailsSuccess:(state, action) =>{
        state.loading = false;
        state.order = action.payload
    },
    
    getOrderDetailsFail:(state, action) =>{
        state.loading = false;
        state.error= action.payload
    },

    clearError:state=>{
        state.error=null
    },

    clearMessage:state=>{
        state.message=null
    },
    
})