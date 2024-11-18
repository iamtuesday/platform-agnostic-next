'use server'

import { Session } from '@/lib/auth/definitions'
import { createSession } from '@/lib/auth/session'
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

export const login = async (signInData: SignInFormType): Promise<void> => {
	const API_ENDPOINT = '/authentication/login'

	const options: FetchOptions = {
		method: 'POST',
		body: JSON.stringify(signInData),
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const [res, err] = await fetchService<IAuthResponse>(API_ENDPOINT, options)

	if (err || !res) return

	const session: Session = {
		userId: res.id,
		token: res.access_token
	}

	createSession(session)

	// Una vez autenticado redirigir a streaming
	redirect('/streaming')
}
