const {SitemapStream, streamToPromise} = require('sitemap');
const {createWriteStream} = require('fs');
const path = require('path');

// Définition des routes
const routes = {
    home: '/',
    township: '/commune',
    story: '/commune/histoire',
    geography: '/commune/geographie',
    elected: '/commune/elus',
    council: '/commune/conseil-municipal',
    project: '/projets/liste',
    partner: '/projets/partenaires',
    association: '/projets/associations',
    tourism: '/tourisme/activites',
    leisure: '/tourisme/loisirs',
    contact: '/contact'
};

const baseUrl = 'https://ambalavao.vercel.app/';

async function generateSitemap() {
    const sitemapStream = new SitemapStream({hostname: baseUrl});
    const writeStream = createWriteStream(path.resolve('./public/sitemap.xml'));

    sitemapStream.pipe(writeStream);

    // Convertir les routes en tableau et les écrire dans le sitemap
    Object.values(routes).forEach((route) => {
        sitemapStream.write({url: route, changefreq: 'daily', priority: 0.8});
    });

    sitemapStream.end();

    await streamToPromise(sitemapStream);
    console.log('Sitemap généré avec succès !');
}

generateSitemap().catch((error) => {
    console.error('Erreur lors de la génération du sitemap :', error);
});
