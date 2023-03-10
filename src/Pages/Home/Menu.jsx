import React, {useState} from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import 'react-responsive-modal/styles.css';
import burger3 from "../../assets/burger3.png";

import { useDispatch, useSelector } from "react-redux";
import toast  from "react-hot-toast";
import Popout from "./Popout";
import { createReview, loadItemReviews } from "../../redux/actions/review";


const Menu = () => {
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState("");
  const [itemNo, setItemNo]=useState('')
  const dispatch = useDispatch()
  const {reviews, loading, message}=useSelector(state=>state.review)


  const postReview=async()=>{
   const  stats = await  dispatch(createReview(itemNo, review))
    if (stats.success===true) {
      toast.success(stats.message)
      setReview("")
      dispatch(loadItemReviews(itemNo))
    }
  }

  const onOpenModal = (itemNo) => {
    setItemNo(itemNo)
    dispatch(loadItemReviews(itemNo))
    setOpen(true);

  }
  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({type:'theClassicIncrement'})
        toast.success("Added to Cart")
        dispatch({type:"calculatePrice"})
        break;
      case 2:
        dispatch({type:'theCheesyIncrement'})
        dispatch({type:"calculatePrice"})
        toast.success("Added to Cart")
        break;
      case 3:
        dispatch({type:'theFirecrackerIncrement'})
        dispatch({type:"calculatePrice"})
        toast.success("Added to Cart")
        break;
    
      default:
        break;
    }
  };

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={150}
          title="THE CLASSIC"
          handler={addToCartHandler}
          delay={0.1}
          modalhandler={onOpenModal}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={300}
          title="THE CHEESY"
          delay={0.4}
          handler={addToCartHandler}
          modalhandler={onOpenModal}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={500}
          title="THE FIRECRACKER"
          delay={0.7}
          handler={addToCartHandler}
          modalhandler={onOpenModal}
        />
      </div>
      {open && reviews && <Popout open={open} setOpen={setOpen} setReview={setReview} postReview={postReview} itemNo={itemNo} reviews={reviews}/>}
    </section>
  );
};

export default Menu;

