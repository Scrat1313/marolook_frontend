import React from 'react'; // Pour les animations
import {BusinessCenter, Event, Timeline, Lightbulb} from '@mui/icons-material';

const PresentationSection = () => {
    return (
        <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Éléments décoratifs d'arrière-plan */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#FF4B4B]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"/>
                <div
                    className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#FF4B4B]/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"/>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <span
                        className="inline-block px-4 py-1 mb-4 text-[#FF4B4B] bg-[#FF4B4B]/10 rounded-full text-sm font-medium">
                        À propos
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Présentation de MaroLooK
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Fondée en 2018 par une équipe passionnée
                    </p>
                </div>

                {/* Contenu principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Image ou illustration */}
                    <div className="relative">
                        <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden bg-gray-100">
                            {/* Remplacez par votre image */}
                            <img
                                src="/path-to-your-image.jpg"
                                alt="MaroLooK Team"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Texte de présentation */}
                    <div
                        className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                            MaroLooK aide les marques, entreprises et organisations à faire de leurs idées des réussites
                            tangibles, grâce à des stratégies digitales impactantes et des événements bien pensés.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Notre mission est d'apporter un souffle nouveau à votre communication et offrir des
                            événements à la hauteur de vos ambitions.
                        </p>
                    </div>
                </div>

                {/* Services clés */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <BusinessCenter className="w-8 h-8"/>,
                            title: "Communication Digitale",
                            description: "De la conception de site web élégant à la promotion sur les réseaux sociaux."
                        },
                        {
                            icon: <Event className="w-8 h-8"/>,
                            title: "Organisation Événementielle",
                            description: "Gestion complète de vos événements d'entreprise et lancements de produits."
                        },
                        {
                            icon: <Timeline className="w-8 h-8"/>,
                            title: "Stratégie & Innovation",
                            description: "Transformons votre vision en une réalité digitale et événementielle."
                        }
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div
                                className="w-12 h-12 bg-[#FF4B4B]/10 rounded-full flex items-center justify-center mb-4 text-[#FF4B4B]">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="text-center mt-16">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF4B4B] text-white rounded-lg hover:bg-[#E43D3D] transition-colors duration-300"
                    >
                        <Lightbulb className="w-5 h-5"/>
                        <span>Démarrer votre projet</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PresentationSection;