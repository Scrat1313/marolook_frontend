import React, {useState, useEffect} from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {HeroCarousel} from "../components";
import {
    ThumbUp, ThumbDown, Comment, Bookmark,
    BookmarkBorder, Search, FilterList
} from '@mui/icons-material';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';

const Blog = () => {
    usePageTitle('Blog');

    const heroSlides = [
        {
            title: "Découvrez la beauté naturelle d'Ambalavao",
            description: "Explorez des paysages à couper le souffle, des traditions authentiques et une culture riche.",
            backgroundImage: "https://picsum.photos/1920/1080?random=1",
            buttons: [
                {
                    text: "En savoir plus",
                    path: "/explore",
                    variant: "primary"
                },
                {
                    text: "Réserver maintenant",
                    path: "/booking",
                    variant: "secondary"
                }
            ]
        },
        {
            title: "Vivez des aventures inoubliables",
            description: "Partez à l'aventure et découvrez des expériences uniques au cœur de la nature.",
            backgroundImage: "https://picsum.photos/1920/1080?random=2",
            buttons: [
                {
                    text: "Nos activités",
                    path: "/activities",
                    variant: "primary"
                },
                {
                    text: "Contactez-nous",
                    path: "/contact",
                    variant: "secondary"
                }
            ]
        },
        {
            title: "Plongez dans la culture locale",
            description: "Rencontrez des artisans locaux, dégustez une cuisine unique et partagez des moments mémorables.",
            backgroundImage: "https://picsum.photos/1920/1080?random=3",
            buttons: [
                {
                    text: "Découvrir",
                    path: "/culture",
                    variant: "primary"
                },
                {
                    text: "Voir la galerie",
                    path: "/gallery",
                    variant: "secondary"
                }
            ]
        }
    ];

    const [articles, setArticles] = useState([]);
    const [comments, setComments] = useState({});
    const [newComment, setNewComment] = useState('');
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [bookmarks, setBookmarks] = useState([]);

    // Catégories des articles
    const categories = [
        {id: 'all', name: 'Tout'},
        {id: 'videography', name: 'Vidéographie'},
        {id: 'photography', name: 'Photographie'},
        {id: 'graphic-design', name: 'Design Graphique'},
        {id: '3d', name: 'Modélisation 3D'},
        {id: 'vfx', name: 'Incrustation'},
        {id: 'social-media', name: 'Community Management'},
        {id: 'web-dev', name: 'Développement Web'},
        {id: 'events', name: 'Évènementiel'},
        {id: 'decoration', name: 'Décoration'}
    ];

    // Articles exemple
    const sampleArticles = [
        {
            id: 1,
            title: "Top 10 des tendances en Vidéographie pour 2025",
            content: "De la vidéo verticale à la réalité augmentée, découvrez les dernières tendances qui façonnent le monde de la vidéo en 2025. Les créateurs de contenu adoptent de plus en plus des formats innovants et des technologies émergentes pour captiver leur audience. L'intelligence artificielle joue également un rôle majeur dans la post-production...",
            category: "videography",
            author: "Thomas Dubois",
            date: "2025-01-16",
            image: "https://picsum.photos/800/400?random=1",
            likes: 87,
            dislikes: 3
        },
        {
            id: 2,
            title: "L'art de la photographie minimaliste",
            content: "Le minimalisme en photographie continue de gagner en popularité. Cette approche qui privilégie la simplicité et l'épurement permet de créer des images puissantes et évocatrices. Découvrez les techniques et astuces pour maîtriser cet art délicat...",
            category: "photography",
            author: "Sophie Martin",
            date: "2025-01-14",
            image: "https://picsum.photos/800/400?random=2",
            likes: 134,
            dislikes: 5
        },
        {
            id: 3,
            title: "Design Graphique : Les couleurs de 2025",
            content: "Cette année, les palettes de couleurs audacieuses et les dégradés complexes dominent le design graphique. Les créatifs explorent de nouvelles combinaisons qui défient les conventions traditionnelles tout en maintenant l'harmonie visuelle...",
            category: "graphic-design",
            author: "Julie Leroux",
            date: "2025-01-17",
            image: "https://picsum.photos/800/400?random=3",
            likes: 92,
            dislikes: 4
        },
        {
            id: 4,
            title: "Révolution dans la modélisation 3D avec l'IA",
            content: "L'intelligence artificielle transforme radicalement le monde de la modélisation 3D. Les nouveaux outils permettent désormais de créer des modèles complexes en quelques clics, ouvrant de nouvelles possibilités pour les artistes et les designers...",
            category: "3d",
            author: "Marc Dupont",
            date: "2025-01-15",
            image: "https://picsum.photos/800/400?random=4",
            likes: 156,
            dislikes: 7
        },
        {
            id: 5,
            title: "Les secrets d'une incrustation VFX réussie",
            content: "Les effets visuels modernes exigent une précision exceptionnelle. De la capture sur fond vert aux techniques de tracking avancées, cet article explore les meilleures pratiques pour créer des incrustations VFX impeccables...",
            category: "vfx",
            author: "Alexandre Chen",
            date: "2025-01-13",
            image: "https://picsum.photos/800/400?random=5",
            likes: 78,
            dislikes: 2
        },
        {
            id: 6,
            title: "Stratégies gagnantes pour le Community Management en 2025",
            content: "Le paysage des réseaux sociaux évolue constamment. Découvrez les stratégies les plus efficaces pour engager votre communauté, gérer votre présence en ligne et créer du contenu qui résonne avec votre audience...",
            category: "social-media",
            author: "Emma Bernard",
            date: "2025-01-16",
            image: "https://picsum.photos/800/400?random=6",
            likes: 223,
            dislikes: 8
        },
        {
            id: 7,
            title: "Web Development : Les frameworks incontournables",
            content: "Le développement web continue sa mutation rapide. Des nouveaux frameworks JavaScript aux innovations en matière de CSS, découvrez les outils et technologies qui domineront le développement web cette année...",
            category: "web-dev",
            author: "Lucas Mercier",
            date: "2025-01-17",
            image: "https://picsum.photos/800/400?random=7",
            likes: 167,
            dislikes: 6
        },
        {
            id: 8,
            title: "Organisation d'événements : Les nouvelles attentes en 2025",
            content: "Le secteur événementiel évolue avec les nouvelles technologies et les changements sociétaux. De la réalité virtuelle aux événements hybrides, découvrez comment créer des expériences mémorables pour votre public...",
            category: "events",
            author: "Camille Roux",
            date: "2025-01-15",
            image: "https://picsum.photos/800/400?random=8",
            likes: 145,
            dislikes: 4
        },
        {
            id: 9,
            title: "Tendances Décoration : Natural Luxe",
            content: "Le 'Natural Luxe' combine matériaux naturels et finitions luxueuses pour créer des espaces sophistiqués et accueillants. Cette tendance répond au désir croissant de reconnexion avec la nature tout en maintenant une esthétique élégante...",
            category: "decoration",
            author: "Sarah Lambert",
            date: "2025-01-14",
            image: "https://picsum.photos/800/400?random=9",
            likes: 198,
            dislikes: 5
        }
    ];

    // Initialisation des données
    useEffect(() => {
        const storedArticles = localStorage.getItem('blog-articles');
        const storedComments = localStorage.getItem('blog-comments');
        const storedBookmarks = localStorage.getItem('blog-bookmarks');

        if (!storedArticles) {
            localStorage.setItem('blog-articles', JSON.stringify(sampleArticles));
            setArticles(sampleArticles);
        } else {
            setArticles(JSON.parse(storedArticles));
        }

        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }

        if (storedBookmarks) {
            setBookmarks(JSON.parse(storedBookmarks));
        }
    }, []);

    // Gestion des likes/dislikes
    const handleVote = (articleId, voteType) => {
        const updatedArticles = articles.map(article => {
            if (article.id === articleId) {
                return {
                    ...article,
                    [voteType]: article[voteType] + 1
                };
            }
            return article;
        });

        setArticles(updatedArticles);
        localStorage.setItem('blog-articles', JSON.stringify(updatedArticles));
    };

    // Gestion des commentaires
    const handleAddComment = (articleId) => {
        if (!newComment.trim()) return;

        const updatedComments = {
            ...comments,
            [articleId]: [
                ...(comments[articleId] || []),
                {
                    id: Date.now(),
                    text: newComment,
                    author: 'Utilisateur',
                    date: new Date().toISOString()
                }
            ]
        };

        setComments(updatedComments);
        setNewComment('');
        localStorage.setItem('blog-comments', JSON.stringify(updatedComments));
    };

    // Gestion des favoris
    const toggleBookmark = (articleId) => {
        const newBookmarks = bookmarks.includes(articleId)
            ? bookmarks.filter(id => id !== articleId)
            : [...bookmarks, articleId];

        setBookmarks(newBookmarks);
        localStorage.setItem('blog-bookmarks', JSON.stringify(newBookmarks));
    };

    // Filtrage des articles
    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.content.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="flex flex-col min-h-screen">
            <HeroCarousel
                slides={heroSlides}
                height="h-[650px]"
                showArrows={false}
                showDots={false}
            />

            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* En-tête de la section blog */}
                    <div className="text-center mb-20">
                        <div className="inline-block">
                            <span className="inline-block px-4 py-1 mb-4 text-[#FF4B4B] bg-[#FF4B4B]/10
                                          rounded-full text-sm font-medium border border-[#FF4B4B]/20">
                                Notre Blog
                            </span>
                        </div>
                        <h2 className="text-6xl font-bold mb-8 text-gray-900">
                            Actualités et
                            <span className="relative inline-block ml-4">
                                Conseils
                                <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#FF4B4B]
                                              rounded-full transform skew-x-12"/>
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Découvrez nos derniers articles et conseils pour réussir vos projets
                        </p>
                    </div>

                    {/* Barre de recherche et filtres */}
                    <div className="mb-12 space-y-6">
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                <input
                                    type="text"
                                    placeholder="Rechercher un article..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200
                                             focus:ring-2 focus:ring-[#FF4B4B] focus:border-transparent"
                                />
                            </div>
                            <div className="flex gap-4 items-center">
                                <FilterList className="text-gray-400"/>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="py-3 px-4 rounded-xl border border-gray-200
                                             focus:ring-2 focus:ring-[#FF4B4B] focus:border-transparent"
                                >
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Grille d'articles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map(article => (
                            <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden
                                                          hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="px-3 py-1 text-sm bg-[#FF4B4B]/10 text-[#FF4B4B]
                                                       rounded-full">
                                            {categories.find(c => c.id === article.category)?.name}
                                        </span>
                                        <button
                                            onClick={() => toggleBookmark(article.id)}
                                            className="text-gray-400 hover:text-[#FF4B4B]"
                                        >
                                            {bookmarks.includes(article.id) ? <Bookmark/> : <BookmarkBorder/>}
                                        </button>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                                    <p className="text-gray-600 mb-4">{article.content.substring(0, 100)}...</p>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <span>{format(new Date(article.date), 'dd MMMM yyyy', {locale: fr})}</span>
                                        <span>{article.author}</span>
                                    </div>
                                    <div
                                        className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => handleVote(article.id, 'likes')}
                                                className="flex items-center gap-1 text-gray-500 hover:text-[#FF4B4B]"
                                            >
                                                <ThumbUp fontSize="small"/> {article.likes}
                                            </button>
                                            <button
                                                onClick={() => handleVote(article.id, 'dislikes')}
                                                className="flex items-center gap-1 text-gray-500 hover:text-[#FF4B4B]"
                                            >
                                                <ThumbDown fontSize="small"/> {article.dislikes}
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => setSelectedArticle(article.id)}
                                            className="flex items-center gap-1 text-gray-500 hover:text-[#FF4B4B]"
                                        >
                                            <Comment fontSize="small"/>
                                            {(comments[article.id] || []).length}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal des commentaires */}
                    {selectedArticle && (
                        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
                            <div className="bg-white rounded-2xl w-full max-w-3xl mx-auto shadow-2xl">
                                {/* En-tête du modal */}
                                <div className="border-b border-gray-100 p-6">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            Discussion ({(comments[selectedArticle] || []).length})
                                        </h3>
                                        <button
                                            onClick={() => setSelectedArticle(null)}
                                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Corps du modal */}
                                <div className="max-h-[60vh] overflow-y-auto p-6">
                                    {/* Zone de commentaire */}
                                    <div className="mb-8">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#FF4B4B]/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-[#FF4B4B] font-medium">
                                {localStorage.getItem('userName')?.[0]?.toUpperCase() || 'U'}
                            </span>
                                            </div>
                                            <div className="flex-1">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Partagez votre avis..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200
                                         focus:ring-2 focus:ring-[#FF4B4B] focus:border-transparent
                                         min-h-[100px] resize-none"
                            />
                                                <div className="mt-3 flex justify-end">
                                                    <button
                                                        onClick={() => handleAddComment(selectedArticle)}
                                                        disabled={!newComment.trim()}
                                                        className="px-6 py-2.5 bg-[#FF4B4B] text-white rounded-xl
                                             hover:bg-[#E43D3D] transition-colors disabled:opacity-50
                                             disabled:cursor-not-allowed flex items-center gap-2"
                                                    >
                                                        <Comment fontSize="small" />
                                                        Commenter
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Liste des commentaires */}
                                    <div className="space-y-6">
                                        {(comments[selectedArticle] || []).map(comment => (
                                            <div key={comment.id} className="flex items-start gap-4 group">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <span className="text-gray-600 font-medium">
                                    {comment.author[0].toUpperCase()}
                                </span>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <div className="flex items-center gap-3">
                                            <span className="font-semibold text-gray-900">
                                                {comment.author}
                                            </span>
                                                                <span className="text-sm text-gray-500">
                                                {format(new Date(comment.date), 'dd MMM yyyy à HH:mm', {locale: fr})}
                                            </span>
                                                            </div>
                                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                                <button className="p-1 hover:bg-gray-200 rounded-full">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <p className="text-gray-700 leading-relaxed">
                                                            {comment.text}
                                                        </p>
                                                    </div>
                                                    <div className="mt-2 ml-4 flex items-center gap-4 text-sm text-gray-500">
                                                        <button className="hover:text-[#FF4B4B] flex items-center gap-1">
                                                            <ThumbUp fontSize="small" />
                                                            J'aime
                                                        </button>
                                                        <button className="hover:text-[#FF4B4B] flex items-center gap-1">
                                                            <Comment fontSize="small" />
                                                            Répondre
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;