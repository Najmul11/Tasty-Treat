import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} - Tasty Treat`
    },[title])
}
export default useTitle; 