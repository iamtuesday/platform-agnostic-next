'use client'

import { lusitana } from '@/app/fonts/fonts'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Typography } from './typography.component'

export default function HomeCalendar() {
	return (
		<div className="bg-black py-20">
			<div className="container space-y-6 flex flex-col items-center">
				<Typography
					as="h2"
					className={cn(
						'text-center font-bold bg-gradient-to-t from-[#B28AF2] to-[#3B1FA5] bg-clip-text text-transparent',
						lusitana.className
					)}
					size="7xl"
				>
					28 Noviembre
				</Typography>

				<Typography
					as="p"
					className={cn('text-center text-white  mt-4', lusitana.className)}
					weight="semibold"
					size="2xl"
				>
					¡No olvides tu cita!
				</Typography>

				<div className="inline-block">
					<Button variant="outline" className="w-full max-w-xs">
						Añadir al Calendario
					</Button>
				</div>
			</div>
		</div>
	)
}
