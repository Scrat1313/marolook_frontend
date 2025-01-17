import React from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {HeroCarousel} from "../components";

const Contact = () => {
    usePageTitle('Contact');

    const heroSlides = [
        {
            title: "Bienvenu sur le site officiel de la Commune Urbaine d'Ambalavao",
            description: "Découvrez notre histoire, nos projets, et nos richesses culturelles au cœur de la région Haute Matsiatra",
            backgroundImage: "/images/ambalavao-1.jpg", // À remplacer par votre image
            buttons: [
                {
                    text: "En savoir plus",
                    path: "/commune",
                    variant: "primary"
                },
                {
                    text: "Nos projets",
                    path: "/projets",
                    variant: "secondary"
                }
            ]
        },
        {
            title: "Une ville riche en culture",
            description: "Entre tradition et modernité, Ambalavao vous accueille dans un cadre authentique",
            backgroundImage: "/images/ambalavao-2.jpg", // À remplacer par votre image
            overlayColor: "bg-[#333333]/40",
            buttons: [
                {
                    text: "Découvrir",
                    path: "/tourisme",
                    variant: "primary"
                }
            ]
        },
        {
            title: "Au service des citoyens",
            description: "Retrouvez tous les services de la commune pour faciliter vos démarches administratives",
            backgroundImage: "/images/ambalavao-3.jpg", // À remplacer par votre image
            overlayColor: "bg-[#333333]/35",
            buttons: [
                {
                    text: "Nos services",
                    path: "/services",
                    variant: "primary"
                },
                {
                    text: "Contact",
                    path: "/contact",
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
        </div>
    );
};

export default Contact;