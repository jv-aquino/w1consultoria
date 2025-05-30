import W1Logo from '@/public/logo.svg'
import Topography from '@/public/topography.svg'

const textoLogin = "Bem-vindo de volta! Fique seguro e continue sua jornada de gestão de patrimônio conosco";
const textoCadastro = "Alavanque sua jornada de gestão de patrimônio conosco! Fique seguro e explore durante a personalização de sua experiência na nossa plataforma"

function AuthSidebar({ isLogin }: { isLogin: boolean }) {
  return ( 
    <div className="hidden relative
    lg:flex-1 bg-cyan-900 h-screen lg:flex flex-col items-center justify-center gap-2 overflow-hidden">
      <W1Logo className="text-cyan-50 w-56 h-56 z-10" />
      <p className="text-cyan-300 font-medium text-center text-xl w-[515px] xl:w-[530px]">
        {isLogin ? textoLogin : textoCadastro}
      </p>
      
      <Topography 
        className="absolute inset-0 text-cyan-300 opacity-15 z-0 
        object-cover w-[130%] h-[130%]" 
      />
    </div>
   );
}

export default AuthSidebar;