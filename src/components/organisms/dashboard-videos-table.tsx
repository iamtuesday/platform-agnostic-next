'use client'

import { ReelTypeEnum } from '@/app/enums'
import { ReelFormSchemaType } from '@/schemas'
import { Plus } from 'lucide-react'
import { ReelForm } from '../molecules/reel-form.component'
import { Button } from '../ui'
import { CustomSheet } from '../ui/custom-sheet.component'
import { DataTable, DataTableProps } from './data-table'

interface DashboardVideosTableProps<TData, TValue> extends DataTableProps<TData, TValue> {
	reelType: ReelTypeEnum
	handleCreateSubmit: (data: ReelFormSchemaType) => Promise<void>
}

export const DashboardVideosTable = <TData, TValue>({
	reelType,
	columns,
	data,
	handleCreateSubmit
}: DashboardVideosTableProps<TData, TValue>) => {
	return (
		<DataTable
			customBar={
				<CustomSheet
					title={'Crear un ' + reelType}
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
									type: reelType
								}}
								handleOnSubmit={async data => {
									// Function para controlar el submit del reel-form
									if (handleCreateSubmit) await handleCreateSubmit(data)
									handleOpen(false)
								}}
							/>
						)
					}}
				</CustomSheet>
			}
			filterBy="title"
			filterPlaceholder="Filter by title"
			columns={columns}
			data={data}
			classNames={{ card: 'grid  space-y-0 gap-y-1' }}
		/>
	)
}
