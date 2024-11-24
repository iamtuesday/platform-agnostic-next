import { getReels } from '@/actions/dashboard/actions'
import { Typography } from '@/components/molecules'
import { reelsTableColumns } from '@/components/molecules/reels-table-columns'
import { CreateReelSheet, DataTable } from '@/components/organisms'
import { mapReelOutputToReelTable } from '@/mappers/reel-output-to-reel-table.map'

export default async function DashboardPage() {
	const params = {
		type: 'reel'
	}

	const videos = await getReels(params)

	const mappedVideos = videos?.map(mapReelOutputToReelTable)

	return (
		<main className="min-h-[70vh] space-y-4">
			<Typography size="xl" weight="semibold">
				Reels
			</Typography>

			<DataTable
				filterBy="title"
				filterPlaceholder="Filtrar por el título"
				customBar={<CreateReelSheet />}
				columns={reelsTableColumns}
				data={mappedVideos || []}
			/>
		</main>
	)
}
