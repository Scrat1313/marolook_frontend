import React from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {useTheme} from "../hooks/useTheme";

const Home = () => {
    usePageTitle('Accueil');
    const [darkMode, setDarkMode] = useTheme();
    return (
        <div className="min-h-screen bg-light-primary dark:bg-dark-primary">
            <nav className="bg-light-secondary dark:bg-dark-secondary">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-light-text-primary dark:text-dark-text-primary"
                >
                    Changer de thème
                </button>
            </nav>

            <main className="text-light-text-primary dark:text-dark-text-primary">
                <h1 className="text-light-accent-primary dark:text-dark-accent-primary">
                    Mon Titre
                </h1>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    Contenu secondaire
                </p>
            </main>
        </div>
    );
};

export default Home;