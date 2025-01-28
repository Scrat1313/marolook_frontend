import React from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {HeroCarousel, ServiceSection, TestimonySection} from "../components";
import HeroBg from "../assets/images/background/herobg.jpg";
import routes from '../routes/routes';

const Home = () => {
    usePageTitle('Accueil');

    const heroSlides = [
        {
            backgroundImage: HeroBg,
            buttons: [
                {
                    text: "En savoir plus",
                    path: routes.service,
                    variant: "primary"
                },
                {
                    text: "Nous rejoindre",
                    path: routes.contact,
                    variant: "secondary"
                }
            ]
        },
        {
            backgroundImage: HeroBg,
            buttons: [
                {
                    text: "Notre parcours",
                    path: routes.about,
                    variant: "primary"
                },
                {
                    text: "Nous contacter",
                    path: routes.contact,
                    variant: "secondary"
                }
            ]
        },
        {
            title: "Répondre aux besoins de notre clientèle",
            description: "Nous nous efforçons de répondre au mieux aux attentes de notre clientèle avec engagement et dévouement.",
            backgroundImage: HeroBg,
            buttons: [
                {
                    text: "Nos services",
                    path: routes.service,
                    variant: "primary"
                },
                {
                    text: "Voir nos réalisations",
                    path: routes.portfolio,
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
                height="h-[550px]"
                showArrows={true}
                showDots={true}
            />

            <ServiceSection/>

            <TestimonySection/>
        </div>
    );
};

export default Home;