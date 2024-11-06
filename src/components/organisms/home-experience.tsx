import { lusitana } from '@/app/fonts/fonts'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import imageUrl from '../../../public/assets/potencia-img-experience.png'
import { Typography } from '../molecules'
import { Button } from '../ui'

export default function HomeExperience() {
	return (
		<div className="container py-10 laptop:py-20">
			<div className="grid grid-cols-1 laptop:grid-cols-[auto_1fr] gap-10 laptop:gap-20 items-center">
				<Card className="h-auto w-full laptop:w-[662px] rounded-3xl">
					<CardContent className="p-0">
						<Image
							src={imageUrl}
							alt="Imagen de ejemplo"
							width={400}
							height={400}
							className="w-full h-auto object-cover rounded-3xl"
						/>
					</CardContent>
				</Card>

				<div className="space-y-4">
					<Typography as="h2" className={cn('text-[#33333]', lusitana.className)} size="6xl" weight="bold">
						Como se esta viviendo el Potencia
					</Typography>
					<Typography as="p" className={cn('text-[#888888]', lusitana.className)} size="3xl" weight="bold">
						Vive de cerca la experiencia Potencia con IA
					</Typography>

					<div className="inline-block">
						<Button variant="default" className="w-full max-w-xs">
							Videos Feed
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
