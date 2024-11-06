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
				// return Response.redirect(new URL('/streaming', nextUrl))
				const authRoutes = ['/streaming', '/videos', '/']
				if (authRoutes.includes(nextUrl.pathname)) return true
				return false
			}
			return true
		}
	}
} satisfies NextAuthConfig
