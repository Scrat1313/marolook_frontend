import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSwipeable} from 'react-swipeable';
import {smoothScrollTo} from '../utils/scrollUtils';
import {ChevronLeft, ChevronRight} from '@mui/icons-material';

const HeroCarousel = ({
                          slides = [],
                          height = "h-[500px] md:h-[600px] lg:h-[700px]",
                          showArrows = true,
                          showDots = true,
                      }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

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

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSlideChange('next'),
        onSwipedRight: () => handleSlideChange('prev'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
        trackTouch: true,
    });

    const ButtonComponent = ({button}) => {
        const baseStyles = `
            px-6 py-3 rounded-xl font-medium transition-all duration-300 text-center whitespace-nowrap 
            backdrop-blur-md hover:scale-105 active:scale-95 sm:text-base text-sm border 
            border-transparent shadow-lg hover:shadow-xl
        `;

        const buttonStyles = {
            primary: `${baseStyles} bg-[#FF4B4B]/90 hover:bg-[#FF4B4B] text-white border-white/20`,
            secondary: `${baseStyles} bg-black/30 hover:bg-black/40 text-white border-white/30 hover:border-white/50`
        };

        if (button.path.startsWith('#')) {
            return (
                <a
                    href={button.path}
                    onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo(button.path.replace('#', ''));
                    }}
                    className={buttonStyles[button.variant]}
                >
                    {button.text}
                </a>
            );
        }

        return (
            <Link to={button.path} className={buttonStyles[button.variant]}>
                {button.text}
            </Link>
        );
    };

    if (!slides.length) return null;

    return (
        <div className={`relative overflow-hidden ${height}`} {...handlers}>
            <div className="h-full relative">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`
                            absolute inset-0 w-full h-full transition-all duration-700 ease-out
                            ${index === currentSlide
                            ? 'opacity-100 translate-x-0 z-10'
                            : index < currentSlide
                                ? 'opacity-0 -translate-x-full z-0'
                                : 'opacity-0 translate-x-full z-0'
                        }
                        `}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105
                                     transition-transform duration-1000"
                            style={{
                                backgroundImage: `url(${slide.backgroundImage})`,
                            }}
                        />

                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"/>
                            <div className="absolute inset-0"/>
                            {slide.overlayColor && (
                                <div className={`absolute inset-0 ${slide.overlayColor} opacity-50`}/>
                            )}
                        </div>

                        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                            <div className="flex items-center justify-center h-full mt-8">
                                <div className="text-center space-y-6 md:space-y-8 max-w-3xl px-4
                                              p-6 md:p-8">
                                    <h1 className={`
                                        text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight
                                        ${slide.titleColor || 'text-white'}
                                        transform transition-all duration-700 drop-shadow-lg
                                        ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                                    `}>
                                        {slide.title}
                                    </h1>

                                    {slide.description && (
                                        <p className={`
                                            text-base sm:text-lg md:text-xl
                                            ${slide.descriptionColor || 'text-white/90'}
                                            transform transition-all duration-700 delay-100 drop-shadow
                                            ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                                        `}>
                                            {slide.description}
                                        </p>
                                    )}

                                    {slide.buttons && slide.buttons.length > 0 && (
                                        <div className={`
                                            flex flex-wrap gap-4 justify-center
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

            {showArrows && slides.length > 1 && (
                <div className="hidden md:block">
                    <button
                        onClick={() => handleSlideChange('prev')}
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3
                                 bg-black/30 hover:bg-black/50 text-white backdrop-blur-md
                                 rounded-full border border-white/20 hover:border-white/40
                                 transition-all duration-300 hover:scale-110 group"
                        aria-label="Slide précédente"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"/>
                    </button>
                    <button
                        onClick={() => handleSlideChange('next')}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3
                                 bg-black/30 hover:bg-black/50 text-white backdrop-blur-md
                                 rounded-full border border-white/20 hover:border-white/40
                                 transition-all duration-300 hover:scale-110 group"
                        aria-label="Slide suivante"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"/>
                    </button>
                </div>
            )}

            {showDots && slides.length > 1 && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
                              bg-black/30 backdrop-blur-md rounded-full px-4 py-2
                              border border-white/20">
                    <div className="flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => !isTransitioning && setCurrentSlide(index)}
                                className={`
                                    h-2 rounded-full transition-all duration-300
                                    ${index === currentSlide
                                    ? 'w-8 bg-[#FF4B4B]'
                                    : 'w-2 bg-white/50 hover:bg-white'
                                }
                                `}
                                aria-label={`Aller à la slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}

            {slides.length > 1 && (
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 md:hidden">
                    <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-2
                      text-white/90 text-sm flex items-center gap-2
                      border border-white/20">
                        <span>←</span>
                        <span className="text-center">Swipez</span>
                        <span>→</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeroCarousel;