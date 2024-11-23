'use client'

import { cn } from '@/lib/utils'
import { AddToCalendarButton } from 'add-to-calendar-button-react'
import { Typography } from '../molecules'

export const HomeCalendar = () => {
	return (
		<section className="bg-black py-10">
			<div className="container flex flex-col items-center space-y-6">
				<Typography
					as="h2"
					className={cn(
						'bg-gradient-to-t from-[#B28AF2] to-[#3B1FA5] bg-clip-text text-center font-bold text-transparent'
					)}
					size="8xl"
				>
					28 Noviembre
				</Typography>

				<Typography as="p" className={cn('mt-4 text-center text-white')} weight="semibold" size="2xl">
					¡No olvides tu cita!
				</Typography>

				<div className="inline-block">
					<AddToCalendarButton
						label="Añadir al Calendario"
						name="Congreso Internacional de Inteligencia Artificial 2024"
						description="¡Prepárate para vivir una experiencia única en el Congreso de Inteligencia Articial
												más innovador de México! Durante tres días, en tres ciudades, tendrás la
												oportunidad de aprender de expertos, conectar con empresas líderes y participar
												en actividades diseñadas para expandir tu conocimiento en IA."
						options={['Google', 'Apple']}
						startDate="2024-11-26"
						endDate="2024-11-28"
						timeZone="America/Mexico_City"
					/>
				</div>
			</div>
		</section>
	)
}
