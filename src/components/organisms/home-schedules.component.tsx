'use client'

import { cn } from '@/lib/utils'
import AutoHeight from 'embla-carousel-auto-height'
import { Download } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { AnimatedTitle, Typography } from '../molecules'
import { buttonVariants, Carousel, CarouselContent, CarouselDotsButton, CarouselItem } from '../ui'
const schedules: {
	title: string
	schedules: {
		id: string
		schedule: string
		title: string
		description?: string
		iconUrl?: string
		imgSizes?: string
	}[]
	additionalWorkshops?: {
		room: string
		schedules: {
			id: string
			imgSizes?: string
			schedule: string
			title: string
			iconUrl?: string
			description?: string
		}[]
	}[]
}[] = [
	{
		title: 'Saltillo',
		schedules: [
			{
				id: '1',
				schedule: '8:30 – 9:00',
				title: 'Ceremonia de inauguración',
				description: ''
			},
			{
				id: '2',
				schedule: '9:00 – 10:00',
				title: 'Conferencia magistral de inicio',
				description: 'IA responsable: Principios y prácticas en el desarrollo tecnológico',
				iconUrl: '/assets/google.png'
			},
			{
				id: '3',
				schedule: '10:30 – 11:30',
				title: 'Panel de discusión en Ciencias Jurídicas',
				description: 'IA y justicia: Aplicaciones en el Sistema Judicial y sus implicaciones'
			},
			{
				id: '4',
				schedule: '11:00 – 11:40',
				title: 'Taller',
				description: 'Navegando el aprendizaje en la Era Digital: Estrategias y herramientas para estudiantes'
			},
			{
				id: '5',
				schedule: '12:00 – 12:40',
				title: 'Taller',
				description: 'Creación de contenidos con IA: Potencia tu presencia en RRSS'
			},
			{
				id: '6',
				schedule: '18:00 – 19:00',
				title: 'Panel de discusión en Ciencias Sociales',
				description: 'IA y el Futuro del Trabajo: Transformaciones y Desafíos Laborales'
			},
			{
				id: '7',
				schedule: '18:50 – 19:30',
				title: 'Taller',
				description: 'El profesional del mañana: Cómo prepararte para un futuro con IA'
			},
			{
				id: '8',
				schedule: '19:30 – 20:30',
				title: 'Conferencia magistral de cierre',
				description: 'Potencia tus proyectos con la nube: IA y Machine Learning al alcance de todos',
				iconUrl: '/assets/aws.png'
			},
			{
				id: '9',
				schedule: '21:00',
				title: 'Fiesta Neón',
				description: ''
			}
		],
		additionalWorkshops: []
	},
	{
		title: 'Guadalajara',
		schedules: [
			{
				id: '1',
				schedule: '8:30 – 9:00',
				title: 'Ceremonia de inauguración',
				description: ''
			},
			{
				id: '2',
				schedule: '9:00 – 10:00',
				title: 'Conferencia Magistral de inicio',
				description: 'Inteligencia artificial aplicada: Transformando industrias con soluciones de AWS',
				iconUrl: '/assets/aws.png'
			},
			{
				id: '3',
				schedule: '10:00 – 11:00',
				title: 'Panel de discusión en Diseño y Arquitectura',
				description: 'Simulación y Modelado en tiempo real: Simulación ambiental de proyectos arquitectónicos'
			},
			{
				id: '4',
				schedule: '11:00 – 11:40',
				title: 'Ponencia corta',
				description: 'Redes sociales y seguridad Digital: Protección de la identidad en la era IA'
			},
			{
				id: '5',
				schedule: '12:00 – 12:40',
				title: 'Ponencia corta',
				description: 'IA para el conocimiento de patrones cancerosos en imágenes médicas'
			},
			{
				id: '6',
				schedule: '14:00 – 14:40',
				title: 'Ponencia corta',
				description: 'Herramientas de Machine Learning en la industria'
			},
			{
				id: '7',
				schedule: '15:00 – 16:00',
				title: 'Panel de discusión en Negocios y empresariales',
				description: 'IA y la transformación Digital de las Organizaciones: Nuevos Modelos de Negocio'
			},
			{
				id: '8',
				schedule: '16:00 – 17:00',
				title: 'Conferencia Magistral de cierre',
				description: 'Soluciones de Oracle Cloud para mejorar la cadena de suministro y RRHH con el uso de la IA',
				iconUrl: '/assets/oracle.png',
				imgSizes: 'h-[20px] w-auto'
			},
			{
				id: '9',
				schedule: '21:00',
				title: 'Fiesta Neón',
				description: ''
			}
		],
		additionalWorkshops: [
			{
				room: 'SALA VELARIA',
				schedules: [
					{
						id: '1',
						schedule: '11:00 – 12:00',
						title: 'Ponencia corta',
						description: 'Innovando desde el aula'
					},
					{
						id: '1',
						schedule: '12:00 – 13:00',
						title: 'Torneo de videojuegos',
						description: 'Smash Bros y Mario Kart'
					},
					{
						id: '1',
						schedule: '13:00 – 14:00',
						title: 'Torneo de videojuegos',
						description: 'Smash Bros y Mario Kart'
					},
					{
						id: '1',
						schedule: '14:00 – 15:00',
						title: 'Torneo de videojuegos',
						description: 'Smash Bros y Mario Kart'
					}
				]
			},
			{
				room: 'SALON PRELUDIO',
				schedules: [
					{
						id: '1',
						schedule: '11:00 – 12:00',
						title: 'Taller',
						description: 'IA en la toma de decisiones estratégicas'
					},
					{
						id: '1',

						schedule: '12:00 – 13:00',
						title: 'Taller',
						description: 'Creación de contenidos con AI: Potencia tu presencia en RRSS'
					},
					{
						id: '1',
						schedule: '13:00 – 14:00',
						title: 'Taller',
						description: 'El futuro... Los estudiantes vs Inteligencia Artificial'
					},
					{
						id: '1',
						schedule: '14:00 – 15:00',
						title: 'Taller',
						description: 'IA para Marketing y Análisis de Clientes'
					}
				]
			},
			{
				room: 'TERRAZA ORIENTE',
				schedules: [
					{
						id: '1',

						schedule: '11:00 – 12:00',
						title: 'Taller',
						description: 'Transforma tu Futuro: Ciudadanía Creativa y Responsable en la Era de la IA',
						iconUrl: '/assets/pearson.png'
					},
					{
						id: '1',

						schedule: '12:00 – 13:00',
						title: 'Taller',
						description: 'Integración de modelos de lenguaje de gran escala en Aplicaciones de Software'
					},
					{
						id: '1',

						schedule: '13:00 – 14:00',
						title: 'Taller',
						description: 'Inteligencia Artificial en los Sistemas de Gestión'
					},
					{
						id: '1',

						schedule: '14:00 – 15:00',
						title: 'Taller',
						description: 'IXA Design Lab: Innovando con IA'
					}
				]
			},
			{
				room: 'SALÓN INTERMEZZO',
				schedules: [
					{
						id: '1',

						schedule: '11:00 – 12:00',
						title: 'Taller',
						description: 'Seguridad en la era de la IA: Desafíos y soluciones en infraestructuras de red',
						iconUrl: '/assets/cisco.png'
					},
					{
						id: '1',

						schedule: '12:00 – 13:00',
						title: 'Taller',
						description: 'Implicaciones legales y estratégicas de la IA en seguridad y redes'
					},
					{
						id: '1',

						schedule: '13:00 – 14:00',
						title: 'Taller',
						description: 'El profesional del mañana: Cómo prepararte para un futuro con IA'
					},
					{
						id: '1',

						schedule: '14:00 – 15:00',
						title: 'Taller',
						description: 'IA: Optimización de Tiempo en Proyectos'
					}
				]
			}
		]
	},
	{
		title: 'CDMX',
		schedules: [
			{
				id: '1',
				schedule: '9:00 – 9:30',
				title: 'Ceremonia de inauguración',
				description: ''
			},
			{
				id: '2',
				schedule: '9:30 – 10:30',
				title: 'Conferencia Magistral de inicio',
				description: 'Conectividad inteligente: Cómo la IA revoluciona las telecomunicaciones',
				iconUrl: '/assets/fundacion-movistar.png'
			},
			{
				id: '3',
				schedule: '10:30 – 11:30',
				title: 'Presentación proyectos finales',
				description: 'Presentación de proyectos Competición DESAFÍA BY POTTENCIA'
			},
			{
				id: '4',
				schedule: '11:30 – 12:30',
				title: 'Panel de discusión en Ciencias de la Salud',
				description: 'Predicción de Enfermedades con IA de la Prevención a la Intervención Temprana'
			},
			{
				id: '14',
				schedule: '12:30 – 13:30',
				title: 'Taller',
				description: 'Navegando el aprendizaje en la Era Digital'
			},
			{
				id: '5',
				schedule: '13:30 – 14:30',
				title: 'Taller',
				description: 'Secretos para el éxito digital: El ERP y la Inteligencia Artificial'
			},
			{
				id: '10',
				schedule: '14:30 – 15:30',
				title: 'Taller',
				description: 'El impacto de la IA en el futuro de la empleabilidad'
			},
			{
				id: '6',
				schedule: '16:30 – 17:30',
				title: 'Panel de discusión en Ingenierías',
				description: 'Inteligencia Artificial y Robótica: La Próxima Revolución Industrial'
			},
			{
				id: '7',
				schedule: '18:00 – 18:30',
				title: 'Premiación',
				description: 'Ganadores Competición DESAFÍA BY POTTENCIA (asistencia presencial ganadores)'
			},
			{
				id: '9',
				schedule: '18:30 - 19:30',
				title: 'Conferencia Magistral de cierre',
				description: 'IA en el trabajo: herramientas y habilidades para el profesional del futuro',
				iconUrl: '/assets/microsoft.png'
			},
			{
				id: '8',
				schedule: '19:30 – 20:30',
				title: 'Concurso DJ´s',
				description: ''
			}
		],
		additionalWorkshops: []
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
							const EXIST_ADITIONAL_WORKSHOPS =
								Array.isArray(schedule.additionalWorkshops) && schedule.additionalWorkshops.length > 0

							return (
								<CarouselItem key={schedule.title}>
									<section className="flex flex-col gap-16">
										<AnimatedTitle title={schedule.title} />

										{schedule.schedules.map((scheduleItem, index) => {
											const { id, schedule, title, description } = scheduleItem
											return (
												<motion.div
													key={id}
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
														{schedule}
													</Typography>

													<div className="space-y-2 laptop:space-y-3">
														<Typography as="p" className="uppercase text-white" size="2xl" weight="semibold">
															{title}
														</Typography>
														<Typography
															type="md"
															className="font-plus-jakarta uppercase text-white"
															weight="medium"
															size="base"
														>
															{description}
														</Typography>

														{scheduleItem.iconUrl ? (
															<figure>
																<Image
																	className={scheduleItem.imgSizes ? scheduleItem.imgSizes : 'h-[40px] w-auto'}
																	src={scheduleItem.iconUrl}
																	width={300}
																	height={100}
																	alt="Logo de compañia"
																/>
															</figure>
														) : null}
													</div>
												</motion.div>
											)
										})}
									</section>

									{EXIST_ADITIONAL_WORKSHOPS ? (
										<section className="mt-16 flex flex-col gap-16">
											<Typography size="3xl" className="font-clash-grotesk text-white">
												TALLERES ADICIONALES
											</Typography>

											{schedule?.additionalWorkshops?.map(workShoop => {
												const { room, schedules } = workShoop
												return (
													<section key={workShoop.room} className="flex flex-col gap-16">
														<Typography size="2xl" weight="semibold" className="font-clash-grotesk text-white">
															{room}
														</Typography>

														{schedules.map((scheduleItem, index) => {
															const { schedule, title, id, description } = scheduleItem
															return (
																<motion.div
																	key={id}
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
																		{schedule}
																	</Typography>

																	<div className="space-y-2 laptop:space-y-3">
																		<Typography as="p" className="uppercase text-white" size="2xl" weight="semibold">
																			{title}
																		</Typography>
																		<Typography
																			type="md"
																			className="font-plus-jakarta uppercase text-white"
																			weight="medium"
																			size="base"
																		>
																			{description}
																		</Typography>

																		{scheduleItem.iconUrl ? (
																			<figure>
																				<Image
																					className={scheduleItem.imgSizes ? scheduleItem.imgSizes : 'h-[40px] w-auto'}
																					src={scheduleItem.iconUrl}
																					width={300}
																					height={100}
																					alt="Logo de compañia"
																				/>
																			</figure>
																		) : null}
																	</div>
																</motion.div>
															)
														})}
													</section>
												)
											})}
										</section>
									) : null}
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
