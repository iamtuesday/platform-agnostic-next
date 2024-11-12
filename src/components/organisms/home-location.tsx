import { cn } from '@/lib/utils'
import Image from 'next/image'
import imageUrl from '../../../public/assets/potencia-img-location.png'
import { Typography } from '../molecules'

export const HomeLocation = () => {
	return (
		<section className="bg-black py-10 laptop:pt-36">
			<div className="container space-y-10" id="mapa">
				<header>
					<Typography
						as="h2"
						className={cn(
							'bg-gradient-to-t from-[#B28AF2] to-[#3B1FA5] bg-clip-text text-center font-bold text-transparent'
						)}
						size="6xl"
					>
						Mapa del Evento
					</Typography>
				</header>

				<figure className="h-auto w-full">
					<Image
						src={imageUrl}
						alt="Imagen de ejemplo"
						width={1600}
						height={900}
						className="aspect-[261/139] h-auto w-full object-cover"
					/>
				</figure>
			</div>
		</section>
	)
}
