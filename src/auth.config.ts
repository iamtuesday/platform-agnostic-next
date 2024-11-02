import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
	pages: {
		signIn: '/signin'
	},
	providers: [],
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			// console.log('auth', auth)
			// console.log('nextUrl', nextUrl)

			const isLoggedIn = !!auth?.user
			console.log('auth?.user', auth?.user)

			const isOnDashboard = nextUrl.pathname.startsWith('/streaming')
			if (isOnDashboard) {
				if (isLoggedIn) return true
				return false
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/streaming', nextUrl))
			}
			return true
		}
	}
} satisfies NextAuthConfig
