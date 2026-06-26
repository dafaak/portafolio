import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import DesignerImage from "../../assets/pxArt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
    // Listas de habilidades integradas
    const frontendSkills = [
        "Angular",
        "Typescript",
        "CSS",
        "Tailwind CSS",
        "Jest",
        "Cypress",
    ];
    const backendSkills = [
        "Go",
        "Node.js",
        "NestJS",
        "Express",
        "REST APIs",
        "Microservices",
        "Redis",
    ];
    const databaseSkills = ["PostgreSQL", "Redis", "MongoDB", "Oracle", "MySQL"];
    const devopsAndCloud = ["Docker", "AWS Lambda", "Git"];

    // Estado para controlar qué sección de la Pokédex está activa
    const [activeTab, setActiveTab] = useState("FRONT");

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-black text-white font-mono py-20 relative"
        >
            <RevealOnScroll>
                {/* Imagen con un borde blanco rígido estilo pixel-art */}
                <div className="text-center py-4">
                    <img
                        src={DesignerImage}
                        alt="Logo"
                        className="w-32 h-32 md:w-48 md:h-48 mx-auto border-4 border-white p-1 bg-black"
                    />
                </div>

                <div className="text-center z-10 px-4">
                    {/* Título en blanco puro */}
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-white mb-6">
                        Hola, Soy Israel
                    </h1>

                    {/* Caja de diálogo estilo RPG/Pokémon */}
                    <div className="border-4 border-white bg-black p-4 md:p-6 max-w-lg mx-auto mb-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
                        <p className="text-white text-sm md:text-base leading-relaxed text-left">
                            Software Engineer especializado en APIs, sistemas scalables y
                            desarrollo de productos SaaS.
                        </p>
                    </div>

                    {/* Botones estilo menú de comandos de juego */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto bg-white text-black py-3 px-6 font-bold uppercase border-2 border-white
                                      transition-all duration-100
                                      hover:bg-black hover:text-white
                                      active:translate-y-1"
                        >
                            Ver Proyectos
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto bg-black text-white py-3 px-6 font-bold uppercase border-2 border-white
                                      transition-all duration-100
                                      shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
                                      hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                        >
                            Contáctame
                        </a>
                    </div>

                    {/* Iconos de redes sociales */}
                    <div className="flex justify-center mt-8 space-x-6 text-white text-3xl">
                        <a
                            href="https://ghst.tech/linkedin"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-gray-400 transition-colors"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>

                        <a
                            href="https://ghst.tech/github"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-gray-400 transition-colors"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
