import { ReelTypeEnum } from '@/app/enums'

export interface IReelResponse {
	id: string
	url: string
	title: string
	type: ReelTypeEnum
	description: string
}
