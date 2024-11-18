import { cookies } from 'next/headers'
import 'server-only'
import { Session } from './definitions'

const SESSION_NAME = '_platform_agnostic_next_'

import { JWTPayload, SignJWT, jwtVerify } from 'jose'
import 'server-only'

const secretKey = process.env.NEXT_SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export const encrypt = async (payload: Session): Promise<string> => {
	const encrypToken = new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).sign(encodedKey)
	return await encrypToken
}

export const decrypt = async (session: string | undefined = '') => {
	const { payload } = await jwtVerify(session, encodedKey, {
		algorithms: ['HS256']
	})
	return payload
}

export const createSession = async (session: Session): Promise<void> => {
	const encryptSession = await encrypt(session)
	// Set session in cookies
	cookies().set(SESSION_NAME, encryptSession, {
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
		path: '/'
	})
}

export const deleteSession = (): void => {
	cookies().delete(SESSION_NAME)
}

export const getSession = async (): Promise<Session | null> => {
	const session = cookies().get(SESSION_NAME)?.value

	// Si no se encuentra la cookie de sesión, retornar null
	if (!session) {
		return null
	}

	try {
		// Desencriptar el valor de la cookie
		const decryptSession: JWTPayload = await decrypt(session)

		// Verificar que decryptSession tenga la forma correcta
		if (!decryptSession || typeof decryptSession.userId !== 'string' || typeof decryptSession.token !== 'string') {
			return null
		}

		// Crear el objeto de sesión que se va a retornar
		const returnSession: Session = {
			userId: decryptSession?.userId,
			token: decryptSession?.token
		}

		return returnSession
	} catch (error) {
		// En caso de error durante el proceso de desencriptado, se maneja aquí
		console.error('Error al analizar la cookie de sesión:', error)
		return null
	}
}
