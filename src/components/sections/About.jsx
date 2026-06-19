import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ['Angular', 'Typescript', 'CSS', 'Tailwind CSS', 'Jest', 'Cypress'];
    const backendSkills = [
  'Go',
  'Node.js',
  'NestJS',
  'Express',
  'REST APIs',
  'Microservices',
  'Redis'
];

const databaseSkills = [
  'PostgreSQL',
  'Redis',
  'MongoDB',
  'Oracle',
  'MySQL'
];
const devopsAndCloud = [
  'Docker',
  'AWS Lambda',
  'Git'
];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-black text-white font-mono py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    
                    {/* Título estilo pantalla de carga / menú de juego */}
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center mb-12 text-white">
                        {"// SOBRE MI"}
                    </h2>

                    {/* Contenedor Principal: Gran cuadro de texto RPG */}
                    <div className="border-4 border-white bg-black p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]">
                        <p className="text-white text-sm md:text-base leading-relaxed text-justify mb-8">
                            Soy Ingeniero de Software y me apasiona construir productos que resuelvan problemas reales.Tengo más de 4 años de experiencia desarrollando aplicaciones web, APIs y plataformas SaaS utilizando tecnologías como Node.js, NestJS, Go, PostgreSQL y Angular.
                            <br /><br />
                            He trabajado tanto en proyectos empresariales como en productos propios, participando en todo el proceso: desde el diseño de la arquitectura hasta el despliegue en producción. Disfruto especialmente resolver problemas complejos, optimizar sistemas y aprender nuevas tecnologías que me permitan crear software más eficiente y mantenible.
                        </p>

                        {/* Sección de Skills dividida como sub-menús */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t-2 border-dashed border-white pt-6">
                            
                            {/* Frontend SKILLS */}
                            <div>
                                <h3 className="text-lg font-bold uppercase tracking-wide mb-4 text-white">{"> FRONTEND"}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((skill, index) => (
                                        <span key={index}
                                              className="border border-white bg-black text-white px-3 py-1 text-xs uppercase font-bold
                                                         hover:bg-white hover:text-black transition-colors duration-100">
                                            [{skill}]
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend SKILLS */}
                            <div>
                                <h3 className="text-lg font-bold uppercase tracking-wide mb-4 text-white">{"> BACKEND"}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((skill, index) => (
                                        <span key={index}
                                              className="border border-white bg-black text-white px-3 py-1 text-xs uppercase font-bold
                                                         hover:bg-white hover:text-black transition-colors duration-100">
                                            [{skill}]
                                        </span>
                                    ))}
                                </div>
                            </div>
                             
                             {/* Databases */}
                            <div>
                                <h3 className="text-lg font-bold uppercase tracking-wide mb-4 text-white">{"> Databases"}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {databaseSkills.map((skill, index) => (
                                        <span key={index}
                                              className="border border-white bg-black text-white px-3 py-1 text-xs uppercase font-bold
                                                         hover:bg-white hover:text-black transition-colors duration-100">
                                            [{skill}]
                                        </span>
                                    ))}
                                </div>
                            </div>

                             {/* Devops skills */}
                            <div>
                                <h3 className="text-lg font-bold uppercase tracking-wide mb-4 text-white">{"> Cloud & Devops"}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {devopsAndCloud.map((skill, index) => (
                                        <span key={index}
                                              className="border border-white bg-black text-white px-3 py-1 text-xs uppercase font-bold
                                                         hover:bg-white hover:text-black transition-colors duration-100">
                                            [{skill}]
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Educación y Experiencia: Cajas secundarias */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Educación */}
                        <div className="border-4 border-white bg-black p-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]">
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-4 border-b-2 border-white pb-2">
                                EDU.
                            </h3>
                            <ul>
                                <li className="text-sm">
                                    <strong className="block text-white mb-1 text-base">Ingeniería en Sistemas Informáticos y Computación (2022)</strong>
                                    <span className="text-gray-400">— Escuela Politécnica Nacional</span>
                                </li>
                            </ul>
                        </div>

                        {/* Experiencia */}
                        <div className="border-4 border-white bg-black p-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]">
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-4 border-b-2 border-white pb-2">
                                EXP.
                            </h3>
                            <div className="space-y-6 text-sm">
                                <div>
                                    <span className="block font-bold text-white text-base">Software Engineer</span>
                                    <span className="text-gray-400 block mb-2">ManticoreLabs (2020 - 2024)</span>
                                    <p className="leading-relaxed">Diseñé y desarrollé APIs, aplicaciones empresariales e integraciones entre sistemas utilizando Node.js, NestJS, PostgreSQL y Oracle. Participé en decisiones de arquitectura, optimización de rendimiento e implementación de soluciones cloud con AWS Lambda. Trabajé en la integración de servicios externos, automatización de procesos y desarrollo de funcionalidades escalables para entornos de producción. Optimicé servicios backend y consultas SQL, reduciendo tiempos de respuesta de APIs de 30 segundos a 1 segundo.</p>
                                </div>
                                <div className="border-t border-dashed border-white/50 pt-4">
                                    <span className="block font-bold text-white text-base">Intern</span>
                                    <span className="text-gray-400 block mb-2">ManticoreLabs (2019)</span>
                                    <p className="leading-relaxed">Participé en el desarrollo de aplicaciones web utilizando Angular, NestJS y MySQL. Contribuí a la implementación de APIs REST, modelado de datos y desarrollo de componentes reutilizables, trabajando en un entorno ágil basado en Scrum.
</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};