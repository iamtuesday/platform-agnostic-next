import { Typography } from '@/components/molecules'
import { Button, buttonVariants } from '@/components/ui'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function StreamingPage() {
	return (
		<div className="relative flex flex-col bg-black pb-16">
			<Image
				src="/assets/pottencia-dark-bg.avif"
				alt="Responsive background image"
				className="object-cover"
				layout="fill"
			/>
			<div
				className="absolute left-0 right-0 top-0 h-[40%]"
				style={{
					background: 'linear-gradient(180deg,#000000 0%,rgba(0,0,0,0) 100%)'
				}}
			></div>
			<div className="absolute top-0 h-full w-full bg-[#000000d9]" />
			<div
				className="absolute bottom-0 left-0 right-0 h-[40%]"
				style={{
					background: 'linear-gradient(180deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 100%)'
				}}
			></div>

			<main className="relative z-30 mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-y-6 px-4 py-10 laptop:px-0">
				<Button variant="unstyled" disabled>
					404 Error
				</Button>

				<Typography as="h1" className={cn('text-center text-white')} size="4xl" weight="semibold">
					Página no encontrada
				</Typography>

				<Typography className={cn('text-center text-white')}>La Pagína que desea visitar no existe</Typography>

				<Link href="/" className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'rounded-full text-base')}>
					Regresar a la página principal <ArrowUpRight />
				</Link>
			</main>
		</div>
	)
}
