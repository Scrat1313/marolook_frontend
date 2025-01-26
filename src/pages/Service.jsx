import React from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {HeroCarousel, ServiceSection} from "../components";
import HeroBg from "../assets/images/background/herobg.jpg";

const Service = () => {
    usePageTitle('Nos service');

    const heroSlides = [
        {
            title: "Capturez vos moments inoubliables",
            description: "De la photographie à la vidéographie, nous immortalisons vos souvenirs les plus précieux.",
            backgroundImage: HeroBg,
            buttons: [
                {
                    text: "Découvrir nos services",
                    path: "/services",
                    variant: "primary"
                },
                {
                    text: "Contactez-nous",
                    path: "/contact",
                    variant: "secondary"
                }
            ]
        },
        {
            title: "Sublimez votre image",
            description: "Grâce à notre expertise en design graphique et animation 3D, donnez vie à vos idées.",
            backgroundImage: HeroBg,
            buttons: [
                {
                    text: "Voir nos réalisations",
                    path: "/portfolio",
                    variant: "primary"
                },
                {
                    text: "Demander un devis",
                    path: "/quote",
                    variant: "secondary"
                }
            ]
        },
        {
            title: "Développez votre présence en ligne",
            description: "Avec notre community management et développement web, touchez un public international.",
            backgroundImage: HeroBg,
            buttons: [
                {
                    text: "En savoir plus",
                    path: "/services/digital",
                    variant: "primary"
                },
                {
                    text: "Commencez maintenant",
                    path: "/start",
                    variant: "secondary"
                }
            ]
        },
        {
            title: "Organisez des événements mémorables",
            description: "Faites de vos occasions spéciales des souvenirs inoubliables grâce à notre expertise en organisation événementielle et décoration.",
            backgroundImage: HeroBg,
            buttons: [
                {
                    text: "Planifiez votre événement",
                    path: "/events",
                    variant: "primary"
                },
                {
                    text: "Voir nos services",
                    path: "/services/events",
                    variant: "secondary"
                }
            ]
        }
    ];


    return (
        <div className="flex flex-col">
            <HeroCarousel
                slides={heroSlides}
                autoPlayInterval={1000}
                height="h-[700px]"
                showArrows={true}
                showDots={true}
            />

            <ServiceSection />
        </div>
    );
};

export default Service;