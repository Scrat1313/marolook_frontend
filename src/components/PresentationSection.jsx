import React from 'react';
import {BusinessCenter, Event, Timeline, Lightbulb, TrendingUp, Groups, EmojiEvents, Speed} from '@mui/icons-material';

const PresentationSection = () => {

    const achievements = [
        {number: "150+", label: "Projets Réussis", icon: <TrendingUp/>},
        {number: "50+", label: "Clients Fidèles", icon: <Groups/>},
        {number: "15+", label: "Récompenses", icon: <EmojiEvents/>},
        {number: "98%", label: "Satisfaction", icon: <Speed/>}
    ];

    const services = [
        {
            icon: <BusinessCenter className="w-8 h-8"/>,
            title: "Communication Digitale",
            description: "De la conception de site web élégant à la promotion sur les réseaux sociaux.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Event className="w-8 h-8"/>,
            title: "Organisation Événementielle",
            description: "Gestion complète de vos événements d'entreprise et lancements de produits.",
            gradient: "from-[#FF4B4B] to-[#E43D3D]"
        },
        {
            icon: <Timeline className="w-8 h-8"/>,
            title: "Stratégie & Innovation",
            description: "Transformons votre vision en une réalité digitale et événementielle.",
            gradient: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Motif de fond */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}/>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#FF4B4B]/20 to-purple-500/20
                              rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-30"/>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/20 to-[#E43D3D]/20
                              rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 opacity-30"/>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* En-tête moderne */}
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <span className="inline-block px-4 py-1 mb-4 text-[#FF4B4B] bg-[#FF4B4B]/10
                                       rounded-full text-sm font-medium border border-[#FF4B4B]/20">
                            Notre Histoire
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">
                        Découvrez
                        <span className="relative inline-block ml-4">
                            MaroLooK
                            <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#FF4B4B]
                                          rounded-full transform skew-x-12"/>
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Depuis 2018, nous créons des expériences digitales et événementielles mémorables
                    </p>
                </div>

                {/* Section principale */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Colonne image avec effets */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#FF4B4B] to-[#E43D3D]
                                      p-1 shadow-xl group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B4B] to-[#E43D3D] opacity-75
                                          group-hover:opacity-90 transition-opacity duration-300"/>
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800&h=600"
                                alt="MaroLooK Modern Workspace"
                                className="rounded-xl relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                            {/* Overlay pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent opacity-0
                                          group-hover:opacity-60 transition-opacity duration-300 z-20"/>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FF4B4B]/10 rounded-full"/>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#E43D3D]/10 rounded-full"/>
                    </div>

                    {/* Colonne texte */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Notre Vision</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                MaroLooK est née d'une vision audacieuse : transformer la communication digitale et
                                l'événementiel à Madagascar. Notre approche unique combine créativité, innovation et
                                expertise technique pour délivrer des résultats exceptionnels.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Notre mission est d'accompagner les entreprises dans leur transformation digitale et
                                de créer des événements qui marquent les esprits, tout en restant fidèles aux valeurs
                                qui nous définissent : excellence, innovation et engagement.
                            </p>
                        </div>

                        {/* Stats en grille */}
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="group">
                                    <div className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl
                                                  transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-[#FF4B4B]/10 flex items-center
                                                          justify-center text-[#FF4B4B]">
                                                {achievement.icon}
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-gray-900">
                                                    {achievement.number}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    {achievement.label}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services avec nouveau design */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div key={index} className="group relative">
                            {/* Hover effect background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 
                                          group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`}/>

                            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl
                                          transition-all duration-300 border border-gray-100 backdrop-blur-sm">
                                <div
                                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                                        {React.cloneElement(service.icon, {className: 'text-[#FF4B4B]'})}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA amélioré */}
                <div className="text-center">
                    <a href="#contact"
                       className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#FF4B4B] text-white
                                rounded-xl hover:bg-[#E43D3D] transition-colors duration-300 shadow-lg
                                hover:shadow-xl hover:-translate-y-0.5 transform transition-transform">
                        <Lightbulb className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12"/>
                        <span className="text-lg font-semibold">Démarrer votre projet</span>

                        {/* Particle effect on hover */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FF4B4B] to-[#E43D3D]
                                      opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300
                                      rounded-xl"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PresentationSection;