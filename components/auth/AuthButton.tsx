'use client';
import { motion } from "motion/react"

function AuthButton({ isLogin }: { isLogin: boolean }) {
  return ( 
    <motion.button className="auth-submitButton" 
      whileHover={{
        scale: 1.03,
        transition: { duration: .2 },
      }}
      whileTap={{ scale: 0.97 }}
    >
      {isLogin ? 'Entrar' : 'Cadastro'}
    </motion.button>
   );
}

export default AuthButton;