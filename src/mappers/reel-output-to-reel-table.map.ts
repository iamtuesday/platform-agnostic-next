import { IReelResponse } from '@/interfaces'

export const mapReelOutputToReelTable = (userInfo: IReelResponse): IReelResponse => {
	return {
		id: userInfo.id,
		url: userInfo.url || 'desconocido',
		title: userInfo.title || 'desconocido',
		type: userInfo.type || 'desconocido',
		description: userInfo.description || 'Sin descripción'
	}
}
