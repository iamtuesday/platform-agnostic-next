import { Typography } from '@/components/molecules'
import { VideoCard } from '@/components/molecules/video-card.component'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import { inter } from '../fonts/fonts'

export default async function VideosPage() {
	return (
		<main className="min-h-screen bg-black py-10">
			<div className="container space-y-10">
				<div className="flex flex-col gap-6 items-center">
					<div>
						<Button variant="unstyled" disabled>
							Educación Continua
						</Button>
					</div>

					<Typography as="h1" className={cn('text-white', inter.className)} size="5xl" weight="normal">
						<span className="text-[#926EFF]">Descubre la IA </span>de la mano de los expertos
					</Typography>
				</div>

				<VideoCard id="1" title="Título del video" videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" />
			</div>
		</main>
	)
}
