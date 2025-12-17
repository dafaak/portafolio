import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

    const frontendSkills = ['React', 'Angular', 'Typescript', 'CSS', 'Tailwind CSS', 'React Native', 'Bootstrap', 'Jest', 'Cypress'];
    const backendSkills = ['Node.js', 'Express', 'NestJS','Microservices', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Docker'];
    return <section id="about" className=" min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8
            bg-gradient-to-r from-cyan-300 to-purple-600
            bg-clip-text text-transparent text-center">
                    Sobre mi
                </h2>
                <div className="rounded-xl p-2 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-400/ text-lg mb-8 max-w-2xl mx-auto text-center">
                        Soy un Full Stack Developer con experiencia en el diseño, desarrollo e implementación de aplicaciones web y móviles. Mi expertise abarca tanto el frontend como el backend, con un enfoque en crear soluciones escalables, eficientes y centradas en el usuario.

                        He trabajado con tecnologías como React, Node.js, Express, MongoDB y Docker, entre otras, y tengo experiencia en la integración de APIs REST y GraphQL. Además, he participado en equipos ágiles, aplicando metodologías como Scrum para garantizar la entrega oportuna de proyectos.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {
                                    frontendSkills.map((skill, index) => (<span key={index}
                                        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {skill}
                                    </span>))
                                }
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 ">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {
                                    backendSkills.map((skill, index) => (<span key={index}
                                        className="bg-purple-600/10 text-purple-600 px-3 py-1 rounded-full text-sm hover:bg-purple-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {skill}
                                    </span>))
                                }
                            </div>
                        </div>


                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫 Educación</h3>
                        <ul >
                            <li>
                                <strong>Ingeniería en Sistemas Informáticos y Computación (2022)</strong> - Escuela Politécnica Nacional
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Experiencia</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <span className="text-xl font-semibold ">Full Stack Developer</span> - ManticoreLabs (2020 - 2024)
                                <p>Diseñé e Implementé aplicaciones web escalables y eficientes. Desarrollé solociones basadas en la nube. Colaboré en la realización de pruebas de concepto (PoC) para validar la viabilidad técnica de nuevas funcionalidades y tecnologías.</p>
                            </div>
                        </div>
                        <div className="space-y-4 text-gray-300 mt-4">
                            <div>
                                <span className="text-xl font-semibold">Intern</span> - ManticoreLabs (2019)
                                <p>Ayude en la implementación de componentes reusables para el frontend, en la creación de APIs RESTful. Aprendí a aplicar Scrum en un entorno dinámico y colaborativo. </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </RevealOnScroll>
    </section>
}