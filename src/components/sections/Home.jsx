import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import DesignerImage from "../../assets/pxArt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
    const frontendSkills = ['Angular', 'Typescript', 'CSS', 'Tailwind CSS', 'Jest', 'Cypress'];
    const backendSkills = ['Go', 'Node.js', 'NestJS', 'Express', 'REST APIs', 'Microservices', 'Redis'];
    const databaseSkills = ['PostgreSQL', 'Redis', 'MongoDB', 'Oracle', 'MySQL'];
    const devopsAndCloud = ['Docker', 'AWS Lambda', 'Git'];

    const categories = ["FRONTEND", "BACKEND", "DATABASES", "DEVOPS"];
    const [activeTab, setActiveTab] = useState("FRONTEND");

    const navigate = (direction) => {
        const currentIndex = categories.indexOf(activeTab);
        if (direction === "NEXT") {
            const nextIndex = (currentIndex + 1) % categories.length;
            setActiveTab(categories[nextIndex]);
        } else {
            const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
            setActiveTab(categories[prevIndex]);
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white font-mono py-20 relative">
            <RevealOnScroll>
                {/* Avatar Pixel Art */}
                <div className="text-center py-4">
                    <img
                        src={DesignerImage}
                        alt="Israel Portrait"
                        className="w-32 h-32 md:w-44 md:h-44 mx-auto border-4 border-white p-1 bg-black"
                    />
                </div>

                <div className="text-center z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-white mb-4">
                        Hola, Soy Israel
                    </h1>

                    {/* Caja de diálogo RPG */}
                    <div className="border-4 border-white bg-black p-4 max-w-lg mx-auto mb-10 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]">
                        <p className="text-white text-sm md:text-base leading-relaxed text-left">
                            Software Engineer especializado en APIs, sistemas escalables y desarrollo de productos SaaS.
                        </p>
                    </div>

                    {/* ================= CHASSIS GAME BOY MINIMAL ================= */}
                    <div className="w-full max-w-[340px] mx-auto border-2 border-white bg-black p-5 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.2)] mb-12 select-none">

                        {/* Marco de la Pantalla */}
                        <div className="border-4 border-white p-4 mb-6 relative bg-black">
                            {/* Indicador de Encendido (Battery LED) */}
                            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-1">
                                <div className="w-2 h-2 rounded-full border border-white bg-white animate-pulse"></div>
                                <span className="text-[7px] tracking-tighter text-white/50 font-sans">PWR</span>
                            </div>

                            {/* PANTALLA LCD INTERNA (Tamaño Fijo Estricto) */}
                            <div className="relative h-[250px] border-2 border-dashed border-white/60 p-3 bg-black text-left ml-4 flex flex-col ">
                                <div>

                                    <div className="flex justify-between items-center border-b border-white/40 pb-1 mb-2">
                                        <span className="text-[10px] font-bold tracking-widest text-white/70">SKILLS.ROM</span>
                                        <span className="text-[9px] border border-white px-1 text-white uppercase">{activeTab}</span>
                                    </div>

                                    {/* Render Dinámico de Habilidades (Alto máximo controlado para proteger el Footer) */}
                                    <div className="flex flex-col space-y-1.5 overflow-y-auto max-h-[200px] pr-1 scrollbar-none">
                                        {activeTab === "FRONTEND" && frontendSkills.map((s, i) => <span key={i} className="text-xs font-bold tracking-wide">&gt; {s}</span>)}
                                        {activeTab === "BACKEND" && backendSkills.map((s, i) => <span key={i} className="text-xs font-bold tracking-wide">&gt; {s}</span>)}
                                        {activeTab === "DATABASES" && databaseSkills.map((s, i) => <span key={i} className="text-xs font-bold tracking-wide">&gt; {s}</span>)}
                                        {activeTab === "DEVOPS" && devopsAndCloud.map((s, i) => <span key={i} className="text-xs font-bold tracking-wide">&gt; {s}</span>)}
                                    </div>
                                </div>

                                {/* Mini pie de página interno - Estático en el fondo gracias a justify-between */}
                                <div className="absolute bottom-0 left-3 right-3 text-[8px] text-white/40 text-right uppercase pt-1 border-t border-white/10 bg-black">
                                    © 2026 dafaak
                                </div>
                            </div>
                        </div>

                        {/* Panel de Controles Inferior */}
                        <div className="flex justify-between items-start px-2 pt-2">

                            {/* D-PAD (Cruceta direccional) */}
                            <div className="relative w-24 h-24 flex items-center justify-center">

                                <div className="absolute w-9.5 h-9.5 bg-white rounded  z-10"></div>
                                <button onClick={() => navigate("PREV")} className="absolute top-1 w-8 h-7 z-20 rounded bg-white transition-all duration-700 ease-out
                   active:scale-90 active:bg-white cursor-pointer" aria-label="Arriba"></button>
                                <button onClick={() => navigate("NEXT")} className="absolute bottom-1 w-8 h-7 z-20 rounded bg-white transition-all duration-700 ease-out
                   active:scale-90  active:bg-white cursor-pointer" aria-label="Abajo"></button>
                                <button onClick={() => navigate("PREV")} className="absolute left-1 w-7 h-8 z-20 rounded bg-white transition-all duration-700 ease-out
                   active:scale-90 active:bg-white cursor-pointer" aria-label="Izquierda"></button>
                                <button onClick={() => navigate("NEXT")} className="absolute right-1 w-7 h-8 z-20 rounded bg-white transition-all duration-700 ease-out
                   active:scale-90 active:bg-white cursor-pointer" aria-label="Derecha"></button>
                            </div>

                            {/* BOTONES A / B (Inclinados) */}
                            <div className="flex space-x-4 rotate-[-15deg] pt-4">
                                <div className="text-center">
                                    <button
                                        onClick={() => navigate("PREV")}
                                        className="w-10 h-10 rounded-full border-2 border-white bg-black text-white font-bold text-sm flex items-center justify-center cursor-pointer active:bg-white active:text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:shadow-none"
                                    >
                                        B
                                    </button>
                                </div>
                                <div className="text-center">
                                    <button
                                        onClick={() => navigate("NEXT")}
                                        className="w-10 h-10 rounded-full border-2 border-white bg-white text-black font-bold text-sm flex items-center justify-center cursor-pointer active:bg-black active:text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)] active:shadow-none"
                                    >
                                        A
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Botones SELECT y START */}
                        <div className="flex justify-center space-x-6 mt-6 pt-2">
                            <div className="text-center rotate-[-20deg]">
                                <button onClick={() => setActiveTab("FRONTEND")} className="w-10 h-3 border-2 border-white bg-black block cursor-pointer active:bg-white"></button>
                                <span className="text-[8px] font-bold tracking-widest text-white/60 block mt-1">SELECT</span>
                            </div>
                            <div className="text-center rotate-[-20deg]">
                                <button onClick={() => navigate("NEXT")} className="w-10 h-3 border-2 border-white bg-black block cursor-pointer active:bg-white"></button>
                                <span className="text-[8px] font-bold tracking-widest text-white/60 block mt-1">START</span>
                            </div>
                        </div>

                    </div>
                    {/* ================= FIN GAME BOY ================= */}

                    {/* Botones de acción principales */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4">
                        <a href="#projects" className="w-full sm:w-auto bg-white text-black py-3 px-6 font-bold uppercase border-2 border-white transition-all duration-100 hover:bg-black hover:text-white active:translate-y-1">
                            Ver Proyectos
                        </a>
                        <a href="#contact" className="w-full sm:w-auto bg-black text-white py-3 px-6 font-bold uppercase border-2 border-white transition-all duration-100 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                            Contáctame
                        </a>
                    </div>

                    {/* Redes Sociales */}
                    <div className="flex justify-center mt-8 space-x-6 text-white text-3xl">
                        <a href="https://ghst.tech/linkedin" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://ghst.tech/github" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};