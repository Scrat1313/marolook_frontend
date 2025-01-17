import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {
    LocationOn,
    Phone,
    Email,
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    Add,
    Remove
} from '@mui/icons-material';
import logo from "../assets/images/logos/logo.png";

const SocialLink = ({Icon, href}) => (
    <a
        href={href}
        className="group relative p-2"
        aria-label={`Lien vers ${href}`}
    >
        <div
            className="absolute inset-0 bg-[#FF4B4B] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"/>
        <Icon className="relative z-10 text-[#666666] group-hover:text-white transition-colors duration-300"
              sx={{fontSize: 20}}/>
    </a>
);

const NavigationLink = ({item}) => {
    const pathMap = {
        'Accueil': '/',
        'Qui sommes-nous ?': '/a-propos',
        'Nos services': '/nos-services',
        'Portfolio': '/portfolio',
        'Contact': '/contact'
    };

    const path = pathMap[item];
    const location = useLocation();
    const active = location.pathname === path ||
        (path !== '/' && location.pathname.startsWith(path));

    return (
        <Link
            to={path}
            className={`group relative px-3 py-1.5 rounded-md transition-colors duration-300
                ${active ? 'text-[#FF4B4B]' : 'text-[#666666] hover:text-[#FF4B4B]'}`}
        >
            <div className={`absolute inset-0 bg-[#FF4B4B]/10 rounded-md 
                ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} 
                transition-opacity duration-300`}
            />
            <span className="relative text-sm font-medium">{item}</span>
        </Link>
    );
};

const MobileAccordion = ({title, children, isOpen, onToggle}) => (
    <div className="border-b border-gray-200 last:border-none">
        <button
            onClick={onToggle}
            className="flex items-center justify-between w-full py-4 text-[#333333]"
        >
            <span className="font-medium">{title}</span>
            {isOpen ? <Remove/> : <Add/>}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
            {children}
        </div>
    </div>
);

const ContactInfo = ({Icon, text}) => (
    <div className="group flex items-start space-x-3 rounded-lg py-2 transition-colors duration-300">
        <Icon className="text-[#FF4B4B] mt-1 group-hover:scale-110 transition-transform duration-300"
              sx={{fontSize: 20}}/>
        <span className="text-sm text-[#666666] group-hover:text-[#333333] transition-colors duration-300">
            {text}
        </span>
    </div>
);

const Schedule = ({day, hours}) => (
    <div className="group flex items-center justify-between p-2 rounded-lg transition-colors duration-300">
        <span className="text-sm font-medium text-[#333333]">{day}</span>
        <span className="text-sm text-[#666666]">{hours}</span>
    </div>
);

const SOCIAL_LINKS = [
    {Icon: Facebook, href: '#'},
    {Icon: Twitter, href: '#'},
    {Icon: Instagram, href: '#'},
    {Icon: LinkedIn, href: '#'}
];

const NAV_ITEMS = ['Accueil', 'Qui sommes-nous ?', 'Nos services', 'Portfolio', 'Contact'];

const SCHEDULE_ITEMS = [
    {day: 'Lundi - Vendredi', hours: '8h30 - 17h00'},
    {day: 'Samedi', hours: '9h00 - 12h00'},
    {day: 'Dimanche', hours: 'Fermé'}
];

const CONTACT_ITEMS = [
    {Icon: LocationOn, text: '123 Avenue de la République, 75001 Paris, France'},
    {Icon: Phone, text: '+33 1 23 45 67 89'},
    {Icon: Email, text: 'contact@mairie.fr'}
];

const LEGAL_LINKS = ['Mentions légales', 'Politique de confidentialité', 'Plan du site'];

const Footer = () => {
    const [openSection, setOpenSection] = useState('');
    const currentYear = new Date().getFullYear();

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? '' : section);
    };

    return (
        <footer className="bg-gradient-to-t from-[#F8F8F8] to-white">
            {/* Desktop version */}
            <div className="hidden lg:block max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-12 gap-8">
                    {/* Logo et description */}
                    <div className="col-span-4 pr-8">
                        <Link to="/" className="inline-block mb-6 group">
                            <img
                                src={logo}
                                alt="Marolook Logo"
                                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                        <p className="text-[#666666] leading-relaxed mb-8">
                            Marolook, rejoignez une communauté dynamique et engagée.
                        </p>
                        <div className="flex gap-2">
                            {SOCIAL_LINKS.map((social, index) => (
                                <SocialLink key={index} {...social} />
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-3">
                        <h3 className="text-lg font-semibold text-[#333333] mb-6">Navigation</h3>
                        <div className="flex flex-col gap-2">
                            {NAV_ITEMS.map(item => (
                                <NavigationLink key={item} item={item}/>
                            ))}
                        </div>
                    </div>

                    {/* Horaires */}
                    <div className="col-span-2">
                        <h3 className="text-lg font-semibold text-[#333333] mb-6">Horaires</h3>
                        <div className="space-y-2">
                            {SCHEDULE_ITEMS.map(item => (
                                <Schedule key={item.day} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="col-span-3">
                        <h3 className="text-lg font-semibold text-[#333333] mb-6">Contact</h3>
                        <div className="space-y-4">
                            {CONTACT_ITEMS.map((item, index) => (
                                <ContactInfo key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile version */}
            <div className="lg:hidden px-4 py-8">
                {/* Logo et description */}
                <div className="mb-8">
                    <Link to="/" className="inline-block mb-4">
                        <img
                            src={logo}
                            alt="Marolook Logo"
                            className="w-12 h-12 object-contain"
                        />
                    </Link>
                    <p className="text-[#666666] leading-relaxed mb-6">
                        Marolook, rejoignez une communauté dynamique et engagée.
                    </p>
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map((social, index) => (
                            <SocialLink key={index} {...social} />
                        ))}
                    </div>
                </div>

                {/* Sections accordéon */}
                <div className="space-y-2">
                    <MobileAccordion
                        title="Navigation"
                        isOpen={openSection === 'navigation'}
                        onToggle={() => toggleSection('navigation')}
                    >
                        <div className="flex flex-col gap-2 pl-2">
                            {NAV_ITEMS.map(item => (
                                <NavigationLink key={item} item={item}/>
                            ))}
                        </div>
                    </MobileAccordion>

                    <MobileAccordion
                        title="Horaires"
                        isOpen={openSection === 'horaires'}
                        onToggle={() => toggleSection('horaires')}
                    >
                        <div className="space-y-2 pl-2">
                            {SCHEDULE_ITEMS.map(item => (
                                <Schedule key={item.day} {...item} />
                            ))}
                        </div>
                    </MobileAccordion>

                    <MobileAccordion
                        title="Contact"
                        isOpen={openSection === 'contact'}
                        onToggle={() => toggleSection('contact')}
                    >
                        <div className="space-y-4 pl-2">
                            {CONTACT_ITEMS.map((item, index) => (
                                <ContactInfo key={index} {...item} />
                            ))}
                        </div>
                    </MobileAccordion>
                </div>
            </div>

            {/* Copyright et liens légaux */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-[#666666] text-center lg:text-left">
                            © {currentYear} Marolook - Tous droits réservés.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {LEGAL_LINKS.map(item => (
                                <Link
                                    key={item}
                                    to="#"
                                    className="text-sm text-[#666666] hover:text-[#FF4B4B]
                                             transition-colors duration-300"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;