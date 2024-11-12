import { cn } from '@/lib/utils'
import Image from 'next/image'
import imageUrl from '../../../public/assets/potencia-img-experience.png'
import { Typography } from '../molecules'
import { Button } from '../ui'

export default function HomeExperience() {
	return (
		<section className="py-10 laptop:py-20">
			<div className="grid items-center gap-x-20 gap-y-10 overflow-hidden px-10 tablet:grid-cols-2 tablet:justify-items-center laptop:gap-x-36">
				<figure className="h-auto max-h-[300px] w-full overflow-hidden rounded-3xl">
					<Image
						src={imageUrl}
						alt="Imagen de ejemplo"
						width={400}
						height={400}
						className="h-full w-full rounded-3xl object-cover object-center"
					/>
				</figure>

				<section className="space-y-4">
					<header className="space-y-4">
						<Typography as="h2" className={cn('text-[#333333]')} size="5xl" weight="bold">
							Como se esta viviendo el Potencia
						</Typography>
						<Typography as="p" className={cn('text-[#888888]')} size="2xl" weight="medium">
							Vive de cerca la experiencia Potencia con IA
						</Typography>
					</header>

					<footer className="inline-block">
						<Button variant="default" size="lg">
							Videos Feed
						</Button>
					</footer>
				</section>
			</div>
		</section>
	)
}
