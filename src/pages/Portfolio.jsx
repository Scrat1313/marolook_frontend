import React, {useState} from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {HeroCarousel} from "../components";
import Masonry from 'react-masonry-css';
import {motion, AnimatePresence} from 'framer-motion';

const Portfolio = () => {
    usePageTitle('Portfolio');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        {id: 'all', name: 'Tout'},
        {id: 'videography', name: 'Vidéographie'},
        {id: 'photography', name: 'Photographie'},
        {id: 'graphic-design', name: 'Design Graphique'},
        {id: '3d', name: 'Modélisation 3D'},
        {id: 'vfx', name: 'Incrustation'},
        {id: 'social-media', name: 'Community Management'},
        {id: 'web-dev', name: 'Développement Web'},
        {id: 'events', name: 'Évènementiel'},
        {id: 'decoration', name: 'Décoration'}
    ];

    // Exemple de données avec des hauteurs variables pour l'effet Pinterest
    const portfolioItems = [
        {
            id: 1,
            title: "Projet Vidéo Corporate",
            category: "videography",
            image: "https://picsum.photos/400/600?random=1",
            description: "Réalisation d'une vidéo promotionnelle"
        },
        {
            id: 2,
            title: "Design Web",
            category: "web-dev",
            image: "https://picsum.photos/400/300?random=2",
            description: "Site web responsive"
        },
        {
            id: 3,
            title: "Album Photo Mariage",
            category: "photography",
            image: "https://picsum.photos/400/400?random=3",
            description: "Souvenirs inoubliables d'un mariage"
        },
        {
            id: 4,
            title: "Affiche Publicitaire",
            category: "graphic-design",
            image: "https://picsum.photos/400/500?random=4",
            description: "Design d'une affiche publicitaire pour un événement"
        },
        {
            id: 5,
            title: "Modélisation de Produit 3D",
            category: "3d",
            image: "https://picsum.photos/400/400?random=5",
            description: "Création d'un modèle 3D de produit pour le marketing"
        },
        {
            id: 6,
            title: "Effets Spéciaux Vidéo",
            category: "vfx",
            image: "https://picsum.photos/400/400?random=6",
            description: "Incrustation et ajout d'effets spéciaux pour une vidéo"
        },
        {
            id: 7,
            title: "Stratégie Réseaux Sociaux",
            category: "social-media",
            image: "https://picsum.photos/400/400?random=7",
            description: "Campagne de gestion des réseaux sociaux pour une marque"
        },
        {
            id: 8,
            title: "Site E-commerce",
            category: "web-dev",
            image: "https://picsum.photos/400/300?random=8",
            description: "Création d'une boutique en ligne performante"
        },
        {
            id: 9,
            title: "Organisation d'un Mariage",
            category: "events",
            image: "https://picsum.photos/400/300?random=9",
            description: "Planification et décoration pour un mariage parfait"
        },
        {
            id: 10,
            title: "Décoration d'Intérieur",
            category: "decoration",
            image: "https://picsum.photos/400/400?random=10",
            description: "Transformation d'une maison en un espace élégant"
        },
        // Ajout de plus de 40 éléments
        ...Array.from({length: 100}, (_, i) => {
            const randomWidth = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
            const randomHeight = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
            return {
                id: i + 11,
                title: `Projet ${i + 11}`,
                category: [
                    "videography",
                    "photography",
                    "graphic-design",
                    "3d",
                    "vfx",
                    "social-media",
                    "web-dev",
                    "events",
                    "decoration"
                ][Math.floor(Math.random() * 9)],
                image: `https://picsum.photos/${randomWidth}/${randomHeight}?random=${i + 11}`,
                description: `Description du projet ${i + 11}`
            };
        })
    ];

    const heroSlides = [
        {
            title: "Notre Portfolio",
            description: "Découvrez nos réalisations à travers différents domaines d'expertise",
            backgroundImage: "https://picsum.photos/1920/1080?random=1",
            buttons: [
                {
                    text: "Explorer",
                    path: "#gallery",
                    variant: "primary"
                },
                {
                    text: "Contactez-nous",
                    path: "/contact",
                    variant: "secondary"
                }
            ]
        }
    ];

    // Configuration des breakpoints pour Masonry
    const breakpointColumns = {
        default: 4,
        1536: 4,
        1280: 3,
        1024: 3,
        768: 2,
        640: 1
    };

    return (
        <div className="flex flex-col min-h-screen">
            <HeroCarousel
                slides={heroSlides}
                height="h-[500px]"
                showArrows={false}
                showDots={false}
            />

            <div className="py-16 bg-gray-50" id="gallery">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <div className="inline-block">
                            <span className="inline-block px-4 py-1 mb-4 text-[#FF4B4B] bg-[#FF4B4B]/10
                                          rounded-full text-sm font-medium border border-[#FF4B4B]/20">
                                Nos Réalisations
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold mb-8 text-gray-900">
                            Notre
                            <span className="relative inline-block ml-4">
                                Portfolio
                                <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#FF4B4B]
                                              rounded-full transform skew-x-12"/>
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Découvrez nos créations à travers différents domaines d'expertise
                        </p>
                    </div>

                    {/* Filtres de catégories */}
                    <div className="mb-12">
                        <div className="flex flex-wrap gap-4 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`
                                        px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300
                                        ${selectedCategory === category.id
                                        ? 'bg-[#FF4B4B] text-white shadow-lg shadow-[#FF4B4B]/25'
                                        : 'bg-white text-gray-600 hover:bg-[#FF4B4B]/10 hover:text-[#FF4B4B]'
                                    }
                                    `}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Style Masonry Pinterest */}
                    <style>
                        {`
                            .masonry-grid {
                                display: flex;
                                width: auto;
                                margin-left: -16px; /* Ajustez selon votre espacement */
                            }
                            .masonry-grid_column {
                                padding-left: 16px; /* Ajustez selon votre espacement */
                                background-clip: padding-box;
                            }
                        `}
                    </style>

                    {/* Grille Pinterest */}
                    <AnimatePresence>
                        <Masonry
                            breakpointCols={breakpointColumns}
                            className="masonry-grid"
                            columnClassName="masonry-grid_column"
                        >
                            {portfolioItems
                                .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
                                .map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: 20}}
                                        transition={{duration: 0.3}}
                                        className="mb-4"
                                    >
                                        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm
                                                     hover:shadow-xl transition-all duration-300">
                                            <div className="relative overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-auto object-cover transform group-hover:scale-105
                                                             transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent
                                                              via-transparent to-black/60 opacity-0 group-hover:opacity-100
                                                              transition-opacity duration-300">
                                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                        <h3 className="text-lg font-bold mb-2">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-sm text-white/90">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                        </Masonry>
                    </AnimatePresence>

                    {/* Message si aucun projet */}
                    {portfolioItems.filter(item =>
                        selectedCategory === 'all' || item.category === selectedCategory
                    ).length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600">
                                Aucun projet dans cette catégorie pour le moment.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;