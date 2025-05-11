import type { ReactNode } from "react";
import Link from "next/link";
import AuthButton from "./AuthButton";

function AuthForm({ title, isLogin, children }: { title: String, isLogin: boolean, children: ReactNode }) {
  return ( 
    <div className="lg:flex-1 flex flex-col items-center justify-center">
      <h1 className="mx-auto text-center text-4xl font-bold mb-1">{title}</h1>
      <form action="" className="auth-form">
        {children}

        <AuthButton isLogin={isLogin} />
        
        <Link href={`/auth/${isLogin ? 'cadastro' : 'login'}`} className="auth-changeLink group">
          {isLogin ? 'Ainda não tem uma conta?' : 'Já é cadastrado?'}
          <span className="px-0.5"></span>
          <span className="text-gray-900 font-normal 
          border-b-1 border-transparent colorTransition group-hover:border-cyan-900">
            {isLogin ? 'Cadastre-se' : 'Entre aqui'}
          </span>
        </Link>
      </form>
    </div>
   );
}

export default AuthForm;