const optimizedImages = require('next-optimized-images');

module.exports = optimizedImages({
  images: {
    disableStaticImages: true,
    domains: ['images.unsplash.com'],
  }
});