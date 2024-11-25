import { PottenciaLogo } from '@/components/globals'
import { SignInForm } from '@/components/organisms'

export default function LoginPage() {
	return (
		<main className="flex items-center justify-center md:h-screen">
			<div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
				<div className="grid h-20 w-full place-content-center rounded-lg bg-primary p-3 md:h-36">
					<PottenciaLogo />
				</div>
				<SignInForm />
			</div>
		</main>
	)
}
