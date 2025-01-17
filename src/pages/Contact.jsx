import React, {useState} from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {
    Phone,
    Email,
    LocationOn,
    AccessTime,
    Send,
    Facebook,
    Twitter,
    Instagram,
    LinkedIn
} from '@mui/icons-material';
import {HeroCarousel} from "../components";

const Contact = () => {
    usePageTitle('Contact');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulation d'envoi
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setFormData({name: '', email: '', subject: '', message: ''});
        // Ajoutez ici votre logique d'envoi de formulaire
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const contactInfo = [
        {
            icon: <Phone className="text-[#FF4B4B]"/>,
            title: "Téléphone",
            content: "+261 34 12 345 67",
            description: "Du lundi au vendredi, 8h-17h"
        },
        {
            icon: <Email className="text-[#FF4B4B]"/>,
            title: "Email",
            content: "contact@ambalavao.mg",
            description: "Réponse sous 24h"
        },
        {
            icon: <LocationOn className="text-[#FF4B4B]"/>,
            title: "Adresse",
            content: "123 rue Principale",
            description: "Ambalavao, Madagascar"
        },
        {
            icon: <AccessTime className="text-[#FF4B4B]"/>,
            title: "Horaires",
            content: "Lun-Ven: 8h-17h",
            description: "Sam: 9h-12h | Dim: Fermé"
        }
    ];

    const socialLinks = [
        {icon: <Facebook/>, url: "#", label: "Facebook"},
        {icon: <Twitter/>, url: "#", label: "Twitter"},
        {icon: <Instagram/>, url: "#", label: "Instagram"},
        {icon: <LinkedIn/>, url: "#", label: "LinkedIn"}
    ];

    const heroSlides = [
        {
            title: "Contactez-nous",
            description: "Notre équipe est à votre disposition pour répondre à toutes vos questions",
            backgroundImage: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80", // Image de contact professionnelle
            buttons: [
                {
                    text: "Appelez-nous",
                    path: "tel:+261341234567",
                    variant: "primary"
                },
                {
                    text: "Envoyez un email",
                    path: "mailto:contact@ambalavao.mg",
                    variant: "secondary"
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section avec image de fond */}
            <HeroCarousel
                slides={heroSlides}
                height="h-[500px] md:h-[500px]"
                showArrows={false} // Pas besoin de flèches pour une seule slide
                showDots={false}   // Pas besoin de points pour une seule slide
            />

            {/* Section d'informations de contact */}
            <div className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Cartes d'information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl
                                                      transition-all duration-300 group">
                                <div className="mb-4 p-3 bg-[#FF4B4B]/10 rounded-xl w-fit
                                              group-hover:bg-[#FF4B4B] transition-colors duration-300">
                                    {React.cloneElement(info.icon, {
                                        className: "w-6 h-6 text-[#FF4B4B] group-hover:text-white transition-colors duration-300"
                                    })}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                                <p className="text-[#FF4B4B] font-medium mb-1">{info.content}</p>
                                <p className="text-gray-600 text-sm">{info.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Formulaire et carte */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Formulaire */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nom complet
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200
                                                     focus:ring-2 focus:ring-[#FF4B4B] focus:border-transparent
                                                     transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200
                                                     focus:ring-2 focus:ring-[#FF4B4B] focus:border-transparent
                                                     transition-all duration-300"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Sujet
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200
                                                 focus:ring-2 focus:ring-[#FF4B4B] focus:border-transparent
                                                 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200
                                                 focus:ring-2 focus:ring-[#FF4B4B] focus:border-transparent
                                                 transition-all duration-300 resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 px-6 rounded-xl bg-[#FF4B4B] text-white font-medium
                                             hover:bg-[#E43D3D] transition-all duration-300 flex items-center
                                             justify-center gap-2 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-white/20 border-t-white
                                                      rounded-full animate-spin"/>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5"/>
                                            <span>Envoyer le message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Carte */}
                        {/* Carte */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Notre localisation</h2>
                            {/* Version modifiée sans aspect-ratio plugin */}
                            <div className="relative w-full h-0 pb-[56.25%] mb-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15248.461678610854!2d46.93131716977539!3d-21.83333384360462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07de59f456f2b%3A0x4c6b17a0f2c3f8a9!2sAmbalavao!5e0!3m2!1sfr!2smg!4v1629902254784!5m2!1sfr!2smg"
                                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                                    style={{border: 0}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Emplacement de marolook"
                                />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-800">Suivez-nous</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-[#FF4B4B]
                             hover:text-white transition-all duration-300"
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;