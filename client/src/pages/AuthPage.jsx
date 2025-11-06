import { useState } from "react";
import SignUp from "../components/SignIn.jsx";
import Login from "../components/Login.jsx";

function AuthPage(){
   const [authMode, setAuthMode] = useState('login'); // 'login' o 'signup'

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center bg-white group/design-root overflow-x-hidden p-4 sm:p-6 lg:p-8" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="w-full max-w-md">
        
        {/* Selector de modo (Iniciar Sesión / Registrarse) */}
        <div className="flex px-4 py-3">
          <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#f0f3f5] p-1">
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#111618] text-[#607c8a] text-sm font-medium leading-normal">
              <span className="truncate">Iniciar Sesión</span>
              <input
                type="radio"
                name="auth-toggle"
                value="login"
                checked={authMode === 'login'}
                onChange={() => setAuthMode('login')}
                className="invisible w-0"
              />
            </label>
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#111618] text-[#607c8a] text-sm font-medium leading-normal">
              <span className="truncate">Registrarse</span>
              <input
                type="radio"
                name="auth-toggle"
                value="signup"
                checked={authMode === 'signup'}
                onChange={() => setAuthMode('signup')}
                className="invisible w-0"
              />
            </label>
          </div>
        </div>

        {/* Renderizado condicional del formulario */}
        {authMode === 'login' ? <Login/> :<SignUp/>}
        
      </div>
    </div>
    );
}

export default AuthPage