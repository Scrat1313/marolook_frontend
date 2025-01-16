import React from 'react';
import {HeroTitle} from "../components";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import backgroundImageHome from "../assets/images/background/bg.jpg";
import usePageTitle from "../hooks/usePageTitle";

const Contact = () => {
    usePageTitle('Contact');
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <HeroTitle
                title="Contactez-nous"
                description="Une question, une suggestion ou une envie de collaborer ? Nous sommes à votre écoute pour toute demande."
                backgroundImage={backgroundImageHome}
            />

            <div className="relative">
                <div className="absolute inset-0 bg-[#228B22]/5 skew-y-3 h-[80%] mt-20"></div>

                <section className="relative py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                            {/* Contact Info - Left Side */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-8 inline-flex items-center">
                                        Nos coordonnées
                                        <div className="h-1 w-10 bg-[#228B22] ml-4 rounded-full"></div>
                                    </h3>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                icon: <LocationOnRoundedIcon/>,
                                                title: "Notre adresse",
                                                content: "Hôtel de Ville, Ambalavao, Tsienimparihy, Madagascar",
                                                href: "/contact"
                                            },
                                            {
                                                icon: <EmailRoundedIcon/>,
                                                title: "Email",
                                                content: "info@commune-ambalavao.mg",
                                                href: "mailto:info@commune-ambalavao.mg"
                                            },
                                            {
                                                icon: <PhoneRoundedIcon/>,
                                                title: "Téléphone",
                                                content: "+261 34 12 34 567",
                                                href: "tel:+261341234567"
                                            }
                                        ].map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.href}
                                                className="flex items-start p-4 hover:bg-white/80 rounded-2xl transition-all duration-500 group"
                                            >
                                                <span
                                                    className="p-3 bg-[#228B22] text-white rounded-2xl shadow-lg transform group-hover:scale-110 transition-all duration-500">
                                                    {item.icon}
                                                </span>
                                                <div className="ml-4">
                                                    <p className="text-sm text-gray-500">{item.title}</p>
                                                    <p className="text-gray-800 font-medium mt-1">{item.content}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden">
                                    <iframe
                                        title="Carte d'Ambalavao"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.2598478247!2d46.93439583133445!3d-21.83896159520544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21fe9ff5730be3c7%3A0xa3453c2c5b3e2f79!2sAmbalavao%2C%20Madagascar!5e0!3m2!1sen!2smg!4v1234567890123!5m2!1sen!2smg"
                                        className="w-full h-64"
                                        allowFullScreen=""
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Contact Form - Right Side */}
                            <div className="lg:col-span-3">
                                <div className="bg-white/70 backdrop-blur-xl p-8 lg:p-12 rounded-3xl shadow-xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-4 bg-[#228B22] rounded-2xl shadow-lg">
                                            <SendRoundedIcon className="w-6 h-6 text-white"/>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800">
                                                Envoyez-nous un message
                                            </h3>
                                            <p className="text-gray-500 mt-1">Nous vous répondrons dans les plus brefs
                                                délais</p>
                                        </div>
                                    </div>

                                    <form className="space-y-8">
                                        {[
                                            {id: "name", label: "Nom complet", type: "text", placeholder: "Votre nom"},
                                            {
                                                id: "email",
                                                label: "Adresse email",
                                                type: "email",
                                                placeholder: "Votre email"
                                            }
                                        ].map((field) => (
                                            <div key={field.id} className="relative">
                                                <label htmlFor={field.id}
                                                       className="absolute -top-2 left-4 px-2 bg-white text-sm font-medium text-gray-600">
                                                    {field.label}
                                                </label>
                                                <input
                                                    type={field.type}
                                                    id={field.id}
                                                    placeholder={field.placeholder}
                                                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl
                                                             focus:ring-2 focus:ring-[#228B22] focus:border-transparent
                                                             transition-all duration-300"
                                                />
                                            </div>
                                        ))}

                                        <div className="relative">
                                            <label htmlFor="message"
                                                   className="absolute -top-2 left-4 px-2 bg-white text-sm font-medium text-gray-600">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                placeholder="Votre message"
                                                rows="6"
                                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl
                                                         focus:ring-2 focus:ring-[#228B22] focus:border-transparent
                                                         transition-all duration-300 resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full px-8 py-4 bg-[#228B22] text-white font-medium rounded-xl
                                                     relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">Envoyer le message</span>
                                            <div
                                                className="absolute inset-0 bg-emerald-700 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;