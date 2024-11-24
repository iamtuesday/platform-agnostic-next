/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/agnostic/users',
				destination: '/agnostic'
			}
		]
	}
}

module.exports = nextConfig
