import { IReelResponse } from '@/interfaces'
import { Typography } from './typography.component'

interface ReelCardProps {
	reel: IReelResponse
}

export const ReelCard = ({ reel }: ReelCardProps) => {
	return (
		<article className="w-full space-y-2">
			<div className="flex aspect-[9/16] h-full max-h-[466px] w-full items-center justify-center overflow-hidden rounded-lg border">
				<iframe className="h-full w-full object-contain" src={reel.url}></iframe>
			</div>

			<Typography as="h3" weight="semibold">
				{reel.title}
			</Typography>
			<Typography className="line-clamp-3 min-h-[65px]">{reel.description}</Typography>
		</article>
	)
}
