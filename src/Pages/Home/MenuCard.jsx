import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 , modalhandler}) => {
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div>
        <p>Item {itemNum}</p>
        <button onClick={()=>modalhandler(itemNum)}>Reviews</button>
      </div>
      <main>
        <img src={burgerSrc} alt={itemNum} />

        <h5>TK{price}</h5>

        <p>{title}</p>

        <button onClick={() => handler(itemNum)}>Add to Cart</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
