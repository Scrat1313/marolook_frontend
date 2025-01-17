import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import GroupsIcon from '@mui/icons-material/Groups';
import LandscapeIcon from '@mui/icons-material/Landscape';
import route from "../routes/routes";
import usePageTitle from "../hooks/usePageTitle";
import logo from "../assets/images/logos/logo.png";

const Navbar = () => {
    usePageTitle('Accueil')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navItems = [
        {
            path: route.home,
            label: 'Accueil',
            icon: <HomeIcon className="w-6 h-6 md:w-5 md:h-5"/>
        },
        {
            path: route.about,
            label: 'Qui sommes nous ?',
            icon: <LocationCityIcon className="w-6 h-6 md:w-5 md:h-5"/>
        },
        {
            path: '/nos-services',
            label: 'Nos services',
            icon: <GroupsIcon className="w-6 h-6 md:w-5 md:h-5"/>
        },
        {
            path: '/portfolio',
            label: 'Portfolio',
            icon: <LandscapeIcon className="w-6 h-6 md:w-5 md:h-5"/>
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${
                isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-lg py-2' : 'bg-white py-4'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-10 h-10 object-contain"
                                loading="eager"
                                draggable="false"
                            />
                        </Link>

                        <div className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="relative group px-2 py-1"
                                >
                                    <span className={`relative z-10 text-sm font-medium transition-colors duration-300
                                        ${isActive(item.path) ? 'text-[#FF4B4B]' : 'text-[#333333] group-hover:text-[#FF4B4B]'}`}>
                                        {item.label}
                                    </span>
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FF4B4B] transform origin-left transition-all duration-300
                                        ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}/>
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                                    ${location.pathname === '/contact'
                                    ? 'bg-[#FF4B4B] text-white shadow-lg shadow-[#FF4B4B]/25'
                                    : 'bg-[#FF4B4B] text-white hover:bg-[#FF4B4B] hover:text-white hover:shadow-lg hover:shadow-[#FF4B4B]/25'
                                }`}
                            >
                                <PhoneIcon className="h-4 w-4"/>
                                <span>Contact</span>
                            </Link>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden relative z-50 p-2 rounded-xl bg-gray-50 text-gray-700
                                     hover:bg-[#FF4B4B] hover:text-white transition-all duration-300"
                        >
                            {isMobileMenuOpen ? (
                                <CloseIcon className="h-6 w-6"/>
                            ) : (
                                <MenuIcon className="h-6 w-6"/>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300
                ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                 onClick={() => setIsMobileMenuOpen(false)}
            />

            <div className={`fixed inset-x-0 bottom-0 z-50 transform transition-all duration-500 ease-in-out
                ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="bg-white rounded-t-3xl shadow-2xl">
                    <div className="flex flex-col px-6 pb-8 pt-2">
                        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6"/>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex flex-col items-center justify-center p-4 rounded-2xl 
                                    border transition-all duration-300 gap-3
                                    ${isActive(item.path)
                                        ? 'bg-[#FF4B4B] text-white border-[#FF4B4B] shadow-lg shadow-[#FF4B4B]/25'
                                        : 'bg-gray-50 border-gray-100 text-gray-700 hover:bg-[#FF4B4B]/10 hover:text-[#FF4B4B] hover:border-[#FF4B4B]/20'
                                    }`}
                                >
                                    {item.icon}
                                    <span className="text-sm font-medium text-center whitespace-nowrap">
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-3 p-4 rounded-xl
                                     bg-[#FF4B4B] text-white font-medium shadow-lg shadow-[#FF4B4B]/25
                                     transition-all duration-300 hover:bg-[#E43D3D]"
                        >
                            <PhoneIcon className="h-5 w-5"/>
                            <span>Nous contacter</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;