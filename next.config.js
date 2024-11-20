/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/dashboard/users',
				destination: '/dashboard'
			}
		]
	}
}

module.exports = nextConfig
