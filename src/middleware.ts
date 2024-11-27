import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from './actions/auth/actions'
import { Session } from './lib/auth/definitions'
import { SESSION_NAME } from './lib/auth/session'

const protectedRoutePatterns = [/^\/$/, /^\/agnostic/, /^\/streaming/, /^\/reels/]
const authRoutes = ['/signin']

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname
	const isProtectedRoute = protectedRoutePatterns.some(pattern => pattern.test(path))
	const isAuthRoute = authRoutes.includes(path)
	/**
	 * Obtener la sesión actual del usuario
	 */
	const isSessionCookieInCookies = req.cookies.has(SESSION_NAME)

	let session: Session | null = null

	if (isSessionCookieInCookies) {
		const sessionCookie = req.cookies.get(SESSION_NAME)?.value

		try {
			// Si la cookie tiene valor, intentamos parsearla
			session = sessionCookie ? JSON.parse(sessionCookie) : null
		} catch (error) {
			console.error('Error al parsear la cookie:', error)
			session = null // En caso de error al parsear, aseguramos que la sesión sea null
		}
	}

	// Si se intenta acceder a una ruta protegida sin sesión, redirigir a /signin
	if (isProtectedRoute && !session?.userId) {
		return NextResponse.redirect(new URL('/signin', req.url))
	}

	// Si se intenta acceder a la ruta de inicio de sesión con una sesión activa, redirigir a /streaming
	if (isAuthRoute && session?.userId) {
		return NextResponse.redirect(new URL('/streaming', req.url))
	}

	const isTokenValid = await verifyToken(session)
	/**
	 * Si el token no es válido, eliminar la sesión simplemente eliminando la cookie
	 */
	if (!isTokenValid) {
		const res = NextResponse.next()
		res.cookies.delete(SESSION_NAME)
		return res
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
