import React from 'react';
import {
    AdminPanelSettings,
    Assignment,
    AccountBalance,
    Business,
    Groups,
    TrendingUp
} from '@mui/icons-material';

const servicesData = [
    {
        id: 1,
        Icon: AdminPanelSettings,
        title: "Administration",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/services/administration"
    },
    {
        id: 2,
        Icon: Assignment,
        title: "État Civil",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "/services/etat-civil"
    },
    {
        id: 3,
        Icon: Business,
        title: "Urbanisme",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        link: "/services/urbanisme"
    },
    {
        id: 4,
        Icon: AccountBalance,
        title: "Finances",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "/services/finances"
    },
    {
        id: 5,
        Icon: Groups,
        title: "Social",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        link: "/services/social"
    },
    {
        id: 6,
        Icon: TrendingUp,
        title: "Développement",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
        link: "/services/developpement"
    }
];

const ServiceSection = () => {
    return (
        <section className="relative py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
            {/* Cercles décoratifs en arrière-plan */}
            <div
                className="absolute top-0 left-0 w-96 h-96 bg-[#FF4B4B]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"/>
            <div
                className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF4B4B]/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"/>

            {/* En-tête */}
            <div className="relative max-w-7xl mx-auto mb-20 text-center">
                <span
                    className="inline-block px-4 py-1 mb-4 text-[#FF4B4B] bg-[#FF4B4B]/10 rounded-full text-sm font-medium">
                    Nos services à votre disposition
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Services Municipaux
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Découvrez l'ensemble des services proposés par la commune pour faciliter votre quotidien.
                </p>
            </div>

            {/* Grille des services */}
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service) => (
                    <div
                        key={service.id}
                        className="group relative"
                    >
                        {/* Carte avec effet glassmorphisme */}
                        <div className="relative p-8 bg-white/70 backdrop-blur-xl rounded-2xl
                                      shadow-lg hover:shadow-2xl transition-all duration-500
                                      border border-white/20 overflow-hidden
                                      hover:bg-white/80">

                            {/* Icône avec cercle animé */}
                            <div className="relative mb-6 flex items-center justify-start">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#FF4B4B]/20 rounded-full
                                                  group-hover:scale-[1.2] transition-transform duration-500"/>
                                    <div className="relative z-10 p-3">
                                        <service.Icon className="w-8 h-8 text-[#FF4B4B]"/>
                                    </div>
                                </div>
                            </div>

                            {/* Contenu */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#FF4B4B]
                                             transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Bouton avec effet de glissement */}
                                <div className="pt-4">
                                    <a
                                        href={service.link}
                                        className="relative inline-flex items-center group/btn"
                                    >
                                        <span className="relative z-10 text-[#FF4B4B] font-medium pr-8
                                                       group-hover/btn:text-[#E43D3D] transition-colors duration-300">
                                            En savoir plus
                                        </span>
                                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6
                                                       flex items-center justify-center rounded-full
                                                       bg-[#FF4B4B]/10 group-hover/btn:bg-[#FF4B4B]/20
                                                       transition-all duration-300 group-hover/btn:translate-x-2">
                                            <svg
                                                className="w-4 h-4 text-[#FF4B4B]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Effet de bordure au survol */}
                            <div className="absolute inset-0 border-2 border-[#FF4B4B]/0 rounded-2xl
                                          group-hover:border-[#FF4B4B]/20 transition-colors duration-500"/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceSection;