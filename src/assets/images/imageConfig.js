// src/assets/images/imageConfig.js

export const partnersLogos = Array.from({length: 20}, (_, index) => ({
    logo: new URL(`./logos/partners/${index + 1}.jpg`, import.meta.url).href
}));

export const clientsLogos = Array.from({length: 20}, (_, index) => ({
    logo: new URL(`./logos/consumers/${index + 1}.jpg`, import.meta.url).href
}));