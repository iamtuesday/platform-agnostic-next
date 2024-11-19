'use server'

import { FetchOptions, fetchService } from '@/lib/http'
import { VideoFormType } from '@/schemas'
import { revalidateTag } from 'next/cache'

interface IVideoResponse {
	id: string
	url: string
}

export const updateVideo = async (videoFormData: VideoFormType): Promise<void> => {
	const API_ENDPOINT = '/video'

	const options: FetchOptions = {
		method: 'PUT',
		body: JSON.stringify(videoFormData),
		headers: {
			'Content-Type': 'application/json'
		}
	}

	await fetchService<IVideoResponse>(API_ENDPOINT, options)

	revalidateTag('streaming-video')
}

export const getVideo = async (): Promise<IVideoResponse | null> => {
	const API_ENDPOINT = `/video`

	const options: FetchOptions = {
		method: 'GET',
		next: {
			revalidate: 1,
			tags: ['streaming-video']
		}
	}

	const [video, error] = await fetchService<IVideoResponse>(API_ENDPOINT, options)

	if (error || !video) return null

	return video
}
