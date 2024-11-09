import { inter } from '@/app/fonts/fonts'
import { Typography } from '@/components/molecules'
import { Mdx } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function StreamingPage() {
	const iframeUrl = `<iframe
			title="vimeo-player"
			className="absolute top-0 left-0 w-full h-full"
			src="https://player.vimeo.com/video/642263700?h=5bb50fc9fb"
			width="640"
			height="360"
			allowFullScreen
		/>
	`

	const iframeUrlFormat = iframeUrl.replace(/<iframe/gi, `<iframe className="absolute top-0 left-0 w-full h-full"`)!

	return (
		<div className="flex flex-col bg-black relative">
			{/* <picture className="absolute inset-0 -z-10">
				<source media="(min-width: 960px)" srcSet="/assets/2148054088.jpg" />
				<source media="(min-width: 414px)" srcSet="/assets/2148054088.jpg" />
				<Image
					src="/assets/2148054428.jpg"
					alt="Responsive background image"
					layout="fill"
					style={{ objectFit: 'cover' }}
					quality={100}
				/>
			</picture> */}

			<main className="flex-grow container mx-auto py-20 space-y-4">
				<Typography as="h1" className={cn(inter.className, 'text-white p-4 text-center')} size="4xl" weight="semibold">
					Conferencia Magistral en Vivo
				</Typography>

				<div className="bg-black rounded-lg overflow-hidden shadow-lg">
					<div className="relative pt-[56.25%]">
						<Mdx>{iframeUrlFormat}</Mdx>
					</div>
				</div>
			</main>
		</div>
	)
}
