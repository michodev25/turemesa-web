function SignUp() {
  // Puedes añadir estados para la visibilidad de las contraseñas aquí si es necesario
  return (
     <div className="space-y-6 px-4 py-3">
        <h2 className="text-2xl font-bold text-center text-[#111618]">Crear Cuenta</h2>
        
        {/* Campo de Nombre Completo */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111618] text-base font-medium leading-normal pb-2">Nombre completo</p>
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-primary h-14 placeholder:text-[#607c8a] p-[15px] text-base font-normal leading-normal" placeholder="Introduce tu nombre completo" />
                </div>
            </label>
        </div>

        {/* Campo de Correo Electrónico */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111618] text-base font-medium leading-normal pb-2">Correo electrónico</p>
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-primary h-14 placeholder:text-[#607c8a] p-[15px] text-base font-normal leading-normal" placeholder="Introduce tu correo electrónico" />
                </div>
            </label>
        </div>

        {/* Campo de Crear Contraseña */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111618] text-base font-medium leading-normal pb-2">Crear contraseña</p>
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-primary h-14 placeholder:text-[#607c8a] p-[15px] text-base font-normal leading-normal" placeholder="Crea una contraseña segura" type="password" />
                </div>
            </label>
        </div>

        {/* Campo de Confirmar Contraseña */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111618] text-base font-medium leading-normal pb-2">Confirmar contraseña</p>
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-primary h-14 placeholder:text-[#607c8a] p-[15px] text-base font-normal leading-normal" placeholder="Confirma tu contraseña" type="password" />
                </div>
            </label>
        </div>
        
        {/* Checkbox de Términos y Condiciones */}
        <div className="flex items-center px-4">
            <input id="terms" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
            <label htmlFor="terms" className="ml-2 block text-sm text-[#607c8a]">
                Acepto los <a href="#" className="font-medium text-primary hover:underline">Términos y Condiciones</a>
            </label>
        </div>

        {/* Botón de Registrarse */}
        <div className="flex px-4 py-3">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
                <span className="truncate">Registrarse</span>
            </button>
        </div>
    </div>
  );
};

export default SignUp;