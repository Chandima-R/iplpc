// next.config.js
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'images.unsplash.com'],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
