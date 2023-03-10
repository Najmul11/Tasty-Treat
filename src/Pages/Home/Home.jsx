import React from 'react'
import {motion} from 'framer-motion'
import Menu from './Menu'
import Sliderr from './Sliderr'


export const Home = () => {
    const options = {
        initial:{x:'-100%', opacity:'0'},
        whileInView:{x:'0', opacity:1}
    }
  return (
    <> 
        <section className='home'>
            <div>
                <motion.h1 {...options}>Tasty Treat</motion.h1>
                <motion.p {...options} transition={{delay:'0.2'}}> Juicy burgers, made fresh to order.</motion.p>
            </div>
            
            <motion.a href="#menu" initial={{y:'-100%', opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:.2}}>
                Explore Menu
            </motion.a>
        </section>
        <Sliderr/>
        <Menu/>
        
    </>
  )
}
