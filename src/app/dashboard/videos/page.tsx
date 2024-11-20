import { getReels } from '@/actions/dashboard/actions'
import { videosTableColumns } from '@/components/molecules/videos-table-columns'
import { DataTable } from '@/components/organisms'
import { mapReelOutputToReelTable } from '@/mappers/reel-output-to-reel-table.map'

export default async function VideosPage() {
	const params = {
		type: 'video'
	}

	const videos = await getReels(params)

	const mappedVideos = videos?.map(mapReelOutputToReelTable)

	return (
		<div className="min-h-[70vh]">
			<DataTable
				filterBy="title"
				filterPlaceholder="Filter by title"
				columns={videosTableColumns}
				data={mappedVideos || []}
				classNames={{ card: 'grid  space-y-0 gap-y-1' }}
			/>
		</div>
	)
}
