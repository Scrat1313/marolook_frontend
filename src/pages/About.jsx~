import React from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {OrganizationCarousel, HeroCarousel, TeamSection} from "../components";
import {PresentationSection, Whyus} from "../components";

const About = () => {
    usePageTitle('Qui sommes-nous ?');

    const heroSlides = [
        {
            title: "Découvrez la beauté naturelle d'Ambalavao",
            description: "Explorez des paysages à couper le souffle, des traditions authentiques et une culture riche.",
            backgroundImage: "https://picsum.photos/1920/1080?random=1",
            buttons: [
                {
                    text: "En savoir plus",
                    path: "/explore",
                    variant: "primary"
                },
                {
                    text: "Réserver maintenant",
                    path: "/booking",
                    variant: "secondary"
                }
            ]
        },
        {
            title: "Vivez des aventures inoubliables",
            description: "Partez à l'aventure et découvrez des expériences uniques au cœur de la nature.",
            backgroundImage: "https://picsum.photos/1920/1080?random=2",
            buttons: [
                {
                    text: "Nos activités",
                    path: "/activities",
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
            title: "Plongez dans la culture locale",
            description: "Rencontrez des artisans locaux, dégustez une cuisine unique et partagez des moments mémorables.",
            backgroundImage: "https://picsum.photos/1920/1080?random=3",
            buttons: [
                {
                    text: "Découvrir",
                    path: "/culture",
                    variant: "primary"
                },
                {
                    text: "Voir la galerie",
                    path: "/gallery",
                    variant: "secondary"
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col overflow-x-hidden">
            <HeroCarousel
                slides={heroSlides}
                autoPlayInterval={1000}
                height="h-[700px]"
                showArrows={true}
                showDots={true}
            />

            <PresentationSection />

            <OrganizationCarousel/>

            <Whyus />

            <TeamSection />
        </div>
    );
};

export default About;