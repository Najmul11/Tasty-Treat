import React from 'react';
import {IoFastFoodOutline} from 'react-icons/io5'
import {FiShoppingCart, FiLogIn} from 'react-icons/fi'
import {FaUser} from 'react-icons/fa'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const Nav = () => {
    const isAuthenticated = false
    return (
       <nav>
            <motion.div initial = {{y:'-100%'}} whileInView={{y:'0'}}>
                <IoFastFoodOutline/>
            </motion.div>

            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/cart '}>
                    <FiShoppingCart/>
                </Link>
                <Link to={isAuthenticated ? '/me' : '/login'}>
                    {isAuthenticated ? <FaUser/> : <FiLogIn/>}
                </Link>
            </div>
       </nav>
    );
};

export default Nav;