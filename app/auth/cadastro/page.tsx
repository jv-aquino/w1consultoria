import AuthSidebar from "@/components/auth/AuthSidebar";
import AuthForm from "@/components/auth/AuthForm";
import ValidatedInput from "@/components/form/input/ValidatedInput";
import MaskedInput from "@/components/form/input/MaskedInput";
import { phoneMask } from "@/utils";

function CadastroPage() {
  return ( 
    <main className="w-full flex lg:h-screen">
      <AuthSidebar isLogin={false} />
      <AuthForm title="Cadastre-se" isLogin={false}>
        <div className="flex flex-col gap-4">
          <ValidatedInput
            title='Nome'
            placeholder="Insira seu nome completo"
            name="nome"
            labelClassName="auth-label"
            inputClassName="auth-input"
            iconContainerClassName="auth-icon"
            required
          />
          
          <MaskedInput
            mask={phoneMask}
            regexType="number"
            title='Celular'
            placeholder="(DD) XXXXX-XXXX"
            name="celular"
            labelClassName="auth-label"
            inputClassName="auth-input"
            iconContainerClassName="auth-icon"
            required
          />
          
          <ValidatedInput
            title='Email'
            placeholder="exemplo@gmail.com"
            name="email"
            type="email"
            labelClassName="auth-label"
            inputClassName="auth-input"
            iconContainerClassName="auth-icon"
          ><span className="optional-label">(opcional)</span></ValidatedInput>
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
    </main>
   );
}

export default CadastroPage;