import React from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {HeroCarousel, ServiceSection, TestimonySection} from "../components";
import HeroBg from '../assets/images/background/homebg.png'

const Home = () => {
    usePageTitle('Accueil');

    const heroSlides = [
        {
            title: "Une passion commune devenue réalité",
            description: "Née d’une passion commune qui a animé quelques condisciples, Marolook a vu le jour en l’année 2018.",
            backgroundImage: HeroBg,
            buttons: [
                {
                    text: "En savoir plus",
                    path: "/about",
                    variant: "primary"
                },
                {
                    text: "Nous rejoindre",
                    path: "/join",
                    variant: "secondary"
                }
            ]
        },
        {
            title: "Un chemin parsemé d’épreuves",
            description: "Non sans difficulté, chaque étape a renforcé notre passion, compétences et expertise.",
            backgroundImage: HeroBg,
            buttons: [
                {
                    text: "Notre parcours",
                    path: "/journey",
                    variant: "primary"
                },
                {
                    text: "Nous contacter",
                    path: "/contact",
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
                    path: "/services",
                    variant: "primary"
                },
                {
                    text: "Voir nos réalisations",
                    path: "/portfolio",
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
                height="h-[770px]"
                showArrows={true}
                showDots={true}
            />

            <ServiceSection/>

            <TestimonySection/>
        </div>
    );
};

export default Home;