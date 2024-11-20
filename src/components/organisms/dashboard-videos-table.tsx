'use client'

import { createReel } from '@/actions/dashboard/actions'
import { ReelTypeEnum } from '@/app/enums'
import { IReelResponse } from '@/interfaces'
import { Plus } from 'lucide-react'
import { ReelForm } from '../molecules/reel-form.component'
import { videosTableColumns } from '../molecules/videos-table-columns'
import { Button } from '../ui'
import { CustomSheet } from '../ui/custom-sheet.component'
import { DataTable } from './data-table'

interface DashboardVideosTableProps {
	videos: IReelResponse[]
}

export const DashboardVideosTable = ({ videos }: DashboardVideosTableProps) => {
	return (
		<DataTable
			customBar={
				<CustomSheet
					title="Crear un video"
					trigger={
						<Button variant="outline" className="w-max">
							Crear
							<Plus className="h-4 w-4" />
						</Button>
					}
				>
					{handleOpen => {
						return (
							<ReelForm
								defaultValues={{
									type: ReelTypeEnum.video
								}}
								handleOnSubmit={async data => {
									await createReel(data)
									handleOpen(false)
								}}
							/>
						)
					}}
				</CustomSheet>
			}
			filterBy="title"
			filterPlaceholder="Filter by title"
			columns={videosTableColumns}
			data={videos}
			classNames={{ card: 'grid  space-y-0 gap-y-1' }}
		/>
	)
}
