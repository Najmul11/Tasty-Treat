import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { easeIn, motion} from "framer-motion";

const Loader = () => {
  const options = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1, 
    },
    transition: {
      ease: easeIn,
      repeat: Infinity,
      repeatType: "reverse",
      duration:.5
    },
  };
  return (
    <div className="loader">
      <IoFastFoodOutline />

      <div>
        <motion.p {...options}>Loading...</motion.p>
      </div>
    </div>
  );
};

export default Loader;
