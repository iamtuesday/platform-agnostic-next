import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
	pages: {
		signIn: '/signin'
	},
	providers: [],
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user

			const isOnDashboard = nextUrl.pathname.startsWith('/streaming')
			if (isOnDashboard) {
				if (isLoggedIn) return true
				return false
			} else if (isLoggedIn) {
				const authRoutes = ['/streaming', '/videos', '/']

				if (authRoutes.includes(nextUrl.pathname)) {
					return Response.redirect(new URL('/streaming', nextUrl))
				}

				return false
			}
			return true
		}
	}
} satisfies NextAuthConfig
