import { IReelResponse } from '@/interfaces'

interface ReelCardProps {
	reel: IReelResponse
}

export const ReelCard = ({ reel }: ReelCardProps) => {
	return (
		<article className="flex aspect-[9/16] h-auto items-center justify-center overflow-hidden rounded-lg border">
			<iframe className="h-full w-full object-contain" src={reel.url}></iframe>
		</article>
	)
}
