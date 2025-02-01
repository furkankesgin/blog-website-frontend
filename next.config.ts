import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		typedRoutes: true
	},
	redirects: async () => {
		return [
			{
				source: "/",
				destination: "/home",
				permanent: true
			}
		];
	}
};

export default nextConfig;
