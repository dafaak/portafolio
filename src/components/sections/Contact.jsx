import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        success: false,
        error: false,
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({
            submitting: true,
            success: false,
            error: false,
            message: '',
        });
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
            .then(() => {
                setFormData({ name: "", email: "", message: "" });
                setFormStatus({
                    submitting: false,
                    success: true,
                    error: false,
                    message: '¡MENSAJE ENVIADO CON ÉXITO!',
                });

                setTimeout(() => setFormStatus(prev => ({ ...prev, success: false, message: '' })), 3000);
            })
            .catch((err) => {
                setFormStatus({
                    submitting: false,
                    success: false,
                    error: true,
                    message: '¡UPS, ALGO SALIÓ MAL!',
                });
                console.error('Pasó algo: ', err);
            });
    };

    return (
        <section id="contact" className="min-h-screen flex justify-center items-center bg-black text-white font-mono py-20">
            <RevealOnScroll>
                <div className="px-4 w-full max-w-md mx-auto">
                    
                    {/* Título estilo menú de guardado */}
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center mb-12 text-white">
                        {"// CONTACTO"}
                    </h2>

                    {/* Formulario envuelto en un contenedor rígido */}
                    <form className="space-y-6 border-4 border-white p-6 bg-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]" onSubmit={handleSubmit}>
                        
                        {/* Campo: Nombre */}
                        <div className="relative">
                            <label htmlFor="name" className="block text-xs uppercase font-bold tracking-wider mb-2 text-white">
                                [ INPUT NAME ]
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                className="w-full bg-black border-2 border-white px-4 py-3 text-white placeholder-white/30 uppercase text-sm
                                           focus:outline-none focus:bg-white focus:text-black transition-colors duration-100"
                                placeholder="Tu nombre..."
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        {/* Campo: Email */}
                        <div className="relative">
                            <label htmlFor="email" className="block text-xs uppercase font-bold tracking-wider mb-2 text-white">
                                [ INPUT EMAIL ]
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                className="w-full bg-black border-2 border-white px-4 py-3 text-white placeholder-white/30 text-sm
                                           focus:outline-none focus:bg-white focus:text-black transition-colors duration-100"
                                placeholder="ejemplo@correo.com..."
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        {/* Campo: Mensaje */}
                        <div className="relative">
                            <label htmlFor="message" className="block text-xs uppercase font-bold tracking-wider mb-2 text-white">
                                [ INPUT MESSAGE ]
                            </label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required
                                rows={4}
                                className="w-full bg-black border-2 border-white px-4 py-3 text-white placeholder-white/30 text-sm resize-none
                                           focus:outline-none focus:bg-white focus:text-black transition-colors duration-100"
                                placeholder="Escribe tu mensaje aquí..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        {/* Botón de envío estilo comando de batalla */}
                        <button 
                            type="submit"
                            className="w-full bg-white text-black py-3 px-6 border-2 border-white font-bold uppercase tracking-widest text-sm
                                       shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]
                                       hover:bg-black hover:text-white hover:shadow-none hover:translate-x-1 hover:translate-y-1
                                       disabled:opacity-40 disabled:pointer-events-none transition-all duration-100"
                            disabled={formStatus.submitting}
                        >
                            {formStatus.submitting ? 'ENVIANDO...' : '> SEND MESSAGE'}
                        </button>

                        {/* Caja de alertas retro */}
                        {formStatus.message && (
                            <div className={`border-2 p-3 text-xs font-bold uppercase text-center animate-[pulse_1s_steps(2)_infinite]
                                            ${formStatus.success ? 'border-white bg-white text-black' : 'border-white bg-black text-white'}`}>
                                {formStatus.message}
                            </div>
                        )}
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};