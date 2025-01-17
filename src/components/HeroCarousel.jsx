import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSwipeable} from 'react-swipeable';
import {smoothScrollTo} from '../utils/scrollUtils';
import {ChevronLeft, ChevronRight} from '@mui/icons-material';

const HeroCarousel = ({
                          slides = [],
                          height = "h-[500px] md:h-[600px] lg:h-[700px]", // Hauteurs responsives
                          showArrows = true,
                          showDots = true,
                      }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    // const [touchStart, setTouchStart] = useState(null);

    const handleSlideChange = (direction) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => {
            if (direction === 'next') {
                return (prev + 1) % slides.length;
            }
            return (prev - 1 + slides.length) % slides.length;
        });
        setTimeout(() => setIsTransitioning(false), 500);
    };

    // Configuration du swipe
    const handlers = useSwipeable({
        onSwipedLeft: () => handleSlideChange('next'),
        onSwipedRight: () => handleSlideChange('prev'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
        trackTouch: true,
    });

    const ButtonComponent = ({button}) => {
        const baseClassName = `
            px-6 py-3 rounded-lg font-medium
            transition-all duration-300
            text-center whitespace-nowrap
            backdrop-blur-sm
            hover:scale-105
            active:scale-95
            sm:text-base text-sm
        `;

        const variantStyles = {
            primary: "bg-[#FF4B4B]/90 hover:bg-[#FF4B4B] text-white shadow-lg hover:shadow-xl",
            secondary: "bg-white/90 hover:bg-white text-[#FF4B4B] shadow-lg hover:shadow-xl"
        };

        const className = `${baseClassName} ${variantStyles[button.variant]}`;

        if (button.path.startsWith('#')) {
            return (
                <a
                    href={button.path}
                    onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo(button.path.replace('#', ''));
                    }}
                    className={className}
                >
                    {button.text}
                </a>
            );
        }

        return (
            <Link to={button.path} className={className}>
                {button.text}
            </Link>
        );
    };

    if (!slides.length) return null;

    return (
        <div className={`relative overflow-hidden ${height}`} {...handlers}>
            {/* Slides container */}
            <div className="h-full relative">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`
                            absolute inset-0 w-full h-full 
                            transition-all duration-700 ease-out
                            ${index === currentSlide
                            ? 'opacity-100 translate-x-0 z-10'
                            : index < currentSlide
                                ? 'opacity-0 -translate-x-full z-0'
                                : 'opacity-0 translate-x-full z-0'
                        }
                        `}
                    >
                        {/* Background avec effet parallaxe */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-700"
                            style={{
                                backgroundImage: `url(${slide.backgroundImage})`,
                            }}
                        />

                        {/* Overlay amélioré */}
                        <div className={`
                            absolute inset-0 
                            bg-gradient-to-b 
                            from-black/40 via-black/20 to-black/40
                            ${slide.overlayColor || ''}
                        `}/>

                        {/* Content */}
                        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-center h-full">
                                <div className="text-center space-y-4 md:space-y-6 max-w-3xl px-4">
                                    <h1 className={`
                                        text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold
                                        leading-tight
                                        ${slide.titleColor || 'text-white'}
                                        transform transition-all duration-700
                                        ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                                    `}>
                                        {slide.title}
                                    </h1>

                                    {slide.description && (
                                        <p className={`
                                            text-base sm:text-lg md:text-xl
                                            ${slide.descriptionColor || 'text-white/90'}
                                            transform transition-all duration-700 delay-100
                                            ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                                        `}>
                                            {slide.description}
                                        </p>
                                    )}

                                    {slide.buttons && slide.buttons.length > 0 && (
                                        <div className={`
                                            flex flex-wrap gap-3 md:gap-4 justify-center
                                            transform transition-all duration-700 delay-200
                                            ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                                        `}>
                                            {slide.buttons.map((button, buttonIndex) => (
                                                <ButtonComponent key={buttonIndex} button={button}/>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows - Visible uniquement sur desktop */}
            {showArrows && slides.length > 1 && (
                <div className="hidden md:block">
                    <button
                        onClick={() => handleSlideChange('prev')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full
                            bg-white/80 hover:bg-white text-[#333333] backdrop-blur-sm
                            transition-all duration-300 hover:scale-110"
                        aria-label="Slide précédente"
                    >
                        <ChevronLeft className="w-6 h-6"/>
                    </button>
                    <button
                        onClick={() => handleSlideChange('next')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full
                            bg-white/80 hover:bg-white text-[#333333] backdrop-blur-sm
                            transition-all duration-300 hover:scale-110"
                        aria-label="Slide suivante"
                    >
                        <ChevronRight className="w-6 h-6"/>
                    </button>
                </div>
            )}

            {/* Dots Navigation - Style amélioré */}
            {showDots && slides.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => !isTransitioning && setCurrentSlide(index)}
                            className={`
                                h-2 rounded-full transition-all duration-300
                                ${index === currentSlide
                                ? 'w-8 bg-[#FF4B4B]'
                                : 'w-2 bg-white hover:bg-[#FF4B4B]/50'
                            }
                            `}
                            aria-label={`Aller à la slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Indicateur de swipe sur mobile */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 md:hidden">
                <div className="text-white/70 text-sm flex items-center gap-2">
                    <span>←</span>
                    <span>Swipez pour naviguer</span>
                    <span>→</span>
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;