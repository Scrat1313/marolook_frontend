import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {
    LocationOn,
    Phone,
    Email,
    Facebook,
    YouTube,
    LinkedIn,
    Add,
    Remove
} from '@mui/icons-material';
import logo from "../assets/images/logos/logo.png";

// Hook personnalisé pour le défilement
const useScrollToTop = () => {
    const {pathname} = useLocation();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname]);
};

const SocialLink = ({Icon, href}) => (
    <a
        href={href}
        className="group relative p-3 bg-white rounded-xl shadow-sm hover:shadow-md
                   transition-all duration-300 hover:-translate-y-1"
        aria-label={`Lien vers ${href}`}
    >
        <Icon
            className="text-gray-600 group-hover:text-[#FF4B4B] transition-colors duration-300"
            sx={{fontSize: 22}}
        />
    </a>
);

const NavigationLink = ({item, onClick}) => {
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
            onClick={onClick}
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
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <button
            onClick={onToggle}
            className="flex items-center justify-between w-full p-4 text-left"
        >
            <span className="text-lg font-bold text-gray-800">{title}</span>
            <div className={`p-2 rounded-lg bg-gray-50 transition-colors duration-300
                          ${isOpen ? 'bg-[#FF4B4B]/10' : ''}`}>
                {isOpen ?
                    <Remove className="text-[#FF4B4B]"/> :
                    <Add className="text-gray-600"/>
                }
            </div>
        </button>
        <div className={`transition-all duration-300 ease-in-out
                      ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-4 bg-gray-50">
                {children}
            </div>
        </div>
    </div>
);

const Schedule = ({day, hours}) => (
    <div className="group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
        <p className="text-sm font-medium text-gray-800">{day}</p>
        <p className="text-sm text-gray-600">{hours}</p>
    </div>
);

const ContactInfo = ({Icon, text}) => (
    <div className="group flex items-start gap-4 hover:bg-gray-50 p-3 rounded-xl transition-all duration-300">
        <div className="p-2 bg-[#FF4B4B]/10 rounded-lg group-hover:bg-[#FF4B4B]/20 transition-colors duration-300">
            <Icon className="text-[#FF4B4B]" sx={{fontSize: 20}}/>
        </div>
        <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
            {text}
        </span>
    </div>
);

const SOCIAL_LINKS = [
    {Icon: Facebook, href: 'https://www.facebook.com/profile.php/?id=61555942448287'},
    {Icon: YouTube, href: 'https://www.youtube.com/@marolook9389'},
    {Icon: LinkedIn, href: 'https://mg.linkedin.com/company/marolook'}
];

const NAV_ITEMS = ['Accueil', 'Qui sommes-nous ?', 'Nos services', 'Portfolio', 'Contact'];

const SCHEDULE_ITEMS = [
    {day: 'Lundi - Vendredi', hours: '8h30 - 17h00'},
    {day: 'Samedi', hours: '9h00 - 12h00'},
    {day: 'Dimanche', hours: 'Fermé'}
];

const CONTACT_ITEMS = [
    {Icon: LocationOn, text: 'Lot 081A/3606 Antarandolo'},
    {Icon: Phone, text: '+261 34 36 946 93'},
    {Icon: Email, text: 'contact@marolook.com'}
];

const LEGAL_LINKS = ['Mentions légales', 'Politique de confidentialité', 'Plan du site'];

const Footer = () => {
    useScrollToTop();
    const [openSection, setOpenSection] = useState('');
    const currentYear = new Date().getFullYear();

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? '' : section);
    };

    const handleNavClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setOpenSection('');
    };

    return (
        <footer className="relative bg-gradient-to-b from-white to-gray-50">
            {/* Effet de fond décoratif */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #FF4B4B 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                    opacity: '0.05'
                }}/>
            </div>

            {/* Desktop version */}
            <div className="hidden lg:block relative max-w-7xl mx-auto px-8 py-20">
                <div className="grid grid-cols-12 gap-12">
                    {/* Logo et description */}
                    <div className="col-span-4 pr-8">
                        <Link
                            to="/"
                            onClick={handleNavClick}
                            className="inline-block mb-8 group"
                        >
                            <img
                                src={logo}
                                alt="Marolook Logo"
                                className="w-12 h-12 object-contain transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </Link>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Marolook, rejoignez une communauté dynamique et engagée.
                        </p>
                        <div className="flex gap-3">
                            {SOCIAL_LINKS.map((social, index) => (
                                <SocialLink key={index} {...social} />
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-3">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Navigation</h3>
                        <div className="flex flex-col gap-3">
                            {NAV_ITEMS.map(item => (
                                <NavigationLink
                                    key={item}
                                    item={item}
                                    onClick={handleNavClick}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Horaires */}
                    <div className="col-span-2">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Horaires</h3>
                        <div className="space-y-3 bg-white rounded-2xl p-4 shadow-sm">
                            {SCHEDULE_ITEMS.map(item => (
                                <Schedule key={item.day} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="col-span-3">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Contact</h3>
                        <div className="space-y-5 bg-white rounded-2xl p-6 shadow-sm text-xs">
                            {CONTACT_ITEMS.map((item, index) => (
                                <ContactInfo key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile version */}
            <div className="lg:hidden relative px-4 py-12">
                <div className="text-center mb-12">
                    <Link
                        to="/"
                        onClick={handleNavClick}
                        className="inline-block mb-6"
                    >
                        <img
                            src={logo}
                            alt="Marolook Logo"
                            className="w-16 h-16 object-contain mx-auto"
                        />
                    </Link>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-sm mx-auto">
                        Marolook, rejoignez une communauté dynamique et engagée.
                    </p>
                    <div className="flex justify-center gap-4">
                        {SOCIAL_LINKS.map((social, index) => (
                            <SocialLink key={index} {...social} />
                        ))}
                    </div>
                </div>

                {/* Sections accordéon */}
                <div className="space-y-4 max-w-md mx-auto">
                    <MobileAccordion
                        title="Navigation"
                        isOpen={openSection === 'navigation'}
                        onToggle={() => toggleSection('navigation')}
                    >
                        <div className="flex flex-col gap-3">
                            {NAV_ITEMS.map(item => (
                                <NavigationLink
                                    key={item}
                                    item={item}
                                    onClick={handleNavClick}
                                />
                            ))}
                        </div>
                    </MobileAccordion>

                    <MobileAccordion
                        title="Horaires"
                        isOpen={openSection === 'horaires'}
                        onToggle={() => toggleSection('horaires')}
                    >
                        <div className="space-y-3">
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
                        <div className="space-y-4">
                            {CONTACT_ITEMS.map((item, index) => (
                                <ContactInfo key={index} {...item} />
                            ))}
                        </div>
                    </MobileAccordion>
                </div>
            </div>

            {/* Copyright et liens légaux */}
            <div className="relative border-t border-gray-200 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <p className="text-gray-600 text-center lg:text-left">
                            © {currentYear} Marolook - Tous droits réservés.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            {LEGAL_LINKS.map(item => (
                                <Link
                                    key={item}
                                    to="#"
                                    className="text-sm text-gray-600 hover:text-[#FF4B4B]
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