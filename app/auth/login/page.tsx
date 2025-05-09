import AuthSidebar from "@/components/auth/AuthSidebar";
import AuthForm from "@/components/auth/AuthForm";
import ValidatedInput from "@/components/form/input/ValidatedInput";
import MaskedInput from "@/components/form/input/MaskedInput";
import { phoneMask } from "@/utils";

function LoginPage() {
  return ( 
    <main className="w-full flex lg:h-screen">
      <AuthForm title="Entre na sua conta" isLogin={false}>
        <div className="flex flex-col gap-4">
          <MaskedInput
            mask={phoneMask}
            regexType="number"
            title='Celular ou Email'
            placeholder="(DD) XXXXX-XXXX"
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

      <AuthSidebar />
    </main>
   );
}

export default LoginPage;