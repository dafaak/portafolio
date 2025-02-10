export const About = () => {

    const frontendSkills = ['React', 'Angular', 'Typescript', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Jest', 'Cypress'];
    const backendSkills = ['Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Docker'];
    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 
            bg-gradient-to-r from-cyan-300 to-purple-600 
            bg-clip-text text-transparent text-center">
                About me
            </h2>
            <div class="rounded-xl p-2 border-white/10 border hover:-translate-y-1 transition-all">
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
        </div>
    </section>
}