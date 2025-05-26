import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, imageSrc, imageIndex }) => {

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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={onClose}
        >
            <div
                className="relative max-w-4xl max-h-[90vh] rounded-lg overflow-hidden shadow-2xl bg-light-surface dark:bg-dark-surface"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Bouton fermer */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 bg-light-accent-primary dark:bg-dark-accent-primary text-light-primary dark:text-dark-primary"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Image */}
                <div className="p-4">
                    <img
                        src={imageSrc}
                        alt={`Portfolio ${imageIndex}`}
                        className="w-full h-auto max-h-[80vh] object-contain rounded"
                    />
                    <div className="mt-4 text-center text-light-text-secondary dark:text-dark-text-secondary">
                        Image {imageIndex} / 14
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;