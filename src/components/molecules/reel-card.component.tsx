import { IReelResponse } from '@/interfaces'
import { Mdx } from '../ui'
import { Typography } from './typography.component'

interface ReelCardProps {
	reel: IReelResponse
}

export const ReelCard = ({ reel }: ReelCardProps) => {
	const iframeUrl =
		reel?.url ||
		`<iframe allow="fullscreen" allowfullscreen src="https://streamable.com/e/61cwm7?" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe>`

	return (
		<article className="w-full space-y-2">
			<div className="relative h-[450px] w-full overflow-hidden rounded-lg border bg-gray-100">
				<Mdx>{iframeUrl.replace(/<iframe/gi, `<iframe className="absolute top-0 left-0 h-full w-full"`)}</Mdx>
			</div>

			<Typography as="h3" weight="semibold">
				{reel.title}
			</Typography>
			<Typography className="line-clamp-3 min-h-[65px]">{reel.description}</Typography>
		</article>
	)
}
