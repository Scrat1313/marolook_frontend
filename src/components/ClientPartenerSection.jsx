import React, {useState} from 'react';
import {Business, School, HandshakeOutlined} from '@mui/icons-material';

const ClientPartenerSection = () => {
    const clients = [
        "EFOI", "VOZAMA", "Kenzo", "ORTF", "OHANA", "L'oreine traiteur", "GHRF",
        "An-tsaha", "Ranjalia", "Kanà Event", "My Shop'in Fianar", "JCI",
        "Ny Aiko Care", "ONG Pivot", "Projet MADATLAS", "Université de Fianarantsoa",
        "ENS", "Confucius", "Journée de la Recherche", "Mois de l'Innovation"
    ];

    const partners = [
        "Ymagoo", "Takamoa", "MCS", "Précision", "ROFIA", "Vivi Déco",
        "Jor's Service", "MMT Service", "Nomerikia", "Orange", "Média Pixel",
        "Computer Store"
    ];

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredItem, setHoveredItem] = useState(null);

    // Stats cards data
    const stats = [
        {
            icon: <Business className="w-6 h-6"/>,
            label: "Clients Actifs",
            value: clients.length,
            color: "from-pink-500 to-rose-500"
        },
        {
            icon: <HandshakeOutlined className="w-6 h-6"/>,
            label: "Partenaires",
            value: partners.length,
            color: "from-purple-500 to-indigo-500"
        },
        {
            icon: <School className="w-6 h-6"/>,
            label: "Projets Réalisés",
            value: clients.length + partners.length,
            color: "from-blue-500 to-cyan-500"
        }
    ];

    const CategoryButton = ({category, label, icon}) => (
        <button
            onClick={() => setSelectedCategory(category)}
            className={`
                flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300
                ${selectedCategory === category
                ? 'bg-[#FF4B4B] text-white shadow-lg shadow-[#FF4B4B]/20 scale-105'
                : 'bg-white/50 backdrop-blur-sm hover:bg-white/80 text-[#333333]'
            }
            `}
        >
            {icon}
            <span className="font-medium">{label}</span>
        </button>
    );

    const CollaboratorCard = ({name, type}) => (
        <div
            onMouseEnter={() => setHoveredItem(name)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`
                relative group p-6 rounded-2xl transition-all duration-500
                ${hoveredItem === name
                ? 'bg-white shadow-xl scale-105'
                : 'bg-white/50 backdrop-blur-sm'
            }
            `}
        >
            <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF4B4B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-[#333333]">{name}</h3>
                    <div className={`
                        w-2 h-2 rounded-full transition-transform duration-300
                        ${hoveredItem === name ? 'bg-[#FF4B4B] scale-150' : 'bg-[#666666] scale-100'}
                    `}/>
                </div>
                <p className="text-sm text-[#666666]">{type}</p>
            </div>
        </div>
    );

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8]">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF4B4B]/10 rounded-full blur-3xl"/>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF4B4B]/5 rounded-full blur-3xl"/>
            </div>

            <div className="relative container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-[#333333] mb-6">
                        Notre Écosystème
                    </h1>
                    <p className="text-[#666666] text-lg max-w-2xl mx-auto">
                        Une collaboration forte avec des partenaires de confiance pour
                        des projets d'excellence
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="relative group">
                            <div className={`
                                absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} 
                                opacity-0 group-hover:opacity-10 transition-opacity duration-300
                            `}/>
                            <div className="relative p-6 bg-white/50 backdrop-blur-sm rounded-2xl
                                        border border-white/20 transition-all duration-300
                                        hover:shadow-lg hover:bg-white/80">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-white/80">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className="text-[#666666]">{stat.label}</p>
                                        <h3 className="text-3xl font-bold text-[#333333]">
                                            {stat.value}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <CategoryButton
                        category="all"
                        label="Tous"
                        icon={<Business className="w-5 h-5"/>}
                    />
                    <CategoryButton
                        category="clients"
                        label="Clients"
                        icon={<Business className="w-5 h-5"/>}
                    />
                    <CategoryButton
                        category="partners"
                        label="Partenaires"
                        icon={<HandshakeOutlined className="w-5 h-5"/>}
                    />
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {(selectedCategory === 'all' || selectedCategory === 'clients') &&
                        clients.map((client, index) => (
                            <CollaboratorCard
                                key={`client-${index}`}
                                name={client}
                                type="Client"
                            />
                        ))
                    }

                    {(selectedCategory === 'all' || selectedCategory === 'partners') &&
                        partners.map((partner, index) => (
                            <CollaboratorCard
                                key={`partner-${index}`}
                                name={partner}
                                type="Partenaire"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientPartenerSection;