/**
 * Fait défiler la page en douceur jusqu'à un élément spécifié par son ID
 * @param {string} elementId - L'ID de l'élément cible
 * @param {Object} options - Options de défilement supplémentaires
 * @param {number} options.offset - Décalage en pixels par rapport à l'élément (par défaut: 0)
 * @param {string} options.behavior - Comportement de défilement ('smooth' ou 'auto', par défaut: 'smooth')
 * @param {string} options.block - Position de l'élément après défilement ('start', 'center', 'end', 'nearest', par défaut: 'start')
 */
export const smoothScrollTo = (elementId, options = {}) => {
    const {
        offset = 0,
        behavior = 'smooth',
        block = 'start'
    } = options;

    const element = document.getElementById(elementId);

    if (element) {
        // Calcul de la position avec offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        // Utilisation de scrollIntoView pour une animation native
        element.scrollIntoView({
            behavior,
            block
        });

        // Si un offset est spécifié, ajuster la position
        if (offset) {
            window.scrollTo({
                top: offsetPosition,
                behavior
            });
        }
    }
};

/**
 * Vérifie si un élément est visible dans le viewport
 * @param {HTMLElement} element - L'élément à vérifier
 * @param {number} offset - Marge optionnelle pour considérer l'élément comme visible
 * @returns {boolean} - True si l'élément est visible
 */
export const isElementInViewport = (element, offset = 0) => {
    const rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 - offset &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight + offset || document.documentElement.clientHeight + offset) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * Fait défiler la page vers le haut en douceur
 * @param {Object} options - Options de défilement
 * @param {string} options.behavior - Comportement de défilement ('smooth' ou 'auto')
 */
export const scrollToTop = (options = {behavior: 'smooth'}) => {
    window.scrollTo({
        top: 0,
        ...options
    });
};

/**
 * Désactive le défilement de la page
 */
export const disableScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
};

/**
 * Réactive le défilement de la page
 */
export const enableScroll = () => {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
};

/**
 * Gère le défilement fluide pour tous les liens d'ancrage dans une page
 * @param {number} offset - Décalage en pixels par rapport à l'élément cible
 */
export const initSmoothScrolling = (offset = 0) => {
    document.addEventListener('click', (e) => {
        const target = e.target.closest('a');
        if (!target) return;

        const hash = target.hash;
        if (!hash) return;

        const targetElement = document.getElementById(hash.substring(1));
        if (!targetElement) return;

        e.preventDefault();
        smoothScrollTo(hash.substring(1), {offset});
    });
};