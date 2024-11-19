'use server'

import { Session } from '@/lib/auth/definitions'
import { createSession, deleteSession, getSession } from '@/lib/auth/session'
import { FetchOptions, fetchService } from '@/lib/http'
import { SignInFormType } from '@/schemas'
import { redirect } from 'next/navigation'

interface IAuthResponse {
	id: string
	email: string
	firstName: string
	lastName: string
	role: string
	access_token: string
}

type errorMsgType = {
	msg: string
}

export const login = async (signInData: SignInFormType): Promise<errorMsgType | void> => {
	const API_ENDPOINT = '/authentication/login'

	const options: FetchOptions = {
		method: 'POST',
		body: JSON.stringify(signInData),
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const [res, err] = await fetchService<IAuthResponse>(API_ENDPOINT, options)

	if (err || !res) {
		return { msg: `Error al iniciar sesión: ${err?.message}` }
	}

	const session: Session = {
		userId: res.id,
		token: res.access_token
	}

	await createSession(session)

	// Una vez autenticado redirigir a streaming
	redirect('/streaming')
}

export const logout = async (): Promise<errorMsgType | void> => {
	const API_ENDPOINT = '/authentication/logout'

	const session = await getSession()

	const options: FetchOptions = {
		method: 'POST',
		body: JSON.stringify({
			id: session?.userId
		}),
		headers: {
			'Content-Type': 'application/json'
		},
		token: session?.token
	}

	const [_, err] = await fetchService(API_ENDPOINT, options)

	if (err) {
		return { msg: `Error al cerrar sesión: ${err?.message}` }
	}

	deleteSession()

	// Redirigir a home
	redirect('/')
}
