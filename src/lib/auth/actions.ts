'use server'

import { SignupFormType } from '@/schemas'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'
import { signOut as _signOut, signIn } from '../../auth'
import prisma from '../prisma/db'

export async function register({ email, name }: SignupFormType): Promise<void | 'Email already exists.'> {
	const user = await prisma.$queryRaw`SELECT * FROM "User" WHERE email = ${email}`

	if (Array.isArray(user) && user.length > 0) return 'Email already exists.'

	await prisma.user.create({ data: { email, name } })

	redirect('/signin')
}

export async function authenticate(
	prevState: string | undefined,
	formData: FormData
): Promise<'Invalid credentials.' | 'Something went wrong.' | undefined> {
	try {
		await signIn('credentials', formData)

		redirect('/streaming')
	} catch (error) {
		console.error('Failed to authenticate:', error)
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return 'Invalid credentials.'
				default:
					return 'Something went wrong.'
			}
		}
		// throw error
		redirect('/streaming')
	}
}

export async function signOut(): Promise<void> {
	await _signOut()
}
