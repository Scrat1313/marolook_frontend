import React, {useState} from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {HeroCarousel} from "../components";
import Masonry from 'react-masonry-css';
import {motion, AnimatePresence} from 'framer-motion';
import HeroBg from "../assets/images/background/herobg.jpg";

// Fonction pour importer les images avec des tailles différentes
const importImages = () => {
    const images = [];
    const sizes = ['small', 'medium', 'medium-tall', 'large'];
    const aspectRatios = ['4/5', '3/4', '2/3', '9/16'];

    // Images .jpg avec tailles variables
    for (let i = 1; i <= 15; i++) {
        try {
            images.push({
                id: i,
                image: require(`../assets/images/portfolio/${i}.jpg`),
                size: sizes[Math.floor(Math.random() * sizes.length)],
                aspectRatio: aspectRatios[Math.floor(Math.random() * aspectRatios.length)]
            });
        } catch (error) {
            console.warn(`Image jpg ${i} non trouvée`);
        }
    }

    // Images .jpeg avec tailles variables
    for (let i = 16; i <= 33; i++) {
        try {
            images.push({
                id: i,
                image: require(`../assets/images/portfolio/${i}.jpeg`),
                size: sizes[Math.floor(Math.random() * sizes.length)],
                aspectRatio: aspectRatios[Math.floor(Math.random() * aspectRatios.length)]
            });
        } catch (error) {
            console.warn(`Image jpeg ${i} non trouvée`);
        }
    }

    return images.sort(() => Math.random() - 0.5);
};

const portfolioImages = importImages();

const Portfolio = () => {
    usePageTitle('Portfolio');
    const [selectedImage, setSelectedImage] = useState(null);

    const heroSlides = [
        {
            title: "Notre Portfolio",
            description: "Découvrez nos réalisations à travers différents domaines d'expertise",
            backgroundImage: HeroBg,
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

    // Configuration exacte pour 4 colonnes
    const breakpointColumns = {
        default: 4,
        1536: 4,
        1280: 4,
        1024: 4,
        768: 2,
        640: 2,
        480: 1
    };

    // Composant Modal amélioré
    const ImageModal = ({image, onClose}) => (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
            <motion.div
                initial={{scale: 0.95, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.95, opacity: 0}}
                transition={{type: "spring", damping: 25, stiffness: 300}}
                className="relative max-w-[90vw] max-h-[90vh] rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-contain rounded-lg shadow-2xl"
                />
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2
                             hover:bg-black/70 transition-colors duration-200"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </motion.div>
        </motion.div>
    );

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <HeroCarousel
                slides={heroSlides}
                height="h-[500px]"
                showArrows={false}
                showDots={false}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="gallery">
                <div className="text-center mb-16">
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
                    {/* Nouvelle description améliorée */}
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
                        Découvrez notre collection diversifiée de photographies : des mariages élégants
                        aux événements corporate, en passant par des portraits saisissants et des shootings
                        produits professionnels. Chaque image raconte une histoire unique.
                    </p>

                    {/* Catégories stylisées avec la palette de couleurs */}
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                {icon: "💑", text: "Mariages"},
                                {icon: "🏢", text: "Événements Corporate"},
                                {icon: "👤", text: "Portraits"},
                                {icon: "📸", text: "Shootings Produits"},
                                {icon: "✨", text: "Événements Spéciaux"}
                            ].map((category, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center gap-2 px-6 py-3 rounded-full
                         bg-white border border-gray-200
                         hover:border-[#FF4B4B] hover:bg-[#FF4B4B]/5
                         transition-all duration-300 cursor-pointer
                         shadow-sm hover:shadow-md"
                                >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                </span>
                                    <span className="text-sm font-medium text-gray-700
                               group-hover:text-[#FF4B4B] transition-colors duration-300">
                    {category.text}
                </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ligne de séparation décorative avec dégradé */}
                    <div className="flex justify-center items-center gap-3 mt-12 mb-8">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#FF4B4B]/30"/>
                        <div className="w-2 h-2 rounded-full bg-[#FF4B4B]/20"/>
                        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#FF4B4B]/30"/>
                    </div>
                </div>

                {/* Style Masonry Pinterest optimisé pour 4 colonnes */}
                <style>
                    {`
                        .masonry-grid {
                            display: flex;
                            margin-left: -16px;
                            width: auto;
                        }
                        .masonry-grid_column {
                            padding-left: 16px;
                            background-clip: padding-box;
                            width: calc(25% - 12px) !important;
                        }
                        @media (max-width: 768px) {
                            .masonry-grid_column {
                                width: calc(50% - 8px) !important;
                            }
                        }
                        @media (max-width: 480px) {
                            .masonry-grid_column {
                                width: 100% !important;
                            }
                        }
                        .image-container {
                            margin-bottom: 16px;
                            break-inside: avoid;
                            position: relative;
                            border-radius: 16px;
                            overflow: hidden;
                            background-color: #EAEAEA;
                        }
                        .image-small { height: 300px; }
                        .image-medium { height: 360px; }
                        .image-medium-tall { height: 420px; }
                        .image-large { height: 480px; }
                        .pinterest-image {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        }
                        .image-container:hover .pinterest-image {
                            transform: scale(1.03);
                        }
                        .image-overlay {
                            position: absolute;
                            inset: 0;
                            background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3));
                            opacity: 0;
                            transition: opacity 0.3s ease;
                        }
                        .image-container:hover .image-overlay {
                            opacity: 1;
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
                        {portfolioImages.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: 20}}
                                transition={{duration: 0.3}}
                            >
                                <div
                                    className={`image-container shadow-sm hover:shadow-lg 
                                              transition-all duration-300 cursor-zoom-in`}
                                    onClick={() => setSelectedImage(item.image)}
                                >
                                    <div className={`relative image-${item.size}`}>
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="pinterest-image"
                                            loading="lazy"
                                            style={{aspectRatio: item.aspectRatio}}
                                        />
                                        <div className="image-overlay"/>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Masonry>
                </AnimatePresence>

                {/* Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <ImageModal
                            image={selectedImage}
                            onClose={() => setSelectedImage(null)}
                        />
                    )}
                </AnimatePresence>

                {/* Message si aucune image */}
                {portfolioImages.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600">
                            Aucune image disponible dans le portfolio pour le moment.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;