import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full z-40 bg-black border-b-1 border-white font-mono">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo estilo nombre de partida/jugador */}
                    <a href="#home" className="text-white text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-black px-2 py-1 transition-colors duration-100">
                        [ISRA.DEV]
                    </a>

                    {/* Botón menú móvil rígido */}
                    <button 
                        className="text-white font-bold uppercase tracking-wider text-sm border-2 border-white px-2 py-1 md:hidden z-50 cursor-pointer active:translate-y-0.5" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? "CLOSE" : "MENU"}
                    </button>

                    {/* Enlaces de escritorio corregidos */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="relative text-white uppercase text-sm font-bold tracking-wider py-1 pl-4 pr-2 group transition-colors">
                            <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75 text-white">&gt;</span>
                            Home
                        </a>
                        <a href="#about" className="relative text-white uppercase text-sm font-bold tracking-wider py-1 pl-4 pr-2 group transition-colors">
                            <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75 text-white">&gt;</span>
                            About
                        </a>
                        <a href="#projects" className="relative text-white uppercase text-sm font-bold tracking-wider py-1 pl-4 pr-2 group transition-colors">
                            <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75 text-white">&gt;</span>
                            Proyectos
                        </a>
                        <a href="#contact" className="relative text-white uppercase text-sm font-bold tracking-wider py-1 pl-4 pr-2 group transition-colors">
                            <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75 text-white">&gt;</span>
                            Contacto
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};