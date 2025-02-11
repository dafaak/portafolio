import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen])


    return <nav className="fixed top-0 left-0  w-full z-40 bg-[rgba(10,10,10,0.8)]
     backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-16 ">
                <a href="#home" className="text-white-500 font-mono text-xl font-bold" >@isra</a>

                <div className="w-20 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8 ml-4">
                    <a href="#home" className="text-gray-300 hover:text-white-700 transition-colors">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white-700 transition-colors">About</a>
                    <a href="#projects" className="text-gray-300 hover:text-white-700 transition-colors">Proyectos</a>
                    <a href="#contact" className="text-gray-300 hover:text-white-700 transition-colors">Contacto</a>
                </div>
            </div>
        </div>

    </nav>
}