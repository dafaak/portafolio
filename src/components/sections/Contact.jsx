import {useState} from "react";
import {RevealOnScroll} from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({name: "", email: "", message: ""});

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        success: false,
        error: false,
        message: '',
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({
            submitting: true,
            success: false,
            error: false,
            message: '',
        })
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
            .then(() => {
                setFormData({name: "", email: "", message: ""});
                setFormStatus({
                    submitting: false,
                    success: true,
                    error: false,
                    message: 'Mensaje enviado!',
                })

                setTimeout(() => setFormStatus({...formStatus, success: false}), 2000)
            })
            .catch((err) => {
                setFormStatus({
                    submitting: false,
                    success: false,
                    error: true,
                    message: 'Ups, algo salió mal!',
                })
                console.error('Paso algo: ', err)
            })
    }

    return <section id="contact" className="min-h-screen flex justify-center items-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-100">
                <h2 className="text-3xl font-bold mb-8
            bg-gradient-to-r from-cyan-300 to-purple-600
            bg-clip-text text-transparent text-center">Contáctame</h2>
                <form action="" className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required
                               className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                               placeholder="Nombre..."
                               value={formData.name}
                               onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>

                    <div className="relative">
                        <input type="email" id="email" name="email" required
                               className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                               placeholder="ejemplo@gmail.com..."
                               value={formData.email}
                               onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>

                    <div className="relative">
                        <textarea id="message" name="message" required
                                  rows={5}
                                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                  placeholder="Tu mensaje..."
                                  value={formData.message}
                                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                    </div>

                    <button type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-50"
                            disabled={formStatus.submitting}
                    >
                        {formStatus.submitting ? 'Enviando...' : 'Enviar'}
                    </button>
                    {formStatus.message && (<div
                        className={formStatus.success ? 'bg-green-300/10 text-green-300 px-3 py-3 rounded-md text-xl' : 'bg-red-300/10 text-red-300 px-3 py-1 rounded-full text-sm'}>{formStatus.message}</div>)}
                </form>
            </div>

        </RevealOnScroll>

    </section>
}