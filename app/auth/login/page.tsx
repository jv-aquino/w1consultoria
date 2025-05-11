import AuthSidebar from "@/components/auth/AuthSidebar";
import AuthForm from "@/components/auth/AuthForm";
import ValidatedInput from "@/components/form/input/ValidatedInput";
import HybridInput from "./HybridInput";

function LoginPage() {
  return ( 
    <main className="w-full flex lg:h-screen">
      <AuthForm title="Entre na sua conta" isLogin>
        <div className="flex flex-col gap-4">
          <HybridInput
            title='Celular ou Email'
            placeholder="Insira seu número ou email"
            name="celular"
            labelClassName="auth-label"
            inputClassName="auth-input"
            iconContainerClassName="auth-icon"
            required
          />

          <ValidatedInput
            title='Senha'
            placeholder="Senha (mínimo 6 caracteres)"
            name="password"
            type="password"
            labelClassName="auth-label"
            inputClassName="auth-input"
            iconContainerClassName="auth-icon"
            required
          />
        </div>
      </AuthForm>

      <AuthSidebar isLogin />
    </main>
   );
}

export default LoginPage;