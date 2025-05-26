import { useState, useEffect } from 'react';
import videosData from '../data/videos.json';
import { extractYouTubeId, getYouTubeEmbedUrl, getYouTubeThumbnail } from '../utils/youtube';

const VideoFromYT = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedVideo(null);
    };

    return (
        <section className="relative py-24 transition-colors duration-300
                          dark:bg-[#121212] bg-white
                          dark:text-[#F5F5F5] text-gray-900 overflow-hidden">
            {/* Motif de fond avec adaptation pour le mode sombre */}
            <div className="absolute inset-0 dark:opacity-[0.03] opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Éléments décoratifs avec opacité ajustée pour le mode sombre */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-1/3 h-1/3
                              bg-gradient-to-br from-[#FF4B4B]/20 to-purple-500/20
                              dark:from-[#FF4B4B]/10 dark:to-purple-500/10
                              rounded-full blur-3xl transform translate-x-1/2 opacity-30"/>
                <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3
                              bg-gradient-to-tr from-blue-500/20 to-[#E43D3D]/20
                              dark:from-blue-500/10 dark:to-[#E43D3D]/10
                              rounded-full blur-3xl transform -translate-x-1/2 opacity-30"/>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* En-tête moderne */}
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <span className="inline-block px-4 py-1 mb-4
                                       text-[#FF4B4B] bg-[#FF4B4B]/10
                                       dark:bg-[#FF4B4B]/5
                                       rounded-full text-sm font-medium
                                       border border-[#FF4B4B]/20">
                            Vidéos
                        </span>
                    </div>
                    <p className="text-lg dark:text-[#BBBBBB] text-gray-600 max-w-2xl mx-auto">
                        Découvrez notre expertise à travers nos réalisations audiovisuelles
                    </p>
                </div>

                {/* Grille des vidéos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videosData.videos.map((video) => {
                        const videoId = extractYouTubeId(video.url);
                        const thumbnailUrl = videoId ? getYouTubeThumbnail(videoId) : null;

                        return (
                            <div key={video.id} className="group relative h-full">
                                {/* Effet de fond au hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B4B]/20 to-purple-500/20
                                              dark:from-[#FF4B4B]/10 dark:to-purple-500/10
                                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                              rounded-2xl blur-xl"/>

                                {/* Carte vidéo */}
                                <div className="relative rounded-2xl overflow-hidden
                                              dark:bg-[#1E1E1E] bg-white
                                              shadow-lg hover:shadow-xl
                                              transition-all duration-300
                                              dark:border-[#2D2D2D] border-gray-100
                                              backdrop-blur-sm h-full flex flex-col">

                                    {/* Miniature vidéo */}
                                    <div className="relative aspect-video overflow-hidden cursor-pointer"
                                        onClick={() => handleVideoClick(video)}>
                                        {thumbnailUrl ? (
                                            <img
                                                src={thumbnailUrl}
                                                alt={`Vidéo ${video.id}`}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                onError={(e) => {
                                                    e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 
                                                          dark:from-[#2D2D2D] dark:to-[#3D3D3D] 
                                                          flex items-center justify-center">
                                                <svg className="w-16 h-16 text-gray-400 dark:text-gray-600"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}

                                        {/* Overlay play button */}
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 
                                                      transition-opacity duration-300 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-[#FF4B4B] flex items-center justify-center
                                                          shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <polygon points="5,3 19,12 5,21"></polygon>
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Badge ID */}
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-1 text-xs font-medium
                                                           bg-[#FF4B4B] text-white rounded-full">
                                                #{video.id}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Contenu de la carte */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold mb-3
                                                     dark:text-[#F5F5F5] text-gray-900
                                                     group-hover:text-[#FF4B4B]
                                                     transition-colors duration-300">
                                            Vidéo #{video.id}
                                        </h3>
                                        <p className="dark:text-[#BBBBBB] text-gray-600 mb-4 flex-1">
                                            Découvrez cette création audiovisuelle réalisée par notre équipe.
                                        </p>

                                        {/* Bouton d'action */}
                                        <div className="mt-auto">
                                            <button
                                                onClick={() => handleVideoClick(video)}
                                                className="inline-flex items-center gap-2
                                                         text-[#FF4B4B] font-medium
                                                         group-hover:text-[#E43D3D]
                                                         transition-colors duration-300"
                                            >
                                                <span>Regarder</span>
                                                <div className="w-6 h-6 rounded-full
                                                              bg-[#FF4B4B]/10
                                                              dark:bg-[#FF4B4B]/5
                                                              flex items-center justify-center
                                                              transform group-hover:translate-x-2
                                                              transition-transform duration-300">
                                                    <svg className="w-4 h-4 text-[#FF4B4B]" fill="currentColor" viewBox="0 0 24 24">
                                                        <polygon points="5,3 19,12 5,21"></polygon>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal vidéo */}
            {isModalOpen && selectedVideo && (
                <VideoModal
                    video={selectedVideo}
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                />
            )}
        </section>
    );
};

// Composant Modal pour les vidéos
const VideoModal = ({ video, isOpen, onClose }) => {
    const videoId = extractYouTubeId(video.url);
    const embedUrl = videoId ? getYouTubeEmbedUrl(videoId) : null;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={onClose}
        >
            <div
                className="relative max-w-6xl w-full max-h-[90vh] rounded-2xl overflow-hidden
                          dark:bg-[#1E1E1E] bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Bouton fermer */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full 
                             flex items-center justify-center transition-all duration-200 hover:scale-110
                             bg-[#FF4B4B] text-white shadow-lg"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Vidéo iframe */}
                <div className="aspect-video">
                    {embedUrl ? (
                        <iframe
                            src={embedUrl}
                            title={`Vidéo ${video.id}`}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center
                                      dark:bg-[#2D2D2D] bg-gray-100
                                      dark:text-[#BBBBBB] text-gray-600">
                            <p>Impossible de charger la vidéo</p>
                        </div>
                    )}
                </div>

                {/* Informations vidéo */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold dark:text-[#F5F5F5] text-gray-900 mb-2">
                        Vidéo #{video.id}
                    </h3>
                    <p className="dark:text-[#BBBBBB] text-gray-600">
                        Une création audiovisuelle de notre équipe professionnelle.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoFromYT;