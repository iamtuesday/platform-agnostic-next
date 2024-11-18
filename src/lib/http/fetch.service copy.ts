// type FetchOptions = RequestInit & {
// 	serverSide?: boolean
// 	token?: string
// }

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'localhost:3000'

// export const fetchService = async <T>(endpoint: string, options: FetchOptions = {}): Promise<T> => {
// 	const { token, serverSide, headers, ...restOptions } = options

// 	const defaultHeaders = new Headers()
// 	defaultHeaders.append('Accept', 'application/json')

// 	if (token) {
// 		defaultHeaders.set('Authorization', `Bearer ${token}`)
// 	}

// 	try {
// 		const response = await fetch(`${API_BASE_URL}${endpoint}`, {
// 			headers: defaultHeaders,
// 			...restOptions,
// 			next: {
// 				revalidate: 3600
// 			}
// 		})

// 		if (!response.ok) {
// 			const errorData = await response.json()
// 			throw new Error(`Error: ${errorData.message}`)
// 		}

// 		return response.json() as Promise<T>
// 	} catch (error) {
// 		console.error(`Error en la solicitud HTTP: ${(error as any)?.message}`)
// 		throw error
// 	}
// }
