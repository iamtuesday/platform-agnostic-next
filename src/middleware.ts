import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/auth/session'

const protectedRoutePatterns = [/^\/dashboard/, /^\/streaming/, /^\/red-social/]
const authRoutes = ['/signin']

export default async function middleware(req: NextRequest) {
	// Validamos si la ruta actual es protegida
	const path = req.nextUrl.pathname
	const isProtectedRoute = protectedRoutePatterns.some(pattern => pattern.test(path))
	const isAuthRoute = authRoutes.includes(path)

	// Obtenemos la cookie de sesión
	const session = await getSession()

	// Si intenta acceder a una ruta protegida sin estar autenticado, redirecciona al login
	if (isProtectedRoute && !session?.userId) {
		return NextResponse.redirect(new URL('/signin', req.url))
	}

	// Si se intenta acceder a register o login estando autenticado, redirecciona a profile
	if (isAuthRoute && session?.userId) {
		return NextResponse.redirect(new URL('/streaming', req.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
