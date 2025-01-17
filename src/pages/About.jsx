import React from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {ClientPartenerSection, HeroCarousel} from "../components";
import {PresentationSection, Whyus} from "../components";

const About = () => {
    usePageTitle('Qui sommes-nous ?');

    const heroSlides = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            backgroundImage: "/images/ambalavao-1.jpg", // À remplacer par votre image
            buttons: [
                {
                    text: "Lorem ipsum",
                    path: "/",
                    variant: "primary"
                },
                {
                    text: "Lorem ipsum ",
                    path: "/",
                    variant: "secondary"
                }
            ]
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            backgroundImage: "/images/ambalavao-1.jpg", // À remplacer par votre image
            buttons: [
                {
                    text: "Lorem ipsum",
                    path: "/",
                    variant: "primary"
                },
                {
                    text: "Lorem ipsum ",
                    path: "/",
                    variant: "secondary"
                }
            ]
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            backgroundImage: "/images/ambalavao-1.jpg", // À remplacer par votre image
            buttons: [
                {
                    text: "Lorem ipsum",
                    path: "/",
                    variant: "primary"
                },
                {
                    text: "Lorem ipsum ",
                    path: "/",
                    variant: "secondary"
                }
            ]
        },
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

            <PresentationSection />

            <ClientPartenerSection/>

            <Whyus />
        </div>
    );
};

export default About;