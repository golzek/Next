import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	cacheComponents: true,
	/* config options here */
	experimental: {
		authInterrupts: true,
	},

}

export default nextConfig
