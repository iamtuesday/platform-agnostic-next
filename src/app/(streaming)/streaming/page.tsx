import { getStreamingVideo } from '@/actions/dashboard/actions'
import { Typography } from '@/components/molecules'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default async function StreamingPage() {
	const video = await getStreamingVideo()

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

			<main className="relative z-30 mx-auto flex h-full w-full max-w-6xl flex-col place-content-center space-y-6 px-4 py-10 laptop:px-0">
				<header>
					<Typography as="h1" className={cn('text-center text-white')} size="4xl" weight="semibold">
						Congreso Internacional de Inteligencia Artificial 2024
					</Typography>
				</header>

				<section className="overflow-hidden rounded-lg bg-black shadow-lg">
					<iframe
						src={
							video?.url ||
							'https://player.vimeo.com/video/1029393916?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
						}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="aspect-video h-full w-full"
					/>
				</section>
			</main>
		</div>
	)
}
