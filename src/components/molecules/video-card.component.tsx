import { Card, CardContent, CardHeader, CardTitle, Mdx } from '@/components/ui'
import { IVideoCard } from '@/interfaces/video-card.interface'

export const VideoCard = ({ title, videoUrl }: IVideoCard) => {
	const iframeUrlFormat = videoUrl
		? videoUrl
		: `<iframe src="https://player.vimeo.com/video/1029393916?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Presentación Pottencia"></iframe>`
	return (
		<Card className="w-full overflow-hidden rounded-none border-none shadow-none">
			<CardHeader className="p-0">
				<div className="relative h-[300px] w-full pt-[56.25%]">
					<Mdx>{iframeUrlFormat.replace(/<iframe/gi, `<iframe className="aspect-video h-full w-full"`)}</Mdx>
				</div>
			</CardHeader>
			<CardContent className="bg-black p-4">
				<CardTitle className="mb-2 text-[28px] text-lg text-white">{title}</CardTitle>
			</CardContent>
		</Card>
	)
}
