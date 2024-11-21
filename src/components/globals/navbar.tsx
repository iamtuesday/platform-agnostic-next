'use client'

import { logout } from '@/actions/auth/actions'
import { Button } from '@/components/ui/button'
import { Session } from '@/lib/auth/definitions'
import { cn } from '@/lib/utils'
import { AlignLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { PottenciaLogo } from './pottencia-logo'

const menuItems = [
	{ href: '/#agenda', label: 'Agenda' },
	{ href: '/#mapa', label: 'Mapa' },
	{ href: '/#videos', label: 'Videos' },
	{ href: '/reels', label: 'Reels' }
]
interface NavigationProps {
	session: Session | null
}

export const Navigation = ({ session }: NavigationProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

	const redirectToLogin = () => {
		router.push('/signin')
	}

	const MenuItems = () => (
		<>
			{menuItems.map(item => (
				<li key={item.href}>
					<Link
						href={item.href}
						className={cn('text-white transition-colors hover:text-white/50')}
						// className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
						onClick={() => setIsOpen(false)}
					>
						{item.label}
					</Link>
				</li>
			))}
		</>
	)

	const LiveButton = () => (
		<Link
			href="/streaming"
			className="block w-max rounded-full bg-[#f50000] px-6 text-lg font-semibold uppercase text-white"
		>
			Live
		</Link>
	)

	const sessionExist = session?.userId

	return (
		<nav
			className={cn(
				'sticky top-0 z-50 shadow-lg transition-colors duration-300',
				isOpen ? 'bg-foreground' : 'bg-black'
			)}
		>
			<div className="relative mx-auto max-w-6xl px-4 laptop:px-0">
				<div
					className={cn(
						'flex items-center justify-between border-b border-transparent py-3 laptop:py-4',
						isOpen ? 'border-b border-[#333]' : ''
					)}
				>
					<header className="flex space-x-7">
						<Link href="/" className="flex items-center">
							<PottenciaLogo className="max-w-[150px]" />
						</Link>
					</header>

					<section className="hidden items-center space-x-1 md:flex">
						<ul className="flex items-center gap-x-[32px]">
							{!!sessionExist ? (
								<>
									<li>
										<LiveButton />
									</li>

									<MenuItems />
								</>
							) : null}

							<li>
								{/* auth buttons */}
								{!!sessionExist ? (
									<Button
										onClick={async () => {
											const errorMessage = await logout()

											if (errorMessage) {
												toast.error(errorMessage.msg)
												return
											}
										}}
									>
										Log Out
									</Button>
								) : (
									<Button onClick={() => redirectToLogin()}>Sign In</Button>
								)}
							</li>
						</ul>
					</section>

					{!!sessionExist ? (
						<button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
							<AlignLeft size="26" />
						</button>
					) : (
						<Button className="md:hidden" onClick={() => redirectToLogin()}>
							Sign In
						</Button>
					)}
				</div>
			</div>

			{/* Sheet */}
			{!!sessionExist ? (
				<section
					className={cn(
						isOpen ? 'h-[350px]' : 'h-0',
						'absolute z-10 max-h-max w-full overflow-hidden border-b border-[#333] bg-foreground text-white transition-[height] duration-200 md:hidden'
					)}
				>
					<nav className="flex flex-col px-4 py-8">
						<ul className="flex flex-col space-y-6">
							<li>
								<LiveButton />
							</li>

							<MenuItems />

							<li>
								{!!session?.userId ? (
									<Button
										onClick={async () => {
											const errorMessage = await logout()

											if (errorMessage) {
												toast.error(errorMessage.msg)
												return
											}

											setIsOpen(false)
										}}
									>
										Log Out
									</Button>
								) : (
									<Button onClick={() => redirectToLogin()}>Sign In</Button>
								)}
							</li>
						</ul>
					</nav>
				</section>
			) : null}
		</nav>
	)
}
