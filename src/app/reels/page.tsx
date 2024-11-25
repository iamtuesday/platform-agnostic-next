import { getReels } from '@/actions/dashboard/actions'
import { ReelCard, Typography } from '@/components/molecules'
import { Separator } from '@/components/ui'
import { mapReelOutputToReelTable } from '@/mappers/reel-output-to-reel-table.map'

export default async function ReelsPage() {
	const params = {
		type: 'reel'
	}

	const videos = await getReels(params)

	const mappedVideos = videos?.map(mapReelOutputToReelTable)

	return (
		<div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 laptop:px-0">
			<Typography size="4xl" as="h1" weight="semibold">
				Reels
			</Typography>

			<Separator />

			<main className="grid gap-4 phone:grid-cols-[repeat(auto-fill,minmax(256px,1fr))]">
				{mappedVideos?.map(video => {
					return <ReelCard key={video.id} reel={video} />
				})}
			</main>
		</div>
	)
}
