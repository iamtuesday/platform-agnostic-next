import { IReelResponse } from '@/interfaces'
import { Mdx } from '../ui'
import { Typography } from './typography.component'

interface ReelCardProps {
	reel: IReelResponse
}

export const ReelCard = ({ reel }: ReelCardProps) => {
	const iframeUrlFormat = reel?.url ? reel.url : '<iframe></iframe>'

	const sanitizedIframe = iframeUrlFormat
		.replace(/style="[^"]*"/gi, '')
		.replace(/<iframe/gi, `<iframe className="aspect-[9/16] bg-transparent h-full w-full"`)

	return (
		<article className="w-full space-y-2">
			<div className="relative h-[450px] w-full overflow-hidden rounded-lg border bg-gray-100">
				<Mdx className="h-full w-full bg-black">{sanitizedIframe}</Mdx>
			</div>

			<Typography as="h3" weight="semibold">
				{reel.title}
			</Typography>
			<Typography className="line-clamp-3 min-h-[65px]">{reel.description}</Typography>
		</article>
	)
}
