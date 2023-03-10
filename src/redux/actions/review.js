import axios from "axios";
import { server } from "../store";


export const loadAllReviews = ()=>async dispatch=>{ 
    try {
        dispatch({type:'getAllReviewRequest'})

        const {data} = await axios.get(`${server}/allreviews`)
        dispatch({type:'getAllReviewSuccess', payload:data.reviews})
    } catch (error) {
        console.log(error.response.data.message);
        dispatch({type:'getAllReview', payload:error.response.data.message})
        
    } 
}

export const loadItemReviews = (itemNo)=>async dispatch=>{
    try {
        dispatch({type:'getItemReviewsRequest'})

        const {data} = await axios.get(`${server}/itemreviews/${itemNo}`,{
            withCredentials:true
        })
        dispatch({type:'getItemReviewsSuccess', payload:data.reviews})
        return data
    } catch (error) {
        dispatch({type:'getItemReviewsFail', payload:error.response.data.message})     
    }
}
export const createReview = (itemNo, feedback)=>async dispatch=>{
    const reviewData= {itemNo, feedback}
    try {
        dispatch({type:'createReviewRequest'})

        const {data} = await axios.post(`${server}/createreview`,
        reviewData,
        {
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        }
        )
        dispatch({type:'createReviewSuccess', payload:data.message})
        return data
    } catch (error) {
        console.log(error);
        dispatch({type:'createReviewFail', payload:error.response.data.message})     
    }
}