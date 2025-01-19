import React from 'react';
import {
    Speed,
    EmojiObjects,
    Handshake,
    Psychology,
    MilitaryTech,
    GroupWork
} from '@mui/icons-material';

const WhyUs = () => {
    const reasons = [
        {
            icon: <Speed/>,
            title: "Rapidité d'exécution",
            description: "Nous nous engageons à livrer vos projets dans les délais convenus, sans compromettre la qualité.",
            color: "from-pink-500 to-rose-500"
        },
        {
            icon: <EmojiObjects/>,
            title: "Innovation constante",
            description: "Nous restons à la pointe des dernières tendances digitales et événementielles pour vous offrir le meilleur.",
            color: "from-purple-500 to-indigo-500"
        },
        {
            icon: <Handshake/>,
            title: "Relation de confiance",
            description: "Nous construisons des partenariats durables basés sur la transparence et la communication.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Psychology/>,
            title: "Expertise reconnue",
            description: "Notre équipe expérimentée apporte des solutions créatives à vos défis les plus complexes.",
            color: "from-teal-500 to-emerald-500"
        },
        {
            icon: <MilitaryTech/>,
            title: "Excellence garantie",
            description: "Nous visons l'excellence dans chaque projet, avec un souci du détail incomparable.",
            color: "from-amber-500 to-orange-500"
        },
        {
            icon: <GroupWork/>,
            title: "Approche collaborative",
            description: "Nous travaillons en étroite collaboration avec vous pour assurer le succès de vos projets.",
            color: "from-red-500 to-[#FF4B4B]"
        }
    ];

    return (
        <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
            {/* Motif décoratif */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}/>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* En-tête avec style moderne */}
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <span
                            className="inline-block px-4 py-1 mb-4 text-[#FF4B4B] bg-[#FF4B4B]/10 rounded-full text-sm font-medium border border-[#FF4B4B]/20">
                            Notre valeur ajoutée
                        </span>
                    </div>
                    <h2 className="text-6xl font-bold mb-8 text-gray-900">
                        Pourquoi nous
                        <span className="relative inline-block ml-4">
                            choisir ?
                            <div
                                className="absolute -bottom-2 left-0 w-full h-2 bg-[#FF4B4B] rounded-full transform skew-x-12"/>
                        </span>
                    </h2>
                </div>

                {/* Grille des raisons avec design hexagonal */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                                style={{background: `linear-gradient(to right, #FF4B4B, ${reason.color.split(' ')[1].replace('to-', '')})`}}/>

                            <div
                                className="relative bg-white rounded-2xl p-8 hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-lg backdrop-blur-sm">
                                {/* Icône avec effet de gradient */}
                                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${reason.color} p-0.5`}>
                                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                                        {React.cloneElement(reason.icon, {className: 'w-8 h-8 text-[#FF4B4B]'})}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section des statistiques avec design moderne */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        {number: "500+", label: "Projets réalisés"},
                        {number: "98%", label: "Clients satisfaits"},
                        {number: "5+", label: "Années d'expérience"},
                        {number: "24/7", label: "Support client"}
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-[#FF4B4B] to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"/>
                            <div
                                className="relative p-6 rounded-xl border border-gray-200 bg-white shadow-lg backdrop-blur-sm">
                                <div
                                    className="text-4xl font-bold bg-gradient-to-r from-[#FF4B4B] to-purple-600 bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 mt-2">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;