import React from 'react';
import {Person} from "@mui/icons-material";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamSection = () => {
    const teamMembers = [
        {
            name: "John Doe",
            role: "CEO & Fondateur",
            phone: "+33 6 12 34 56 78",
            email: "john.doe@marolook.com",
            image: "https://i.pravatar.cc/150?img=1"
        },
        {
            name: "Jane Smith",
            role: "Directrice Technique",
            phone: "+33 6 23 45 67 89",
            email: "jane.smith@marolook.com",
            image: "https://i.pravatar.cc/150?img=2"
        },
        {
            name: "Marc Johnson",
            role: "Lead Designer",
            phone: "+33 6 34 56 78 90",
            email: "marc.johnson@marolook.com",
            image: "https://i.pravatar.cc/150?img=3"
        },
        {
            name: "Sarah Wilson",
            role: "Responsable Marketing",
            phone: "+33 6 45 67 89 01",
            email: "sarah.wilson@marolook.com",
            image: "https://i.pravatar.cc/150?img=4"
        },
        {
            name: "Paul Garcia",
            role: "Développeur Frontend",
            phone: "+33 6 56 78 90 12",
            email: "paul.garcia@marolook.com",
            image: "https://i.pravatar.cc/150?img=5"
        },
        {
            name: "Emily Brown",
            role: "Développeuse Backend",
            phone: "+33 6 67 89 01 23",
            email: "emily.brown@marolook.com",
            image: "https://i.pravatar.cc/150?img=6"
        },
        {
            name: "Thomas Miller",
            role: "Chef de Projet",
            phone: "+33 6 78 90 12 34",
            email: "thomas.miller@marolook.com",
            image: "https://i.pravatar.cc/150?img=7"
        },
        {
            name: "Olivia Davis",
            role: "UX Designer",
            phone: "+33 6 89 01 23 45",
            email: "olivia.davis@marolook.com",
            image: "https://i.pravatar.cc/150?img=8"
        },
        {
            name: "James Wilson",
            role: "Analyste Marketing",
            phone: "+33 6 90 12 34 56",
            email: "james.wilson@marolook.com",
            image: "https://i.pravatar.cc/150?img=9"
        },
        {
            name: "Sophia Martinez",
            role: "Consultante SEO",
            phone: "+33 6 01 23 45 67",
            email: "sophia.martinez@marolook.com",
            image: "https://i.pravatar.cc/150?img=10"
        },
        {
            name: "Liam Anderson",
            role: "Spécialiste DevOps",
            phone: "+33 6 23 45 67 89",
            email: "liam.anderson@marolook.com",
            image: "https://i.pravatar.cc/150?img=11"
        },
        {
            name: "Chloe Thomas",
            role: "Community Manager",
            phone: "+33 6 34 56 78 90",
            email: "chloe.thomas@marolook.com",
            image: "https://i.pravatar.cc/150?img=12"
        },
        {
            name: "Daniel White",
            role: "Responsable IT",
            phone: "+33 6 45 67 89 01",
            email: "daniel.white@marolook.com",
            image: "https://i.pravatar.cc/150?img=13"
        },
        {
            name: "Isabella Harris",
            role: "Consultante RH",
            phone: "+33 6 56 78 90 12",
            email: "isabella.harris@marolook.com",
            image: "https://i.pravatar.cc/150?img=14"
        },
        {
            name: "Ethan Clark",
            role: "Rédacteur Web",
            phone: "+33 6 67 89 01 23",
            email: "ethan.clark@marolook.com",
            image: "https://i.pravatar.cc/150?img=15"
        },
        {
            name: "Mia Rodriguez",
            role: "Responsable Événements",
            phone: "+33 6 78 90 12 34",
            email: "mia.rodriguez@marolook.com",
            image: "https://i.pravatar.cc/150?img=16"
        },
        {
            name: "Alexander Lewis",
            role: "Stratégiste Digital",
            phone: "+33 6 89 01 23 45",
            email: "alexander.lewis@marolook.com",
            image: "https://i.pravatar.cc/150?img=17"
        },
        {
            name: "Ava Hall",
            role: "Spécialiste Contenus",
            phone: "+33 6 90 12 34 56",
            email: "ava.hall@marolook.com",
            image: "https://i.pravatar.cc/150?img=18"
        },
        {
            name: "Lucas Young",
            role: "Technicien Réseau",
            phone: "+33 6 01 23 45 67",
            email: "lucas.young@marolook.com",
            image: "https://i.pravatar.cc/150?img=19"
        },
        {
            name: "Amelia King",
            role: "Gestionnaire Comptabilité",
            phone: "+33 6 23 45 67 89",
            email: "amelia.king@marolook.com",
            image: "https://i.pravatar.cc/150?img=20"
        }
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
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

    const MemberCard = ({member}) => (
        <div className="px-3">
            <div className="rounded-2xl shadow-lg p-6 bg-white
                          transform transition-all duration-300 hover:shadow-xl
                          group relative mb-10">
                {/* Image Section - Maintenant avec bordure arrondie */}
                <div className="relative mx-auto mb-6">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden
                                  ring-4 ring-[#FF4B4B]/20 group-hover:ring-[#FF4B4B]/40
                                  transition-all duration-300">
                        {member.image ? (
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-300
                                         group-hover:scale-110"
                            />
                        ) : (
                            <div className="w-full h-full bg-[#FF4B4B]/10 flex items-center justify-center">
                                <Person className="text-[#FF4B4B]" style={{fontSize: "4rem"}}/>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="text-center space-y-3">
                    <h2 className="text-2xl font-bold text-[#333333] transition-colors duration-300
                                 group-hover:text-[#FF4B4B]">
                        {member.name}
                    </h2>
                    <button className="bg-[#FF4B4B] text-white font-bold py-1 px-4 rounded-full
                                     hover:bg-[#E43D3D] transition duration-200">
                        {member.role}
                    </button>
                    <div className="space-y-2 transition-all duration-300 transform
                                  opacity-80 group-hover:opacity-100">
                        <p className="text-[#666666] text-lg font-medium">{member.phone}</p>
                        <p className="text-[#666666]">{member.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="w-full py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* En-tête avec style moderne */}
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <span className="inline-block px-4 py-1 mb-4 text-[#FF4B4B] bg-[#FF4B4B]/10
                                       rounded-full text-sm font-medium border border-[#FF4B4B]/20">
                            Notre capital humain
                        </span>
                    </div>
                    <h2 className="text-6xl font-bold mb-8 text-gray-900">
                        L'équipe
                        <span className="relative inline-block ml-4">
                            Marolook
                            <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#FF4B4B]
                                          rounded-full transform skew-x-12"/>
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Découvrez les talents passionnés qui font de Marolook une entreprise innovante
                    </p>
                </div>

                {/* Carousel */}
                <div>
                    <Slider {...settings}>
                        {teamMembers.map((member, index) => (
                            <MemberCard key={`member-${index}`} member={member}/>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;