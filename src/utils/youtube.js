/**
 * Extrait l'ID d'une vidéo YouTube depuis différents formats d'URL
 * @param {string} url - L'URL YouTube
 * @returns {string|null} - L'ID de la vidéo ou null si invalide
 */
export const extractYouTubeId = (url) => {
    if (!url) return null;

    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
};

/**
 * Génère l'URL d'embed YouTube
 * @param {string} videoId - L'ID de la vidéo
 * @returns {string} - L'URL d'embed
 */
export const getYouTubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1`;
};

/**
 * Génère l'URL de la miniature YouTube
 * @param {string} videoId - L'ID de la vidéo
 * @param {string} quality - Qualité de l'image (default, mqdefault, hqdefault, sddefault, maxresdefault)
 * @returns {string} - L'URL de la miniature
 */
export const getYouTubeThumbnail = (videoId, quality = 'maxresdefault') => {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};