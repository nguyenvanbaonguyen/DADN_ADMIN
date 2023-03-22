/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fordev-api.growfi.me',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 's2.coinmarketcap.com',
				port: '',
			},
		],
	},
};

module.exports = nextConfig;
