import React, {useState, useEffect} from 'react';
import {
    FormatQuote,
    Star,
    ArrowBack,
    ArrowForward,
    BusinessCenter,
    Person
} from '@mui/icons-material';

const testimonialData = [
    {
        id: 1,
        name: "Marie Rakoto",
        role: "Résidente",
        type: "particular",
        avatar: "/images/avatars/avatar-1.jpg", // Assurez-vous d'avoir ces images ou remplacez par des images de votre choix
        content: "La mairie d'Ambalavao a transformé mon expérience administrative. Le service est rapide, efficace et le personnel est très accueillant. Je recommande vivement leurs services en ligne !",
        rating: 5,
        date: "Janvier 2025"
    },
    {
        id: 2,
        name: "Hôtel Betsileo",
        role: "Entreprise locale",
        type: "business",
        avatar: "/images/avatars/business-1.jpg",
        content: "En tant qu'entreprise locale, nous apprécions grandement la réactivité et le professionnalisme des services municipaux. Leur accompagnement dans nos démarches administratives a été précieux.",
        rating: 5,
        date: "Décembre 2024"
    },
    {
        id: 3,
        name: "Jean Randria",
        role: "Entrepreneur",
        type: "business",
        avatar: "/images/avatars/avatar-2.jpg",
        content: "L'équipe de la commune a été d'une aide exceptionnelle pour l'obtention de mon permis de construire. Un service public moderne et efficace !",
        rating: 4,
        date: "Janvier 2025"
    },
    {
        id: 4,
        name: "Sophie Ravalison",
        role: "Commerçante",
        type: "business",
        avatar: "/images/avatars/avatar-3.jpg",
        content: "Les démarches en ligne ont considérablement simplifié la gestion de mon commerce. Un grand merci à l'équipe pour leur disponibilité !",
        rating: 5,
        date: "Janvier 2025"
    },
    {
        id: 5,
        name: "Paul Ratsima",
        role: "Résident",
        type: "particular",
        avatar: "/images/avatars/avatar-4.jpg",
        content: "Je suis impressionné par la rapidité de traitement de mes demandes. Le nouveau système en ligne est vraiment pratique et intuitif.",
        rating: 5,
        date: "Décembre 2024"
    }
];

const TestimonySection = () => {
    const [currentFilter, setCurrentFilter] = useState('all');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedTestimonials, setDisplayedTestimonials] = useState(testimonialData);

    useEffect(() => {
        const filtered = currentFilter === 'all'
            ? testimonialData
            : testimonialData.filter(item => item.type === currentFilter);
        setDisplayedTestimonials(filtered);
        setCurrentIndex(0);
    }, [currentFilter]);

    const handleNext = () => {
        if (displayedTestimonials.length > 0) {
            setCurrentIndex((prev) => (prev + 1) % displayedTestimonials.length);
        }
    };

    const handlePrev = () => {
        if (displayedTestimonials.length > 0) {
            setCurrentIndex((prev) =>
                prev === 0 ? displayedTestimonials.length - 1 : prev - 1
            );
        }
    };

    const renderStars = (rating) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    className={`w-5 h-5 ${index < rating ? 'text-[#FF4B4B]' : 'text-gray-300'}`}
                />
            ))}
        </div>
    );

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Citations décoratives en arrière-plan */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-20 -top-20">
                    <FormatQuote
                        className="w-64 h-64 text-gray-100 transform -scale-x-100 rotate-12 opacity-60"
                    />
                </div>
                <div className="absolute -right-20 top-1/4">
                    <FormatQuote
                        className="w-48 h-48 text-[#FF4B4B]/5 rotate-45"
                    />
                </div>
                <div className="absolute left-0 top-1/2">
                    <FormatQuote
                        className="w-40 h-40 text-[#FF4B4B]/5 -rotate-12 -scale-x-100"
                    />
                </div>
                <div className="absolute -right-16 -bottom-16">
                    <FormatQuote
                        className="w-56 h-56 text-gray-100 -rotate-12"
                    />
                </div>
                <div className="absolute -left-10 bottom-1/4">
                    <FormatQuote
                        className="w-32 h-32 text-[#FF4B4B]/5 rotate-180"
                    />
                </div>
            </div>

            {/* Fond avec gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-80"/>

            {/* Contenu principal */}
            <div className="relative">
                {/* En-tête */}
                <div className="relative max-w-7xl mx-auto px-4 mb-16 text-center">
                    <span
                        className="inline-block px-4 py-1 mb-4 text-[#FF4B4B] bg-[#FF4B4B]/10 rounded-full text-sm font-medium">
                        Témoignages
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Ce que disent nos usagers
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Découvrez les expériences de nos citoyens et entreprises avec les services municipaux.
                    </p>
                </div>

                {/* Filtres */}
                <div className="relative max-w-7xl mx-auto px-4 mb-16">
                    <div className="flex justify-center gap-4">
                        {[
                            {id: 'all', label: 'Tous', icon: null},
                            {id: 'particular', label: 'Particuliers', icon: <Person/>},
                            {id: 'business', label: 'Entreprises', icon: <BusinessCenter/>}
                        ].map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setCurrentFilter(filter.id)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                                    currentFilter === filter.id
                                        ? 'bg-[#FF4B4B] text-white'
                                        : 'bg-gray-100 hover:bg-[#FF4B4B]/10 text-gray-600'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    {filter.icon}
                                    <span>{filter.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Contenu des témoignages */}
                {displayedTestimonials.length > 0 ? (
                    <div className="relative max-w-4xl mx-auto px-4">
                        <div className="text-center">
                            {/* Avatar et infos */}
                            <div className="mb-8">
                                <div className="relative inline-block">
                                    <div
                                        className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                                        <img
                                            src={displayedTestimonials[currentIndex].avatar}
                                            alt={displayedTestimonials[currentIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                        {renderStars(displayedTestimonials[currentIndex].rating)}
                                    </div>
                                </div>
                            </div>

                            {/* Contenu du témoignage */}
                            <blockquote className="mb-8 relative px-12 md:px-20">
                                <div className="relative">
                                    {/* Conteneur principal avec position relative pour le positionnement des guillemets */}
                                    <div className="mb-6">
                                        {/* Guillemet ouvrant */}
                                        <FormatQuote
                                            className="absolute -left-8 md:-left-12 top-0 w-8 md:w-12 h-8 md:h-12 text-[#FF4B4B] transform -scale-x-100"
                                        />

                                        {/* Contenu */}
                                        <p className="text-sm md:text-sm text-gray-700 leading-relaxed pt-4">
                                            {displayedTestimonials[currentIndex].content}
                                        </p>

                                        {/* Guillemet fermant */}
                                        <FormatQuote
                                            className="absolute -right-8 md:-right-12 bottom-0 w-8 md:w-12 h-8 md:h-12 text-[#FF4B4B]"
                                        />
                                    </div>

                                    {/* Informations de l'auteur */}
                                    <footer className="text-gray-600 relative z-10">
                                        <cite className="font-medium text-gray-800 block">
                                            {displayedTestimonials[currentIndex].name}
                                        </cite>
                                        <span className="text-[#FF4B4B]">
                                            {displayedTestimonials[currentIndex].role}
                                        </span>
                                        <span className="block text-sm mt-2">
                                            {displayedTestimonials[currentIndex].date}
                                        </span>
                                    </footer>
                                </div>
                            </blockquote>

                            {/* Navigation */}
                            {displayedTestimonials.length > 1 && (
                                <div className="flex justify-center items-center gap-4 mt-12">
                                    <button
                                        onClick={handlePrev}
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                                    >
                                        <ArrowBack className="w-6 h-6 text-gray-600"/>
                                    </button>
                                    <div className="flex gap-2">
                                        {displayedTestimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentIndex(index)}
                                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                                    index === currentIndex
                                                        ? 'w-8 bg-[#FF4B4B]'
                                                        : 'bg-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={handleNext}
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                                    >
                                        <ArrowForward className="w-6 h-6 text-gray-600"/>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-600">
                        Aucun témoignage disponible pour cette catégorie.
                    </div>
                )}
            </div>
        </section>
    );
};

export default TestimonySection;