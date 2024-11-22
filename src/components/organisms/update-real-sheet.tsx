'use client'

import { IReelResponse } from '@/interfaces'
import { ReelFormSchemaType } from '@/schemas'
import { useSocket } from '@/socket/socket.context'
import { Pencil } from 'lucide-react'
import { toast } from 'sonner'
import { ReelForm } from '../molecules'
import { Button, CustomSheet } from '../ui'

export const UpdateReelSheet = ({ defaultValues }: { defaultValues: IReelResponse }) => {
	const { socket } = useSocket()

	const updateReel = (data: ReelFormSchemaType): void => {
		try {
			if (!data.id) {
				toast.error('Error al actualizar el Reel.')
				return
			}

			socket?.emit(
				'reel',
				{
					id: defaultValues.id,
					url: data.url,
					title: data.title,
					description: data.description
				},
				(response: any) => {
					// Callback para manejar la respuesta del servidor
					console.log('Server response:', response)
				}
			)

			// revalidateCacheByPath(['/dashboard/reels', '/reels'])
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<CustomSheet
			title={'Actualizar el Reel'}
			trigger={
				<Button variant="outline" size="icon" className="w-full">
					<Pencil className="h-4 w-4" />
				</Button>
			}
		>
			{handleOpen => {
				return (
					<ReelForm
						handleOnSubmit={async data => {
							updateReel(data)
							handleOpen(false)
						}}
						defaultValues={defaultValues}
					/>
				)
			}}
		</CustomSheet>
	)
}
