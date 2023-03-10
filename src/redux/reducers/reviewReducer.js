import {createReducer} from "@reduxjs/toolkit"

export const reviewReducer = createReducer({},{
    createReviewRequest:state=>{
        state.loading=true;
    },
    createReviewSuccess:(state, action)=>{
        state.loading=false;
        state.message = action.payload
    },
    createReviewFail:(state,action)=>{
        state.loading=false;
        state.error = action.payload
    },
    getAllReviewRequest:state=>{
        state.loading=true;
    },
    getAllReviewSuccess:(state, action)=>{
        state.loading=false;
        state.limitReviews =action.payload;
        state.message = action.payload
    },
    getAllReviewFail:(state,action)=>{
        state.loading=false;
        state.error = action.payload
    },
    getItemReviewsRequest:state=>{
        state.loading=true;
    },
    getItemReviewsSuccess:(state, action)=>{
        state.loading=false;
        state.reviews =action.payload;
        state.message = action.payload
    },
    getItemReviewsFail:(state,action)=>{
        state.loading=false;
        state.error = action.payload
    },
    clearError:state=>{
        state.error=null
    },
    clearMessage:state=>{
        state.message=null
    }
})