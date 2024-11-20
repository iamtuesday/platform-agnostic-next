'use client'

import { IReelResponse } from '@/interfaces'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Pencil, Trash2 } from 'lucide-react'
import { Button } from '../ui'
import { CustomSheet } from '../ui/custom-sheet.component'
import { ReelForm } from './reel-form.component'
import { Typography } from './typography.component'

export const videosTableColumns: ColumnDef<IReelResponse>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant="outline"
					className="gap-2 rounded-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					<Typography size="sm" as="span">
						Titulo
					</Typography>
					<ArrowUpDown className="h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => {
			return (
				<Typography size="sm" className="">
					{row.getValue('title')}
				</Typography>
			)
		}
	},
	{
		accessorKey: 'url',
		header: ({ column }) => {
			return (
				<Button
					variant="outline"
					className="gap-2 rounded-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Url
					<ArrowUpDown className="h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<Typography size="sm" className="truncate">
				{row.getValue('url')}
			</Typography>
		)
	},

	{
		accessorKey: 'description',
		header: ({ column }) => {
			return (
				<Button
					variant="outline"
					className="gap-2 rounded-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Descripción
					<ArrowUpDown className="h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => {
			return (
				<Typography size="sm">
					<Typography weight="semibold" size="sm" as="span" className="pr-2 laptop:hidden">
						Descripción
					</Typography>
					{row.getValue('description')}
				</Typography>
			)
		}
	},

	{
		id: 'actions',
		header: () => <Typography size="sm">Acciones</Typography>,
		cell: ({ row: { original } }) => {
			return (
				<div className="flex w-full gap-2">
					<Button variant="outline" size="icon" className="w-full">
						<Trash2 className="h-4 w-4" />
					</Button>

					<CustomSheet
						title="Actualizar el video"
						trigger={
							<Button variant="outline" size="icon" className="w-full">
								<Pencil className="h-4 w-4" />
							</Button>
						}
					>
						{handleOpen => {
							return <ReelForm handleDialog={() => handleOpen(false)} defaultValues={original} />
						}}
					</CustomSheet>
				</div>
			)
		}
	}
]
