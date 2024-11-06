import { lusitana } from '@/app/fonts/fonts'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import imageUrl from '../../../public/assets/potencia-img-location.png'
import { Typography } from '../molecules'

export const HomeLocation = () => {
	return (
		<div className="py-10 laptop:py-20 bg-black">
			<div className="container space-y-10">
				<Typography
					as="h2"
					className={cn(
						'text-center font-bold bg-gradient-to-t from-[#B28AF2] to-[#3B1FA5] bg-clip-text text-transparent',
						lusitana.className
					)}
					size="6xl"
				>
					Mapa del Evento
				</Typography>

				<figure className="w-full h-auto rounded-none">
					<Image
						src={imageUrl}
						alt="Imagen de ejemplo"
						layout="responsive"
						width={1600}
						height={900}
						sizes="(max-width: 768px) 100vw, 
                                (max-width: 1024px) 50vw, 
                                33vw"
						className="w-full h-auto object-cover"
						quality={100}
					/>
				</figure>
			</div>
		</div>
	)
}
