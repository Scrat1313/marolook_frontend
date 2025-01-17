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
        avatar: "/images/avatars/avatar-1.jpg",
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
];

const TestimonySection = () => {
    const [currentFilter, setCurrentFilter] = useState('all');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedTestimonials, setDisplayedTestimonials] = useState(testimonialData);

    // Gérer le changement de filtre
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
            <div className="absolute inset-0 overflow-hidden">
                <FormatQuote
                    className="absolute top-0 left-0 w-96 h-96 text-gray-100 transform -translate-x-1/2 -translate-y-1/2"/>
                <FormatQuote
                    className="absolute bottom-0 right-0 w-96 h-96 text-gray-100 transform translate-x-1/2 translate-y-1/2"/>
            </div>

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
                        <blockquote className="mb-8">
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                                "{displayedTestimonials[currentIndex].content}"
                            </p>
                            <footer className="text-gray-600">
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
        </section>
    );
};

export default TestimonySection;