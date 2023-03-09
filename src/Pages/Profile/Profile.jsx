import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/user";


const options = {
  initial: {
    y: "-100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Profile = () => {
  const {user}=useSelector(state=>state.auth)
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(logout())
  }

 
  return (
    <section className="profile">
      <main>
        <motion.img src={user?.photo} alt="User" {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
         Najmul Hoque
        </motion.h5>
        <motion.div {...options} transition={{ delay: 0.5 }}>
          {
            user && user.role==='admin' &&
            <Link
            to="/admin/dashboard"
            style={{
              borderRadius: 0,
              backgroundColor: "rgb(40,40,40)",
            }}
          >
            <MdDashboard /> Dashboard
          </Link>
          }
        </motion.div>
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link to="/myorders">Orders</Link>
        </motion.div>

        <motion.button
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          onClick={handleLogout}
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
