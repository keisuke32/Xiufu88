const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

// next.js configuration
const nextConfig = {
  // Reference a variable that was defined in the .env file and make it available at Build Time
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
      },
    },
  },
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
