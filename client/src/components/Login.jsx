import React, { useState } from 'react'
import { PersonIcon, VisibilityIcon, VisibilityOffIcon } from '../utils/svgs';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="space-y-6 px-4 py-3">
            <h2 className="text-2xl font-bold text-center text-[#111618]">Iniciar Sesión</h2>

            {/* Campo de Correo o Usuario */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#111618] text-base font-medium leading-normal pb-2">Correo electrónico o nombre de usuario</p>
                    <div className="flex w-full flex-1 items-stretch rounded-lg">
                        <input
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-primary h-14 placeholder:text-[#607c8a] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                            placeholder="Introduce tu correo o usuario"
                        />
                        <div className="text-[#607c8a] flex border border-[#dbe2e6] bg-white items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                                <PersonIcon />
                            </span>
                        </div>
                    </div>
                </label>
            </div>

            {/* Campo de Contraseña */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#111618] text-base font-medium leading-normal pb-2">Contraseña</p>
                    <div className="flex w-full flex-1 items-stretch rounded-lg">
                        <input
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-primary h-14 placeholder:text-[#607c8a] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                            placeholder="Introduce tu contraseña"
                            type={showPassword ? "text" : "password"}
                        />
                        <div className="text-[#607c8a] flex border border-[#dbe2e6] bg-white items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                            <span className="material-symbols-outlined cursor-pointer" style={{ fontSize: '24px' }} onClick={togglePasswordVisibility}>
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </span>
                        </div>
                    </div>
                </label>
            </div>

            <p className="text-primary text-sm font-normal leading-normal pb-3 pt-1 px-4 underline cursor-pointer text-right">
                ¿Olvidaste tu contraseña?
            </p>

            {/* Botón de Iniciar Sesión */}
            <div className="flex px-4 py-3">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
                    <span className="truncate">Iniciar Sesión</span>
                </button>
            </div>
        </div>
    );
};

export default Login