'use client'

import { login } from '@/actions/auth/actions'
import { lusitana } from '@/app/fonts/fonts'
import { SignInFormSchema, SignInFormType } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, AtSign } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { TextField, Typography } from '../molecules'
import { Form } from '../ui'
import { Button } from '../ui/button'

export const SignInForm = () => {
	const form = useForm<SignInFormType>({
		resolver: zodResolver(SignInFormSchema),
		defaultValues: {
			email: ''
		},
		mode: 'onBlur'
	})

	const { handleSubmit, control } = form

	const onSubmit = async (data: SignInFormType) => {
		const errorMessage = await login(data)

		if (errorMessage?.msg) {
			toast.error(errorMessage.msg)
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)} className="w-full">
				<div className="flex-1 rounded-lg bg-gray-50 px-6 py-16">
					<h1 className={`${lusitana.className} mb-3 text-2xl`}>Inicie sesión para continuar.</h1>
					<div className="w-full space-y-4">
						<TextField
							id="email"
							label="Email"
							control={control}
							name="email"
							placeholder="Ingrese su email"
							icon={<AtSign size={18} />}
						/>
					</div>

					<Button className="mt-4 w-full" aria-disabled={true}>
						Sign in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
					</Button>

					<footer className="mt-8">
						<Typography as="p" className="text-center text-sm text-gray-600">
							Sólo si estás registrado en la página podrás acceder a ella, si no, por favor contacta con los
							administradores.
						</Typography>
					</footer>
				</div>
			</form>
		</Form>
	)
}
