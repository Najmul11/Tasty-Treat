import React from 'react'
import {motion} from 'framer-motion'
import me from "../../assets/founder.png";


export const Founder = () => {
    const options = {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
      };
  return (
    <section className="founder">
      <motion.div {...options}>
            <img src={me} alt="Founder" height={200} width={200} />
            <h3>Najmul Hoque</h3>
            <p>
            Hey, Everyone I am Naz, the founder of Tasty Treat.
              <br />
            Our aim is to give you  an experience that tantalizes your taste buds and leaves you craving for more..
            </p>
      </motion.div>
    </section>
  )
}
