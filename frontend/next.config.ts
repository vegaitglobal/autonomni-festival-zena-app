import type { NextConfig } from 'next';

const nextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337',
				pathname: '/**',
			},
		],
		domains: ['localhost'],
	},
};

export default nextConfig;
