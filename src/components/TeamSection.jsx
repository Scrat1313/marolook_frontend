import React from 'react';
import {
    Person,
    BusinessCenter,
    Campaign,
    Code,
    Camera,
    Brush,
    Event,
} from '@mui/icons-material';

const TeamSection = () => {
    const departments = [
        {
            id: 1,
            Icon: BusinessCenter,
            title: "Direction Générale",
            description: "Leadership et vision stratégique",
            roles: ["DG", "DRH", "Dir.CM", "Dir.Prod", "CODIR", "DAF"],
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            Icon: Person,
            title: "Administration",
            description: "Gestion et organisation",
            roles: ["EC", "RLog", "2RPCM"],
            gradient: "from-[#FF4B4B] to-[#E43D3D]"
        },
        {
            id: 3,
            Icon: Campaign,
            title: "Communication & Marketing",
            description: "Promotion et image de marque",
            roles: ["Assistant CM", "Rédacteurs", "EP", "Equipe EV"],
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 4,
            Icon: Camera,
            title: "Production Audiovisuelle",
            description: "Création de contenu visuel",
            roles: ["Vidéastes", "Photographes"],
            gradient: "from-amber-500 to-orange-500"
        },
        {
            id: 5,
            Icon: Brush,
            title: "Design & Graphisme",
            description: "Création artistique",
            roles: ["Graphistes", "3Distes"],
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            id: 6,
            Icon: Code,
            title: "Développement",
            description: "Solutions techniques",
            roles: ["SMU", "RDI", "Développeurs"],
            gradient: "from-indigo-500 to-violet-500"
        },
        {
            id: 7,
            Icon: Event,
            title: "Événementiel",
            description: "Organisation et logistique",
            roles: ["Event Planner", "Tech Son, RLS"],
            gradient: "from-rose-500 to-red-500"
        }
    ];

    const abbreviations = {
        "DG": "Directeur Général",
        "DRH": "Directeur des Ressources Humaines",
        "Dir.CM": "Directeur Communication & Marketing",
        "Dir.Prod": "Directeur de Production",
        "CODIR": "Comité de Direction",
        "DAF": "Directeur Administratif et Financier",
        "EC": "Employé Comptable",
        "RLog": "Responsable Logistique",
        "2RPCM": "2ème Responsable Communication & Marketing",
        "Assistant CM": "Assistant Communication & Marketing",
        "EP": "Équipe Production",
        "Equipe EV": "Équipe Événementiel",
        "SMU": "Service Maintenance & Utilisation",
        "RDI": "Responsable Développement Informatique",
        "Tech Son": "Technicien Son",
        "RLS": "Responsable Logistique & Sécurité"
    };

    const DepartmentList = ({department}) => (
        <div
            className="flex flex-col items-start p-4 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div
                className={`flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br ${department.gradient} rounded-full`}>
                <department.Icon className="w-6 h-6 text-white"/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{department.title}</h3>
            <p className="text-gray-600 mb-4">{department.description}</p>
            <ul className="list-none text-gray-600 space-y-1 ml-0">
                {department.roles.map((role, index) => (
                    <li key={index} className="hover:text-[#FF4B4B] transition-colors duration-300 relative group">
                        {role}
                        <span
                            className="absolute left-full top-0 ml-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                            {abbreviations[role]}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <section className="relative py-16 bg-gray-50 text-gray-900 overflow-hidden">
            {/* Motif de fond */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}/>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#FF4B4B]/20 to-purple-500/20
                              rounded-full blur-3xl transform translate-x-1/2 opacity-30"/>
                <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/20 to-[#E43D3D]/20
                              rounded-full blur-3xl transform -translate-x-1/2 opacity-30"/>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* En-tête moderne */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <span className="inline-block px-4 py-1 mb-4 text-[#FF4B4B] bg-[#FF4B4B]/10
                                       rounded-full text-sm font-medium border border-[#FF4B4B]/20">
                            Structure Organisationnelle
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        Notre
                        <span className="relative inline-block mx-4">
                            Organisation
                            <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#FF4B4B]
                                          rounded-full transform skew-x-12"/>
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Découvrez les différents départements et postes qui composent notre structure
                    </p>
                </div>

                {/* Liste des départements */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {departments.map((department) => (
                        <DepartmentList key={department.id} department={department}/>
                    ))}
                </div>

                {/* Section des abréviations */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Abréviations</h3>
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                Abréviation
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                Signification
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {Object.entries(abbreviations).map(([abbr, full], index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                    {abbr}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-600">
                                    {full}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;