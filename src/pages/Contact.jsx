import React, {useState} from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {
    Phone,
    LocationOn,
    AccessTime,
    Send,
    Facebook,
    LinkedIn,
    YouTube
} from '@mui/icons-material';
import {HeroCarousel} from "../components";
import HeroBg from "../assets/images/background/herobg.jpg";

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
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setFormData({name: '', email: '', subject: '', message: ''});
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const contactInfo = [
        {
            icon: <Phone className="text-[#FF4B4B]"/>,
            title: "Téléphone",
            content: "+261 34 36 946 93 | +261 38 19 564 91",
            description: "Du lundi au vendredi, 8h-17h"
        },
        {
            icon: <LocationOn className="text-[#FF4B4B]"/>,
            title: "Adresse",
            content: "Lot 081A/3603, Antarandolo",
            description: "Fianarantsoa 301, Madagascar"
        },
        {
            icon: <AccessTime className="text-[#FF4B4B]"/>,
            title: "Horaires",
            content: "Lun-Ven: 8h-17h",
            description: "Sam: 9h-12h | Dim: Fermé"
        }
    ];

    const socialLinks = [
        {icon: <Facebook/>, url: "https://www.facebook.com/profile.php/?id=61555942448287", label: "Facebook"},
        {icon: <YouTube/>, url: "https://www.youtube.com/@marolook9389", label: "Instagram"},
        {icon: <LinkedIn/>, url: "https://mg.linkedin.com/company/marolook", label: "LinkedIn"}
    ];

    const heroSlides = [
        {
            title: "Contactez-nous",
            description: "Notre équipe est à votre disposition pour répondre à toutes vos questions",
            backgroundImage: HeroBg,
            buttons: [
                {
                    text: "Appelez-nous",
                    path: "tel:+261341234567",
                    variant: "primary"
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <HeroCarousel
                slides={heroSlides}
                height="h-[500px] md:h-[500px]"
                showArrows={false}
                showDots={false}
            />

            {/* Nouvelle section d'informations de contact */}
            <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section titre */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Comment pouvons-nous vous aider ?
                        </h2>
                        <div className="w-24 h-1 bg-[#FF4B4B] mx-auto rounded-full"></div>
                    </div>

                    {/* Cartes d'information avec nouveau design */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {contactInfo.map((info, index) => (
                            <div key={index}
                                 className="relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl
                                           transition-all duration-300 group border border-gray-100">
                                {/* Cercle décoratif */}
                                <div className="absolute -right-16 -top-16 w-32 h-32 bg-[#FF4B4B]/5 rounded-full
                                              group-hover:bg-[#FF4B4B]/10 transition-colors duration-300"></div>

                                <div className="relative z-10">
                                    <div className="mb-6 p-4 bg-[#FF4B4B]/10 rounded-2xl w-fit
                                                  group-hover:bg-[#FF4B4B] transition-colors duration-300">
                                        {React.cloneElement(info.icon, {
                                            className: "w-8 h-8 text-[#FF4B4B] group-hover:text-white transition-colors duration-300"
                                        })}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{info.title}</h3>
                                    <p className="text-[#FF4B4B] font-medium text-lg mb-2">{info.content}</p>
                                    <p className="text-gray-600">{info.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Formulaire et carte avec nouveau design */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-8">
                                Envoyez-nous un message
                                <div className="w-20 h-1 bg-[#FF4B4B] mt-4 rounded-full"></div>
                            </h2>
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
                                            placeholder="Votre nom"
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
                                            placeholder="votre@email.com"
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
                                        placeholder="Sujet de votre message"
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
                                        placeholder="Votre message..."
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

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-8">
                                Notre localisation
                                <div className="w-20 h-1 bg-[#FF4B4B] mt-4 rounded-full"></div>
                            </h2>
                            <div className="relative w-full h-0 pb-[56.25%] mb-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.7093826594896!2d47.091044275268075!3d-21.44066508031373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e7b9649452322d%3A0xea9b6edf64222497!2sO'matsiatra!5e0!3m2!1sfr!2smg!4v1720203253511!5m2!1sfr!2smg"
                                    className="absolute top-0 left-0 w-full h-full rounded-xl shadow-sm"
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