import { RevealOnScroll } from "../RevealOnScroll"
export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r 
            from-blue-300 to-green-600 bg-clip-text leading-right 
            text-transparent">
                    Hola, Soy Israel
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Soy un Full Stack Developer. Me apasiona crear aplicaciones limpias, escalables y visualmente impactantes.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" type="button"
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition
                 relative overflow-hidden 
                 hover:-translate-y-0.5 
                 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Ver Proyectos
                    </a>
                    <a href="#projects" type="button"
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded 
                font-medium transition-all duration-200
                 hover:-translate-y-0.5 
                 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
                  hover:bg-blue-500/10">
                        Contáctame
                    </a>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}