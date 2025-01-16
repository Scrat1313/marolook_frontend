import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {ChevronLeft, ChevronRight} from "@mui/icons-material";

const NewsCard = ({date, title, description, imageUrl}) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative">
            <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                Nouveauté
            </span>
            <div className="h-48 bg-gray-100 overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
            </div>
            <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 text-sm text-gray-600">
                {date}
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
            </h3>
            <p className="text-gray-600 mb-4">
                {description}
            </p>
            <Link to="#" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                Voir plus
            </Link>
        </div>
    </div>
);

const ActualitySection = () => {
    const news = [
        {
            date: "08/12/2024",
            title: "Lancement du marché artisanal mensuel",
            description: "Découvrez les produits locaux et soutenez les artisans de la région...",
            imageUrl: "/api/placeholder/400/320"
        },
        {
            date: "05/12/2024",
            title: "Programme de rénovation des routes",
            description: "Des travaux de réhabilitation sont en cours dans plusieurs quartiers...",
            imageUrl: "/api/placeholder/400/320"
        },
        {
            date: "01/12/2024",
            title: "Nouvelle bibliothèque communale",
            description: "Un espace dédié à la lecture et à l'apprentissage ouvre ses portes...",
            imageUrl: "/api/placeholder/400/320"
        },
        {
            date: "28/11/2024",
            title: "Formation en agriculture durable",
            description: "Inscrivez-vous pour participer à des ateliers pratiques sur les techniques modernes...",
            imageUrl: "/api/placeholder/400/320"
        },
        {
            date: "25/11/2024",
            title: "Célébration de la journée de l'environnement",
            description: "Une journée d'activités et de sensibilisation pour protéger notre planète...",
            imageUrl: "/api/placeholder/400/320"
        },
        {
            date: "20/11/2024",
            title: "Appel à bénévoles pour le festival de musique",
            description: "Participez à l'organisation d'un événement culturel unique...",
            imageUrl: "/api/placeholder/400/320"
        },
        {
            date: "15/11/2024",
            title: "Éclairage public : nouvelles installations",
            description: "De nouvelles lampes solaires sont en cours d'installation dans les zones mal éclairées...",
            imageUrl: "/api/placeholder/400/320"
        },
        {
            date: "10/11/2024",
            title: "Séance de vaccination gratuite",
            description: "La commune organise une campagne de vaccination pour tous les résidents...",
            imageUrl: "/api/placeholder/400/320"
        },
        {
            date: "05/11/2024",
            title: "Atelier sur le recyclage",
            description: "Apprenez les bases du tri sélectif et du recyclage pour un avenir plus vert...",
            imageUrl: "/api/placeholder/400/320"
        },
        {
            date: "01/11/2024",
            title: "Inauguration du parc communal rénové",
            description: "Rejoignez-nous pour l'ouverture officielle avec des activités pour toute la famille...",
            imageUrl: "/api/placeholder/400/320"
        }
    ];


    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const totalPages = Math.ceil(news.length / itemsPerPage);
    const showNavigation = news.length > 3;

    const handlePrevious = () => {
        setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
    };

    const handleNext = () => {
        setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
    };

    const visibleNews = showNavigation
        ? news.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
        : news;

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Ambalavao en action : Actualités
                    </h2>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-600 text-sm sm:text-base flex-1">
                            Restez informé des dernières <span className="text-green-600">nouvelles</span> et <span
                            className="text-green-600">annonces</span> de la Commune Urbaine d'Ambalavao.
                            Découvrez les <span className="text-green-600">événements récents</span>, les <span
                            className="text-green-600">projets en cours</span>,
                            et les <span className="text-green-600">décisions importantes</span> qui impactent notre
                            communauté.
                        </p>
                        {showNavigation && (
                            <div className="flex gap-2 ml-4">
                                <button
                                    onClick={handlePrevious}
                                    className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                                    <ChevronLeft className="w-6 h-6"/>
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                                    <ChevronRight className="w-6 h-6"/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {visibleNews.map((item, index) => (
                        <NewsCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActualitySection;