'use client'

import { cn } from '@/lib/utils'
import AutoHeight from 'embla-carousel-auto-height'
import { Download } from 'lucide-react'
import { motion } from 'motion/react'
import { AnimatedTitle, Typography } from '../molecules'
import { buttonVariants, Carousel, CarouselContent, CarouselDotsButton, CarouselItem } from '../ui'

const schedules = [
	{
		title: '26 Noviembre - Saltillo (UANE, Campus Saltillo)',
		schedules: [
			{
				id: '1',
				schedule: '8:30 AM - 9:00 AM',
				title: 'Ceremonia de inauguración',
				description:
					'**Empresas participantes en stands:** General Motors México, Danfoss, Grupo Alfa, Magna Internacional, Yanfeng, Santander, Pearson, Suárez Zavala Soluciones Industriales y Servicio Nacional de Empleo.'
			},
			{
				id: '2',
				schedule: '9:00 AM - 10:00 AM',
				title: 'Conferencia magistral de inicio',
				description:
					'**Tema:** IA responsable: principios y prácticas en el desarrollo tecnológico. **Impartida por:** Lauro García, Head of Education para LATAM en Google Cloud.'
			},
			{
				id: '3',
				schedule: '10:30 AM - 11:30 AM',
				title: 'Panel de discusión en Ciencias Jurídicas',
				description:
					'**Tema:** IA y justicia: Aplicaciones en el Sistema Judicial y sus implicaciones. **Moderado por:** Universidad Cooperativa de Colombia y Tribunal de Justicia Administrativa de Coahuila.'
			},
			{
				id: '4',
				schedule: '11:00 AM - 11:40 AM',
				title: 'Taller',
				description:
					'**Tema:** Navegando el aprendizaje en la Era Digital: Estrategias y herramientas para estudiantes. **Impartido por:** Bedu.'
			},
			{
				id: '5',
				schedule: '12:00 PM - 12:40 PM',
				title: 'Taller',
				description:
					'**Tema:** Creación de contenidos con IA: Potencia tu presencia en RRSS. **Impartido por:** Daniel Ordaz, CEO de Sendos.ai.'
			},
			{
				id: '6',
				schedule: '6:00 PM - 7:00 PM',
				title: 'Panel de discusión en Ciencias Sociales',
				description:
					'**Tema:** IA y el Futuro del Trabajo: Transformaciones y Desafíos Laborales. **Participación de:** Lottus Education y expertos en liderazgo profesional.'
			},
			{
				id: '7',
				schedule: '7:00 PM - 7:30 PM',
				title: 'Taller',
				description:
					'**Tema:** El profesional del mañana: Cómo prepararte para un futuro con IA. **Impartido por:** UANE.'
			},
			{
				id: '8',
				schedule: '7:30 PM - 8:30 PM',
				title: 'Conferencia magistral de cierre',
				description:
					'**Tema:** Potencia tus proyectos con la nube: IA y Machine Learning al alcance de todos. **Impartido por:** José Lorenzo Cuencar, Sr. Solutions Architect en AWS.'
			}
		]
	},
	{
		title: '27 Noviembre - Guadalajara (Palcco)',
		schedules: [
			{
				id: '1',
				schedule: '8:30 AM - 9:00 AM',
				title: 'Ceremonia de inauguración',
				description:
					'**Empresas participantes en stands:** Intel Guadalajara Design Center, Continental Automotive Guadalajara, HP Inc., BYD, Grupo Salinas, Santander y Talent + UTEG.'
			},
			{
				id: '2',
				schedule: '9:00 AM - 10:00 AM',
				title: 'Conferencia magistral de inicio',
				description:
					'**Tema:** El impacto de la IA en la transformación digital de las organizaciones. **Impartida por:** Alfonso Sandoval, Especialista de Azure en Microsoft.'
			},
			{
				id: '3',
				schedule: '10:30 AM - 11:30 AM',
				title: 'Panel de discusión en Diseño y Arquitectura',
				description:
					'**Tema:** Simulación y Modelado en Arquitectura con IA. **Participación de:** Universidad de las Américas Puebla e IXA IA.'
			},
			{
				id: '4',
				schedule: '11:00 AM - 11:40 AM',
				title: 'Taller',
				description:
					'**Tema:** Creación de contenidos con IA: Potencia tu presencia en RRSS. **Impartido por:** Daniel Ordaz, CEO de Sendos.ai.'
			},
			{
				id: '5',
				schedule: '12:00 PM - 12:40 PM',
				title: 'Taller',
				description:
					'**Tema:** Potencia tus proyectos con la nube: IA y Machine Learning al alcance de todos. **Impartido por:** AWS.'
			},
			{
				id: '6',
				schedule: '3:00 PM - 4:00 PM',
				title: 'Panel de discusión en Diseño y Tecnología',
				description:
					'**Tema:** IA y el Futuro del Diseño: Nuevas oportunidades con IA. **Participación de:** Oracle y expertos en innovación.'
			},
			{
				id: '7',
				schedule: '4:00 PM - 5:00 PM',
				title: 'Conferencia Magistral de cierre',
				description:
					'**Tema:** Seguridad en la Era de la IA: Desafíos y soluciones en infraestructuras de red. **Impartida por:** Fabiola Olvera, Systems Engineer en CISCO.'
			}
		]
	},
	{
		title: '28 Noviembre - Ciudad de México (Papalote Museo del Niño)',
		schedules: [
			{
				id: '1',
				schedule: '8:30 AM - 9:00 AM',
				title: 'Ceremonia de inauguración',
				description:
					'**Empresas participantes en stands:** Microsoft México, IBM México, KIO Networks, Grupo Fórmula, Alto México, Pearson, Bedu y Santander Universia.'
			},
			{
				id: '2',
				schedule: '9:00 AM - 10:00 AM',
				title: 'Conferencia magistral de inicio',
				description: '**Tema:** IA en Acción: Cómo la IA mejora nuestra vida cotidiana. **Impartido por:** Google.'
			},
			{
				id: '3',
				schedule: '10:00 AM - 11:00 AM',
				title: 'Presentación de proyectos finales',
				description: '**Evento:** Competición DesafÍA by PottencIA.'
			},
			{
				id: '4',
				schedule: '11:00 AM - 11:40 AM',
				title: 'Taller',
				description:
					'**Tema:** Predicción de Enfermedades con IA: De la Prevención a la Intervención. **Impartido por:** Neuron Health y SofIWellness.'
			},
			{
				id: '5',
				schedule: '12:00 PM - 12:40 PM',
				title: 'Panel de discusión en Tecnología y Robótica',
				description:
					'**Tema:** Inteligencia Artificial y Robótica: La Próxima Revolución Industrial. **Moderado por:** Grupo Salinas.'
			},
			{
				id: '6',
				schedule: '3:00 PM - 3:40 PM',
				title: 'Taller',
				description:
					'**Tema:** El profesional del mañana: Cómo prepararte para un futuro con IA. **Impartido por:** Microsoft.'
			},
			{
				id: '7',
				schedule: '5:00 PM - 5:30 PM',
				title: 'Premiación',
				description: '**Evento:** Premiación de los ganadores del concurso DesafÍA.'
			},
			{
				id: '8',
				schedule: '5:30 PM - 6:30 PM',
				title: 'Conferencia magistral de cierre',
				description:
					'**Tema:** IA y el Trabajo: Herramientas y Habilidades para el Futuro. **Impartido por:** Microsoft.'
			}
		]
	}
]

const fadeInUpAnimationVariants = {
	initial: {
		opacity: 0,
		y: 50
	},
	animate: (index: number) => {
		return {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				delay: 0.01 * index
			}
		}
	}
}

export function HomeSchedules() {
	return (
		<main className="mx-auto bg-black py-10 laptop:pb-20" id="agenda">
			<div className="mx-auto max-w-6xl space-y-12 px-4 laptop:px-0">
				<Typography
					as="p"
					className="bg-gradient-to-t from-[#B28AF2] to-[#3B1FA5] bg-clip-text uppercase text-transparent"
					size="xl"
				>
					Agenda
				</Typography>

				<Carousel
					opts={{
						align: 'start',
						loop: true
					}}
					plugins={[AutoHeight()]}
					className="cursor-grab space-y-10"
				>
					<CarouselDotsButton />
					<CarouselContent className="m-0 items-start [transition:height_0.2s;]">
						{schedules.map(schedule => {
							return (
								<CarouselItem key={schedule.title}>
									<section className="flex flex-col gap-16">
										<AnimatedTitle title={schedule.title} />

										{schedule.schedules.map((scheduleItem, index) => {
											return (
												<motion.div
													key={scheduleItem.id}
													variants={fadeInUpAnimationVariants}
													custom={index}
													viewport={{
														once: true
													}}
													initial="initial"
													whileInView="animate"
													className={cn(
														'grid grid-cols-1 items-center gap-y-4 laptop:grid-cols-[360px_auto] laptop:px-20'
													)}
												>
													<Typography as="p" className="text-white" size="3xl" weight="bold">
														{scheduleItem.schedule}
													</Typography>

													<div className="space-y-1 laptop:space-y-2">
														<Typography as="p" className="uppercase text-white" size="2xl" weight="semibold">
															{scheduleItem.title}
														</Typography>
														<Typography
															type="md"
															className="font-plus-jakarta uppercase text-white"
															weight="medium"
															size="base"
														>
															{scheduleItem.description}
														</Typography>
													</div>
												</motion.div>
											)
										})}
									</section>
								</CarouselItem>
							)
						})}
					</CarouselContent>
				</Carousel>

				<footer className="mt-10 flex justify-center">
					<a
						href="/assets/flyer-congreso-completo.pdf"
						download
						className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'rounded-full text-base')}
					>
						Descargar agenda completa <Download />
					</a>
				</footer>
			</div>
		</main>
	)
}
