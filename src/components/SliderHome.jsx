import { useState, useEffect, useRef, useCallback } from 'react';
import Modal from './Modal';

const SliderHome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    // Générer les chemins des images
    const images = Array.from({ length: 14 }, (_, i) => ({
        src: `/images/portfolio-home/${i + 1}.jpg`,
        index: i + 1
    }));

    const totalImages = images.length;
    // Créer un tableau avec des doublons pour l'effet infini (optimisé)
    const extendedImages = [
        images[images.length - 1], // Clone du dernier élément au début
        ...images,
        images[0] // Clone du premier élément à la fin
    ];

    // Fonction pour gérer la transition infinie de manière fluide
    const handleTransitionEnd = useCallback(() => {
        if (currentIndex >= totalImages + 1) {
            setIsTransitioning(false);
            setCurrentIndex(1);
        } else if (currentIndex <= 0) {
            setIsTransitioning(false);
            setCurrentIndex(totalImages);
        }
    }, [currentIndex, totalImages]);

    // Auto-scroll optimisé
    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prev => {
                    setIsTransitioning(true);
                    return prev + 1;
                });
            }, 4000); // Augmenté à 4 secondes pour une meilleure expérience
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isPlaying]);

    // Gestion fluide des transitions infinies
    useEffect(() => {
        if (!isTransitioning) {
            // Utiliser requestAnimationFrame pour une transition plus fluide
            requestAnimationFrame(() => {
                setIsTransitioning(true);
            });
        }
    }, [isTransitioning]);

    // Gestionnaire d'événement pour les transitions
    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('transitionend', handleTransitionEnd);
            return () => slider.removeEventListener('transitionend', handleTransitionEnd);
        }
    }, [handleTransitionEnd]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
        setIsPlaying(false);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        setIsPlaying(true);
    };

    const goToSlide = (index) => {
        setIsTransitioning(true);
        setCurrentIndex(index + 1); // +1 car on a ajouté un clone au début
    };

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
    };

    // Fonction pour obtenir l'index réel affiché
    const getDisplayIndex = () => {
        if (currentIndex === 0) return totalImages - 1;
        if (currentIndex === totalImages + 1) return 0;
        return currentIndex - 1;
    };

    return (
        <section className="relative py-24 transition-colors duration-300
                          dark:bg-[#121212] bg-white
                          dark:text-[#F5F5F5] text-gray-900 overflow-hidden">
            {/* Motif de fond avec adaptation pour le mode sombre */}
            <div className="absolute inset-0 dark:opacity-[0.03] opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Éléments décoratifs avec opacité ajustée pour le mode sombre */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-1/3 h-1/3
                              bg-gradient-to-br from-[#FF4B4B]/20 to-purple-500/20
                              dark:from-[#FF4B4B]/10 dark:to-purple-500/10
                              rounded-full blur-3xl transform translate-x-1/2 opacity-30"/>
                <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3
                              bg-gradient-to-tr from-blue-500/20 to-[#E43D3D]/20
                              dark:from-blue-500/10 dark:to-[#E43D3D]/10
                              rounded-full blur-3xl transform -translate-x-1/2 opacity-30"/>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* En-tête moderne */}
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <span className="inline-block px-4 py-1 mb-4
                                       text-[#FF4B4B] bg-[#FF4B4B]/10
                                       dark:bg-[#FF4B4B]/5
                                       rounded-full text-sm font-medium
                                       border border-[#FF4B4B]/20">
                            Portfolio
                        </span>
                    </div>
                    <p className="text-lg dark:text-[#BBBBBB] text-gray-600 max-w-2xl mx-auto">
                        Découvrez notre portfolio et laissez-vous inspirer par nos créations
                    </p>
                </div>

                {/* Container du slider avec design moderne */}
                <div className="group relative">
                    {/* Effet de fond au hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B4B]/20 to-purple-500/20
                                  dark:from-[#FF4B4B]/10 dark:to-purple-500/10
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                  rounded-2xl blur-xl"/>

                    {/* Slider principal */}
                    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-2xl
                                  dark:bg-[#1E1E1E] bg-white
                                  shadow-lg hover:shadow-xl
                                  transition-all duration-300
                                  dark:border-[#2D2D2D] border-gray-100
                                  backdrop-blur-sm">

                        {/* Container du slider avec transitions optimisées */}
                        <div
                            ref={sliderRef}
                            className="flex h-full"
                            style={{
                                transform: `translateX(-${(currentIndex * 100) / extendedImages.length}%)`,
                                width: `${extendedImages.length * 100}%`,
                                transition: isTransitioning 
                                    ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
                                    : 'none',
                                willChange: 'transform' // Optimisation GPU
                            }}
                        >
                            {extendedImages.map((image, index) => (
                                <div
                                    key={`${image.index}-${index}`}
                                    className="relative flex-shrink-0 cursor-pointer group/image"
                                    style={{ 
                                        width: `${100 / extendedImages.length}%`,
                                        willChange: 'transform' // Optimisation GPU pour les images
                                    }}
                                    onClick={() => handleImageClick(image)}
                                >
                                    <img
                                        src={image.src}
                                        alt={`Portfolio ${image.index}`}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/image:scale-105"
                                        loading="lazy" // Optimisation du chargement
                                        style={{ willChange: 'transform' }}
                                    />

                                    {/* Overlay au hover avec style moderne */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 
                                                  transition-all duration-500 ease-out flex items-center justify-center">
                                        <div className="px-6 py-3 rounded-xl font-medium
                                                      bg-gradient-to-r from-[#FF4B4B] to-[#E43D3D]
                                                      text-white shadow-lg transform scale-95 
                                                      group-hover/image:scale-100 transition-all duration-500 ease-out">
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                Voir l'image
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contrôles de navigation avec design moderne */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 
                                     w-12 h-12 rounded-xl flex items-center justify-center 
                                     transition-all duration-300 ease-out hover:scale-110
                                     dark:bg-[#1E1E1E] bg-white
                                     dark:text-[#F5F5F5] text-gray-900
                                     shadow-lg hover:shadow-xl
                                     dark:border-[#2D2D2D] border-gray-100
                                     backdrop-blur-sm opacity-80 hover:opacity-100
                                     active:scale-95"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="15,18 9,12 15,6"></polyline>
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 
                                     w-12 h-12 rounded-xl flex items-center justify-center 
                                     transition-all duration-300 ease-out hover:scale-110
                                     dark:bg-[#1E1E1E] bg-white
                                     dark:text-[#F5F5F5] text-gray-900
                                     shadow-lg hover:shadow-xl
                                     dark:border-[#2D2D2D] border-gray-100
                                     backdrop-blur-sm opacity-80 hover:opacity-100
                                     active:scale-95"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9,18 15,12 9,6"></polyline>
                            </svg>
                        </button>

                        {/* Bouton Play/Pause avec design moderne */}
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="absolute bottom-4 right-4 w-12 h-12 rounded-xl 
                                     flex items-center justify-center transition-all duration-300 ease-out hover:scale-110
                                     bg-gradient-to-r from-[#FF4B4B] to-[#E43D3D]
                                     text-white shadow-lg hover:shadow-xl active:scale-95"
                        >
                            {isPlaying ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="6" y="4" width="4" height="16"></rect>
                                    <rect x="14" y="4" width="4" height="16"></rect>
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5,3 19,12 5,21"></polygon>
                                </svg>
                            )}
                        </button>

                        {/* Indicateurs de points avec design moderne */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`transition-all duration-300 ease-out hover:scale-125 ${
                                        getDisplayIndex() === index
                                            ? 'w-8 h-3 bg-gradient-to-r from-[#FF4B4B] to-[#E43D3D] rounded-full'
                                            : 'w-3 h-3 dark:bg-[#2D2D2D] bg-gray-300 rounded-full hover:bg-[#FF4B4B]/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                imageSrc={selectedImage?.src}
                imageIndex={selectedImage?.index}
            />
        </section>
    );
};

export default SliderHome;