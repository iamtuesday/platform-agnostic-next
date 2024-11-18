type FetchResponse<T> = [T | null, Error | null]

export interface FetchOptions {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
	body?: BodyInit
	headers?: HeadersInit
	params?: URLSearchParams | Record<string, string>
	token?: string
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'localhost:3000'

const contentTypes: Record<string, <T>(response: Response) => Promise<T>> = {
	'APPLICATION/JSON': <T>(response: Response) => response.json() as Promise<T>,
	'TEXT/': <T>(response: Response) => response.text() as Promise<T>,
	'APPLICATION/OCTET-STREAM': <T>(response: Response) => response.arrayBuffer() as Promise<T>,
	'APPLICATION/PDF': <T>(response: Response) => response.blob() as Promise<T>
}

export const fetchService = async <T>(url: string, options: FetchOptions): Promise<FetchResponse<T>> => {
	const { method, body, headers = {}, params, token } = options

	try {
		// Construcción de la URL con parámetros
		let apiUrl = `${API_BASE_URL}${url}`
		if (params) {
			const queryParams = params instanceof URLSearchParams ? params.toString() : new URLSearchParams(params).toString()
			apiUrl += `?${queryParams}`
		}

		// Configuración de la solicitud

		const defaultHeaders = new Headers()

		if (token) {
			defaultHeaders.set('Authorization', `Bearer ${token}`)
		}

		const requestOptions: RequestInit = {
			method,
			headers: { ...defaultHeaders, ...headers }
		}

		// Manejar el método POST y PUT
		if (method === 'POST' || method === 'PUT') {
			if (!body) {
				throw new Error(`El cuerpo es obligatorio para las solicitudes con ${method}`)
			}

			requestOptions.body = body
		}

		// Eliminar cuerpo en GET o DELETE
		if (method === 'DELETE' || method === 'GET') {
			delete requestOptions.body
		}

		// Realizar la solicitud
		const response = await fetch(apiUrl, requestOptions)

		// Si la respuesta no es exitosa
		if (!response.ok) {
			throw new Error(`${response.statusText}`)
		}

		// Identificar el tipo de contenido
		const contentType = (response.headers.get('Content-Type') || '').split(';')[0].trim()

		// Manejo de la respuesta según el tipo de contenido
		const handler = contentTypes[contentType.toUpperCase()]

		let data: T | null = null

		if (handler) {
			data = await handler(response)
		} else {
			data = (await response.text()) as T
		}

		return [data, null]
	} catch (err) {
		console.error(err)
		return [null, err as Error]
	}
}
