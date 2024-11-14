import { User } from '@/lib/auth/definitions'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { authConfig } from './auth.config'
import prisma from './lib/prisma/db'

async function getUser(email: string): Promise<User | undefined> {
	try {
		const user = await prisma.user.findUnique({ where: { email } })

		if (!user) return undefined

		return user
	} catch (error) {
		console.error('Failed to fetch user:', error)
		throw new Error('Failed to fetch user.')
	}
}

export const { handlers, auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z.object({ email: z.string().email() }).safeParse(credentials)

				console.log('parsedCredentials -->', parsedCredentials)

				if (parsedCredentials.success) {
					const { email } = parsedCredentials.data

					const user = await getUser(email)

					if (!user) return null

					return user
				}

				return null
			}
		})
	]
})
