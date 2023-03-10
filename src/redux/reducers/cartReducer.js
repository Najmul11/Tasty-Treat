import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    cartItem:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems"))
    :{
        theClassic:{
            quantity:0,
            price:150,
        },
        theCheesy:{
            quantity:0,
            price:300,
        },
        theFirecracker:{
            quantity:0,
            price:500,
        },
    },
    subTotal:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).subTotal:0,
    tax:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).tax:0,
    shippingCharge:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).shippingCharge:0,
    total:localStorage.getItem("cartPrices")?JSON.parse(localStorage.getItem("cartPrices")).total:0,
    shippingInfo:localStorage.getItem("shipping")?JSON.parse(localStorage.getItem("shipping")):{}
}

export const cartReducer = createReducer(initialState,{
    theClassicIncrement: state =>{
        state.cartItem.theClassic.quantity +=1;
    },
    theCheesyIncrement: state =>{
        state.cartItem.theCheesy.quantity +=1;
    },
    theFirecrackerIncrement: state =>{
        state.cartItem.theFirecracker.quantity +=1;
    },
    theClassicDecrement: state =>{
        state.cartItem.theClassic.quantity -=1;
    },
    theCheesyDecrement: state =>{
        state.cartItem.theCheesy.quantity -=1;
    },
    theFirecrackerDecrement: state =>{
        state.cartItem.theFirecracker.quantity -=1;
    },

    calculatePrice : state =>{
        state.subTotal = state.cartItem.theClassic.quantity* state.cartItem.theClassic.price +
                        state.cartItem.theCheesy.quantity* state.cartItem.theCheesy.price +
                        state.cartItem.theFirecracker.quantity* state.cartItem.theFirecracker.price;
        
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
            theClassic:{
                quantity:0,
                price:200,
            },
            theCheesy:{
                quantity:0,
                price:500,
            },
            theFirecracker:{
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