import { PottenciaLogo } from '@/components/globals'
import { SignInForm } from '@/components/organisms'
import { RevokeSessionsDialog } from '@/components/organisms/revoked-session-dialog'

export default function LoginPage() {
	return (
		<main className="flex items-center justify-center md:h-screen">
			<div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
				<header className="grid h-20 w-full place-content-center rounded-lg bg-primary p-3 md:h-36">
					<PottenciaLogo />
				</header>

				<section className="mt-6 flex h-full w-full flex-col items-center gap-4">
					<SignInForm />
					<RevokeSessionsDialog />
				</section>
			</div>
		</main>
	)
}
