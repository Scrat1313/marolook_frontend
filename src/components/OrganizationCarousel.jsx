import React, {useState} from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OrganizationCarousel = () => {
    const [activeTab, setActiveTab] = useState('partners');

    const partners = [
        {
            name: "Faritra Vatovinany Fitovinany",
            type: "Région",
            initials: "FVF",
            url: "http://region-vatovavy-fitovinany.mg"
        },
        {name: "Atsimo Atsinanana", type: "Région", initials: "AA", url: "https://www.region-atsimoatsinanana.mg"},
        {name: "BNI", type: "Banque", initials: "BNI", url: "https://www.bni.mg"},
        {name: "Airtel", type: "Télécommunication", initials: "AT", url: "https://www.airtel.mg"},
        {name: "Orange", type: "Télécommunication", initials: "OR", url: "https://www.orange.mg"},
        {name: "Telma", type: "Télécommunication", initials: "TM", url: "https://www.telma.mg"},
        {name: "Slow Food", type: "Organisation", initials: "SF", url: "https://www.slowfood.com"},
        {name: "Napoli Federico II", type: "Université", initials: "NFI", url: "http://www.unina.it"},
        {name: "École Polytechnique", type: "École", initials: "EP", url: "https://www.polytechnique.edu"},
        {name: "World Food Programme", type: "Organisation", initials: "WFP", url: "https://www.wfp.org"},
        {name: "HSD", type: "Organisation", initials: "HSD", url: "https://hsd.mg"},
        {name: "BNITM", type: "Organisation", initials: "BNT", url: "https://www.bnitm.de"},
        {name: "Stony Brook", type: "Université", initials: "SB", url: "https://www.stonybrook.edu"},
        {name: "AUF", type: "Organisation", initials: "AUF", url: "https://www.auf.org"},
        {name: "Ambassade de France", type: "Ambassade", initials: "AF", url: "https://mg.ambafrance.org"},
        {name: "Erasmus+", type: "Programme", initials: "E+", url: "https://erasmus-plus.ec.europa.eu"},
        {name: "INSA", type: "École", initials: "INSA", url: "https://www.insa-lyon.fr"},
        {name: "Université de Lyon", type: "Université", initials: "UL", url: "https://www.universite-lyon.fr"},
        {name: "Inalco", type: "Institut", initials: "INC", url: "http://www.inalco.fr"},
        {name: "Engees", type: "École", initials: "ENG", url: "https://engees.unistra.fr"},
        {name: "Cyberlibris", type: "Organisation", initials: "CL", url: "https://www.cyberlibris.com"},
        {name: "Cirad", type: "Centre", initials: "CR", url: "https://www.cirad.fr"},
        {name: "Arke Up", type: "Entreprise", initials: "AU", url: "https://www.arkeup.com"},
        {
            name: "Université Gustave Eiffel",
            type: "Université",
            initials: "UGE",
            url: "https://www.univ-gustave-eiffel.fr"
        },
        {name: "Bordeaux Montaigne", type: "Université", initials: "BM", url: "https://www.u-bordeaux-montaigne.fr"},
        {name: "IRD", type: "Institut", initials: "IRD", url: "https://www.ird.fr"},
        {name: "Bordeaux Sciences Agro", type: "École", initials: "BSA", url: "https://www.agro-bordeaux.fr"}
    ];

    const clients = [
        {name: "EFOI", type: "Entreprise", initials: "EF", url: "https://www.efoi.mg"},
        {name: "VOZAMA", type: "ONG", initials: "VZ", url: "https://www.vozama.org"},
        {name: "Kenzo", type: "Entreprise", initials: "KZ", url: "https://www.kenzo.com"},
        {name: "ORTF", type: "Organisation", initials: "OF", url: "https://www.ortf.mg"},
        {name: "OHANA", type: "Association", initials: "OH", url: "https://ohana.mg"},
        {name: "L'oreine traiteur", type: "Entreprise", initials: "LT", url: "https://loreine-traiteur.mg"},
        {name: "GHRF", type: "Institution", initials: "GH", url: "https://ghrf.mg"},
        {name: "An-tsaha", type: "Entreprise", initials: "AT", url: "https://antsaha.mg"},
        {name: "Ranjalia", type: "Entreprise", initials: "RJ", url: "https://ranjalia.mg"},
        {name: "Kanà Event", type: "Événementiel", initials: "KE", url: "https://kana-event.mg"},
        {name: "My Shop'in Fianar", type: "Commerce", initials: "MS", url: "https://myshopinfianar.mg"},
        {name: "JCI", type: "Organisation", initials: "JC", url: "https://jci.cc"},
        {name: "Ny Aiko Care", type: "Santé", initials: "NA", url: "https://nyaikocare.mg"},
        {name: "ONG Pivot", type: "ONG", initials: "OP", url: "https://pivotworks.org"}
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const TabButton = ({type, label}) => (
        <button
            onClick={() => setActiveTab(type)}
            className={`
                relative px-8 py-3 rounded-xl font-medium transition-all duration-300
                ${activeTab === type
                ? 'text-white shadow-lg shadow-[#FF4B4B]/20 scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-102 border border-gray-200'
            }
            `}
        >
            {activeTab === type && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4B4B] to-[#E43D3D] rounded-xl -z-10"/>
            )}
            {label}
        </button>
    );

    const Card = ({item}) => (
        <div className="px-3 py-2 mb-5">
            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden group
                         hover:shadow-xl hover:-translate-y-1"
            >
                <div className="h-full flex flex-col items-center justify-center p-8 relative">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B4B]/5 to-[#E43D3D]/5
                                  opacity-0 group-hover:opacity-100 transition-all duration-500"/>

                    {/* Border Animation */}
                    <div className="absolute inset-0 border-2 border-dashed border-transparent rounded-2xl
                                  group-hover:border-[#FF4B4B]/20 group-hover:scale-95 transition-all duration-500"/>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                        {/* Initials Circle */}
                        <div className="relative">
                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FF4B4B]/10 to-[#E43D3D]/10
                                          flex items-center justify-center transform transition-all duration-300
                                          group-hover:rotate-6 group-hover:scale-110">
                                <span className="text-3xl font-bold text-[#FF4B4B] group-hover:text-[#E43D3D]
                                               transition-colors duration-300">
                                    {item.initials}
                                </span>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4B4B] to-[#E43D3D] rounded-2xl
                                          opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"/>
                        </div>

                        {/* Organization Info */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#FF4B4B]
                                         line-clamp-2 min-h-[3.5rem] transition-colors duration-300">
                                {item.name}
                            </h3>
                            <span className="inline-flex items-center px-4 py-2 bg-gray-50 text-sm font-medium
                                           text-gray-600 rounded-full group-hover:bg-[#FF4B4B]/10
                                           group-hover:text-[#FF4B4B] transition-all duration-300">
                                {item.type}
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );

    return (
        <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}/>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Modern Header */}
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <span className="inline-block px-4 py-1 mb-4 text-[#FF4B4B] bg-[#FF4B4B]/10
                                       rounded-full text-sm font-medium border border-[#FF4B4B]/20">
                            Notre réseau
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">
                        Notre
                        <span className="relative inline-block mx-4">
                            Écosystème
                            <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#FF4B4B]
                                          rounded-full transform skew-x-12"/>
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Découvrez notre réseau de partenaires et clients qui contribuent à notre succès
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-6 mb-16">
                    <TabButton type="partners" label="Nos Partenaires"/>
                    <TabButton type="clients" label="Nos Clients"/>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"/>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"/>

                    {/* Carousels */}
                    <div className="transition-all duration-500">
                        {activeTab === 'partners' && (
                            <Slider {...settings}>
                                {partners.map((partner, index) => (
                                    <Card key={`partner-${index}`} item={partner}/>
                                ))}
                            </Slider>
                        )}

                        {activeTab === 'clients' && (
                            <Slider {...settings}>
                                {clients.map((client, index) => (
                                    <Card key={`client-${index}`} item={client}/>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrganizationCarousel;