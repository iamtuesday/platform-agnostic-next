import { getReels } from '@/actions/dashboard/actions'
import { ReelCard, Typography } from '@/components/molecules'
import { IReelResponse } from '@/interfaces'
import { ReelTypeEnum } from '../enums'

export default async function ReelsPage() {
	const params = {
		type: 'reel'
	}

	const videos = await getReels(params)

	// const mappedVideos = videos?.map(mapReelOutputToReelTable)

	const reels: IReelResponse[] = [
		{
			id: '673d624f63ae3d64967343ea',
			url: 'https://www.youtube.com/embed/smPos0mJvh8',
			title: 'Meet the new Framer  3',
			type: ReelTypeEnum.video,
			description: ''
		},
		{
			id: '673e193584b76844db48d894',
			url: 'https://www.youtube.com/embed/smPos0mJvh8',
			title: 'Meet the new Framer  3',
			type: ReelTypeEnum.video,
			description: 'Sin descripción'
		},
		{
			id: '673e20ad84b76844db48d895',
			url: 'https://www.youtube.com/embed/smPos0mJvh8',
			title: 'Meet the new Framer 2',
			type: ReelTypeEnum.video,
			description: 'Sin descripción'
		},
		{
			id: '673e60df84b76844db48d896',
			url: 'https://www.youtube.com/embed/smPos0mJvh8',
			title: 'Meet the new Framer  3',
			type: ReelTypeEnum.video,
			description: ''
		},
		{
			id: '673e60e384b76844db48d897',
			url: 'https://www.youtube.com/embed/smPos0mJvh8',
			title: 'Meet the new Framer  3',
			type: ReelTypeEnum.video,
			description: ''
		},
		{
			id: '673e60e584b76844db48d898',
			url: 'https://www.youtube.com/embed/smPos0mJvh8',
			title: 'Meet the new Framer  3',
			type: ReelTypeEnum.video,
			description: ''
		}
	]

	return (
		<div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 tablet:px-0">
			<Typography size="4xl" as="h1" weight="semibold">
				Reels
			</Typography>

			<main className="grid gap-4 phone:grid-cols-[repeat(auto-fill,minmax(256px,1fr))]">
				{reels?.map(video => {
					return <ReelCard key={video.id} reel={video} />
				})}
			</main>
		</div>
	)
}
