'use client'

import { revalidateCacheByPath } from '@/actions/dashboard/actions'
import { ReelTypeEnum } from '@/app/enums'
import { ReelFormSchemaType } from '@/schemas'
import { useSocket } from '@/socket/socket.context'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { ReelForm } from '../molecules'
import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui'

export const CreateReelSheet = () => {
	const [open, setOpen] = useState(false)
	const { socket } = useSocket()

	const createReel = (data: ReelFormSchemaType): void => {
		try {
			socket?.emit(
				'reel',
				{
					url: data.url,
					title: data.title,
					description: data.description
				},
				(response: any) => {
					// Callback para manejar la respuesta del servidor
					console.log('Server response:', response)
				}
			)

			revalidateCacheByPath(['/dashboard/reels', '/reels'])
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" className="w-max">
					Crear
					<Plus className="h-4 w-4" />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Are you absolutely sure?</SheetTitle>
				</SheetHeader>

				<ReelForm
					defaultValues={{
						type: ReelTypeEnum.reel
					}}
					handleOnSubmit={async data => {
						createReel(data)
						setOpen(false)
					}}
				/>
			</SheetContent>
		</Sheet>
	)
}
