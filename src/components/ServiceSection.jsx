import React from 'react';
import {
    AccountBalance,
    Business,
    Groups,Palette, Schedule, Code, Videocam, PhotoCamera
} from '@mui/icons-material';

const servicesData = [
    {
        id: 1,
        Icon: PhotoCamera,
        title: "Photographie",
        description: "Immortalisez les moments forts.",
        link: "#",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        id: 2,
        Icon: Videocam,
        title: "Vidéographie",
        description: "Créez un souvenir.",
        link: "#",
        gradient: "from-[#FF4B4B] to-[#E43D3D]"
    },
    {
        id: 3,
        Icon: Business,
        title: "Design graphique",
        description: "Sublimez vos identitées visuelles.",
        link: "#",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        id: 4,
        Icon: AccountBalance,
        title: "Modélisation, Incrustation et Animation 3D",
        description: "Le monde du 3D et motion design.",
        link: "#",
        gradient: "from-amber-500 to-orange-500"
    },
    {
        id: 5,
        Icon: Groups,
        title: "Community Management",
        description: "Optimisez votre présence en ligne.",
        link: "#",
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        id: 6,
        Icon: Code,
        title: "Développement web",
        description: "Décrochez des clients internationaux.",
        link: "#",
        gradient: "from-indigo-500 to-violet-500"
    },
    {
        id: 7,
        Icon: Schedule,
        title: "Organisation évenementielle",
        description: "Organisez un évènement inoubliable.",
        link: "#",
        gradient: "from-indigo-500 to-violet-500"
    },
    {
        id: 8,
        Icon: Palette,
        title: "Décoration",
        description: "Aménagez et décorez vos espaces.",
        link: "#",
        gradient: "from-indigo-500 to-violet-500"
    }
];

const ServiceSection = () => {
    return (
        <section className="relative py-24 transition-colors duration-300
                          dark:bg-[#121212] bg-white
                          dark:text-[#F5F5F5] text-gray-900 overflow-hidden">
            {/* Motif de fond avec adaptation pour le mode sombre */}
            <div className="absolute inset-0 dark:opacity-[0.03] opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}/>
            </div>

            {/* Éléments décoratifs avec opacité ajustée pour le mode sombre */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-1/3 h-1/3
                              bg-gradient-to-br from-[#FF4B4B]/20 to-purple-500/20
                              dark:from-[#FF4B4B]/10 dark:to-purple-500/10
                              rounded-full blur-3xl transform translate-x-1/2 opacity-30"/>
                <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3
                              bg-gradient-to-tr from-blue-500/20 to-[#E43D3D]/20
                              dark:from-blue-500/10 dark:to-[#E43D3D]/10
                              rounded-full blur-3xl transform -translate-x-1/2 opacity-30"/>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* En-tête moderne */}
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <span className="inline-block px-4 py-1 mb-4
                                       text-[#FF4B4B] bg-[#FF4B4B]/10
                                       dark:bg-[#FF4B4B]/5
                                       rounded-full text-sm font-medium
                                       border border-[#FF4B4B]/20">
                            Nos Services
                        </span>
                    </div>
                </div>

                {/* Grille des services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service) => (
                        <div key={service.id} className="group relative h-full">
                            {/* Effet de fond au hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                          rounded-2xl blur-xl`}/>

                            {/* Carte */}
                            <div className="relative rounded-2xl p-8
                                          dark:bg-[#1E1E1E] bg-white
                                          shadow-lg hover:shadow-xl
                                          transition-all duration-300
                                          dark:border-[#2D2D2D] border-gray-100
                                          backdrop-blur-sm
                                          h-full flex flex-col justify-between">
                                <div>
                                    {/* Icône avec gradient */}
                                    <div
                                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                                        <div className="w-full h-full
                                                      dark:bg-[#1E1E1E] bg-white
                                                      rounded-xl flex items-center justify-center">
                                            <service.Icon className="w-8 h-8 text-[#FF4B4B]"/>
                                        </div>
                                    </div>

                                    {/* Contenu */}
                                    <h3 className="text-xl font-bold mb-4
                                                 dark:text-[#F5F5F5] text-gray-900
                                                 group-hover:text-[#FF4B4B]
                                                 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="dark:text-[#BBBBBB] text-gray-600 mb-6">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Bouton avec effet */}
                                <div>
                                    <a href={service.link}
                                       className="inline-flex items-center gap-2
                                                text-[#FF4B4B] font-medium
                                                group-hover:text-[#E43D3D]
                                                transition-colors duration-300">
                                        <span>En savoir plus</span>
                                        <div className="w-6 h-6 rounded-full
                                                      bg-[#FF4B4B]/10
                                                      dark:bg-[#FF4B4B]/5
                                                      flex items-center justify-center
                                                      transform group-hover:translate-x-2
                                                      transition-transform duration-300">
                                            <svg className="w-4 h-4 text-[#FF4B4B]"
                                                 fill="none"
                                                 viewBox="0 0 24 24"
                                                 stroke="currentColor">
                                                <path strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M9 5l7 7-7 7"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;