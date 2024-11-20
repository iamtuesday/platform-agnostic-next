import { createReel, getReels } from '@/actions/dashboard/actions'
import { ReelTypeEnum } from '@/app/enums'
import { Typography } from '@/components/molecules'
import { videosTableColumns } from '@/components/molecules/videos-table-columns'
import { DashboardVideosTable } from '@/components/organisms'
import { mapReelOutputToReelTable } from '@/mappers/reel-output-to-reel-table.map'

export default async function VideosPage() {
	const params = {
		type: 'video'
	}

	const videos = await getReels(params)

	const mappedVideos = videos?.map(mapReelOutputToReelTable)

	return (
		<main className="min-h-[70vh] space-y-4">
			<Typography size="xl" weight="semibold">
				Videos
			</Typography>

			<DashboardVideosTable
				handleCreateSubmit={createReel}
				reelType={ReelTypeEnum.video}
				columns={videosTableColumns}
				data={mappedVideos || []}
			/>
		</main>
	)
}
