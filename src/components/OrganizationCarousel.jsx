import React, {useState} from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OrganizationCarousel = () => {
    const [activeTab, setActiveTab] = useState('partners');

    const partners = Array.from({length: 16}, (_, index) => ({
        logo: `/images/logos/partners/${index + 1}.jpg`
    }));

    const clients = Array.from({length: 11}, (_, index) => ({
        logo: `/images/logos/consumers/${index + 1}.jpg`
    }));

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
                : 'dark:bg-[#1E1E1E] bg-white dark:text-[#F5F5F5] text-gray-600 hover:bg-gray-50 dark:hover:bg-[#242424] hover:scale-102 dark:border-[#2D2D2D] border-gray-200 border'
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
            <div className="block dark:bg-[#1E1E1E] bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden group
                          hover:shadow-xl hover:-translate-y-1 h-[200px] dark:border-[#2D2D2D] border">
                <div className="h-full w-full flex items-center justify-center p-4 relative">
                    <div className="relative w-full h-full rounded-xl overflow-hidden
                                dark:bg-gradient-to-br dark:from-[#242424] dark:to-[#1E1E1E] bg-gradient-to-br from-gray-50 to-white
                                group-hover:from-[#FF4B4B]/5 group-hover:to-[#E43D3D]/5
                                transition-all duration-300">
                        <img
                            src={item.logo}
                            alt="Organization Logo"
                            className="w-full h-full object-contain p-4
                                   transition-all duration-300
                                   group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 shine-effect"/>
                    </div>
                </div>
            </div>
        </div>
    );

    const styles = `
        .shine-effect {
            transform: translateX(-100%);
            animation: shine 2s infinite;
        }
        
        @keyframes shine {
            100% {
                transform: translateX(100%);
            }
        }
        
        .slick-prev,
        .slick-next {
            width: 40px;
            height: 40px;
            background-color: white !important;
            border-radius: 50%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 20;
            transition: all 0.3s ease;
        }
        
        .dark .slick-prev,
        .dark .slick-next {
            background-color: #1E1E1E !important;
            border: 1px solid #2D2D2D;
        }
        
        .slick-prev:hover,
        .slick-next:hover {
            background-color: white !important;
            transform: scale(1.1);
        }
        
        .dark .slick-prev:hover,
        .dark .slick-next:hover {
            background-color: #242424 !important;
        }
        
        .slick-prev {
            left: -20px;
        }
        
        .slick-next {
            right: -20px;
        }
        
        .slick-prev:before,
        .slick-next:before {
            color: #FF4B4B;
            opacity: 1;
        }
        
        .slick-dots li button:before {
            font-size: 12px;
            color: #FF4B4B;
            opacity: 0.25;
        }
        
        .slick-dots li.slick-active button:before {
            opacity: 1;
            color: #FF4B4B;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <section
                className="py-24 dark:bg-[#121212] bg-white dark:text-[#F5F5F5] text-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 dark:opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}/>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="text-center mb-20">
                        <div className="inline-block">
                            <span className="inline-block px-4 py-1 mb-4 text-[#FF4B4B] bg-[#FF4B4B]/10 dark:bg-[#FF4B4B]/5
                                           rounded-full text-sm font-medium border border-[#FF4B4B]/20">
                                Notre réseau
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold mb-8 dark:text-[#F5F5F5] text-gray-900">
                            Notre
                            <span className="relative inline-block mx-4">
                                Écosystème
                                <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#FF4B4B]
                                              rounded-full transform skew-x-12"/>
                            </span>
                        </h2>
                        <p className="text-gray-600 dark:text-[#BBBBBB] text-lg max-w-2xl mx-auto">
                            Découvrez notre réseau de partenaires et clients qui contribuent à notre succès
                        </p>
                    </div>

                    <div className="flex justify-center gap-6 mb-16">
                        <TabButton type="partners" label="Nos Partenaires"/>
                        <TabButton type="clients" label="Nos Clients"/>
                    </div>

                    <div className="relative">
                        <div
                            className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r dark:from-[#121212] from-white to-transparent z-10"/>
                        <div
                            className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l dark:from-[#121212] from-white to-transparent z-10"/>

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
        </>
    );
};

export default OrganizationCarousel;