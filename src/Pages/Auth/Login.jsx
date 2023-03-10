import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { server } from "../../redux/store";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  useTitle('Login')
  const handleLogin =()=>{
    window.open(`${server}/googleLogin`, "_self")
  }
  return (
    <section className="login">
      <motion.button initial={{ y: "-100vh" }} animate={{ y: 0 }} onClick={handleLogin}>
        Login with Google
        <FcGoogle />
      </motion.button>
    </section>
  );
};

export default Login;
