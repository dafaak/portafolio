export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div 
            className={`fixed top-0 left-0 w-full z-30 bg-black font-mono flex flex-col items-center justify-center p-4
                        border-4 border-white
                        ${menuOpen 
                            ? "h-screen opacity-100 pointer-events-auto" 
                            : "h-0 opacity-0 pointer-events-none overflow-hidden"}`}
        >
            {/* Contenedor interno para dar un efecto de doble marco clásico de RPG */}
            <div className="border-2 border-dashed border-white/40 w-full h-full flex flex-col items-center justify-center relative">
                
                {/* Opciones del Menú (Alineadas a la izquierda para simular lista de comandos) */}
                <div className="flex flex-col space-y-6 text-left">
                    <a href="#home"
                        onClick={() => setMenuOpen(false)}
                        className={`text-xl font-bold uppercase tracking-widest text-white flex items-center group
                                    ${menuOpen ? "opacity-100" : "opacity-0"}`}
                    >
                        <span className="mr-3 text-white opacity-100 md:opacity-0 group-hover:opacity-100">&gt;</span>
                        HOME
                    </a>

                    <a href="#about"
                        onClick={() => setMenuOpen(false)}
                        className={`text-xl font-bold uppercase tracking-widest text-white flex items-center group
                                    ${menuOpen ? "opacity-100" : "opacity-0"}`}
                    >
                        <span className="mr-3 text-white opacity-100 md:opacity-0 group-hover:opacity-100">&gt;</span>
                        ABOUT
                    </a>

                    <a href="#projects"
                        onClick={() => setMenuOpen(false)}
                        className={`text-xl font-bold uppercase tracking-widest text-white flex items-center group
                                    ${menuOpen ? "opacity-100" : "opacity-0"}`}
                    >
                        <span className="mr-3 text-white opacity-100 md:opacity-0 group-hover:opacity-100">&gt;</span>
                        PROJECTS
                    </a>

                    <a href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className={`text-xl font-bold uppercase tracking-widest text-white flex items-center group
                                    ${menuOpen ? "opacity-100" : "opacity-0"}`}
                    >
                        <span className="mr-3 text-white opacity-100 md:opacity-0 group-hover:opacity-100">&gt;</span>
                        CONTACT
                    </a>
                </div>

                {/* Nota o firma al pie del menú estilo sistema operativo viejo */}
                <div className="absolute bottom-6 text-xs uppercase tracking-widest text-white/40">
                    [ SELECT AN OPTION ]
                </div>
            </div>
        </div>
    );
};