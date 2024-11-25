'use client'

import { revokeSessions } from '@/actions/auth/actions'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Form
} from '@/components/ui'
import { Button } from '@/components/ui/button'
import { SignInFormSchema, SignInFormType } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { AtSign } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField, Typography } from '../molecules'

export function RevokeSessionsDialog() {
	const [open, setOpen] = useState(false)

	const form = useForm<SignInFormType>({
		resolver: zodResolver(SignInFormSchema),
		defaultValues: {
			email: ''
		},
		mode: 'onBlur'
	})

	const { handleSubmit, control, reset } = form

	const onSubmit = async (data: SignInFormType) => {
		await revokeSessions(data)

		reset()

		setTimeout(() => {
			setOpen(false)
		}, 250)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Typography className="cursor-pointer text-center text-sm text-muted-foreground underline-offset-2 hover:underline">
					Revocar sesiones activas
				</Typography>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Confirmar revocación de sesiones</DialogTitle>
					<DialogDescription>
						Esta acción cerrará todas tus sesiones activas en todos los dispositivos. Asegúrate de que realmente deseas
						proceder.
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<TextField
							id="email"
							label="Email"
							control={control}
							name="email"
							placeholder="Escribe tu email"
							icon={<AtSign size={18} />}
						/>

						<footer>
							<Button aria-disabled={true}>Confirmar</Button>
						</footer>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
