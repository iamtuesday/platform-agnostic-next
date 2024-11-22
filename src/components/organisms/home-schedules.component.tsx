'use client'

import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'motion/react'
import { AnimatedTitle, Typography } from '../molecules'
import { Carousel, CarouselContent, CarouselDotsButton, CarouselItem } from '../ui'

const schedules = [
	{
		title: '26 Noviembre - Saltillo (UANE, Campus Saltillo)',
		schedules: [
			{
				id: '1',
				schedule: '8:30 AM - 9:00 AM',
				title: 'Ceremonia de inauguración',
				description:
					'Empresas participantes en stands: General Motors México, Danfoss, Grupo Alfa, Magna Internacional, Yanfeng, Santander, Pearson, Suárez Zavala Soluciones Industriales y Servicio Nacional de Empleo.'
			},
			{
				id: '2',
				schedule: '9:00 AM - 10:00 AM',
				title: 'Conferencia magistral de inicio',
				description:
					'«IA responsable: principios y prácticas en el desarrollo tecnológico», impartida por Google (Lauro García – Head of Education para LATAM en Google Cloud).'
			},
			{
				id: '3',
				schedule: '10:30 AM - 11:30 AM',
				title: 'Panel de discusión',
				description:
					'«IA y justicia: Aplicaciones en el Sistema Judicial y sus implicaciones», moderado por expertos de la Universidad Cooperativa de Colombia y Tribunal de Justicia Administrativa de Coahuila.'
			},
			{
				id: '4',
				schedule: '11:00 AM - 11:40 AM',
				title: 'Taller',
				description:
					'«Navegando el aprendizaje en la Era Digital: Estrategias y herramientas para estudiantes», impartido por Bedu.'
			},
			{
				id: '5',
				schedule: '12:00 PM - 12:40 PM',
				title: 'Taller',
				description:
					'«Creación de contenidos con IA: Potencia tu presencia en RRSS», impartido por Daniel Ordaz, CEO de Sendos.ai y creador de contenido en IA.'
			},
			{
				id: '6',
				schedule: '6:00 PM - 7:00 PM',
				title: 'Panel de discusión',
				description:
					'«IA y el Futuro del Trabajo: Transformaciones y Desafíos Laborales», con participación de Lottus Education y expertos en liderazgo y desarrollo profesional.'
			},
			{
				id: '7',
				schedule: '6:50 PM - 7:30 PM',
				title: 'Taller',
				description: '«El profesional del mañana: Cómo prepararte para un futuro con IA», impartido por UANE.'
			},
			{
				id: '8',
				schedule: '7:30 PM - 8:30 PM',
				title: 'Conferencia magistral de cierre',
				description:
					'«Potencia tus proyectos con la nube: IA y Machine Learning al alcance de todos», impartida por AWS (José Lorenzo Cuencar – Sr. Solutions Architect en AWS).'
			},
			{
				id: '9',
				schedule: '9:00 PM',
				title: 'Fiesta Neón',
				description: ''
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
					'Empresas participantes en stands: Intel Guadalajara Design Center, Continental Automotive Guadalajara, HP Inc., BYD, Grupo Salinas, Santander y Talent + UTEG.'
			},
			{
				id: '2',
				schedule: '9:00 AM - 10:00 AM',
				title: 'Conferencia magistral de inicio',
				description:
					'«El impacto de la IA en la transformación digital de las organizaciones», impartida por Microsoft (Alfonso Sandoval – Especialista de Azure para el sector educación).'
			},
			{
				id: '3',
				schedule: '10:30 AM - 11:30 AM',
				title: 'Panel de discusión',
				description:
					'«Simulación y Modelado en Arquitectura con IA», participación de expertos en diseño y arquitectura de Universidad de las Américas Puebla y IXA IA.'
			},
			{
				id: '4',
				schedule: '11:00 AM - 11:40 AM',
				title: 'Taller',
				description:
					'«Creación de contenidos con IA: Potencia tu presencia en RRSS», impartido por Daniel Ordaz de Sendos.ai.'
			},
			{
				id: '5',
				schedule: '12:00 PM - 12:40 PM',
				title: 'Taller',
				description:
					'«Potencia tus proyectos con la nube: IA y Machine Learning al alcance de todos», impartido por AWS.'
			},
			{
				id: '6',
				schedule: '3:00 PM - 4:00 PM',
				title: 'Panel de discusión',
				description:
					'«IA y el Futuro del Diseño: Nuevas oportunidades con IA», con participación de Oracle y expertos en innovación y tecnología.'
			},
			{
				id: '7',
				schedule: '4:00 PM - 5:00 PM',
				title: 'Conferencia magistral de cierre',
				description:
					'«Seguridad en la Era de la IA: Desafíos y soluciones en infraestructuras de red», impartida por CISCO (Fabiola Olvera – Systems Engineer en CISCO).'
			},
			{
				id: '8',
				schedule: '5:00 PM - 6:00 PM',
				title: 'Fiesta Neón',
				description: 'Cierre del evento con actividades de entretenimiento.'
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
					'Empresas participantes en stands: Microsoft México, IBM México, KIO Networks, Grupo Fórmula, Alto México, Pearson, Bedu y Santander Universia.'
			},
			{
				id: '2',
				schedule: '9:00 AM - 10:00 AM',
				title: 'Conferencia magistral de inicio',
				description:
					'Tema: «Conectividad inteligente: cómo la IA revoluciona las telecomunicaciones», impartida por José Gerardo Navarro- Head of Operations de Telefónica México.'
			},
			{
				id: '3',
				schedule: '10:35 AM - 11:35 AM',
				title: 'Presentación de proyectos finales',
				description: 'DesafÍA by PottencIA.'
			},
			{
				id: '4',
				schedule: '11:40 AM - 12:45 PM',
				title: 'Panel de discusión en Ciencias de la Salud',
				description: `**Tema: «Predicción de Enfermedades con IA: De la Prevención a la Intervención Temprana»**  
Cómo la IA puede ser utilizada para analizar grandes volúmenes de datos médicos y predecir enfermedades antes de que se presenten, permitiendo intervenciones más tempranas y efectivas.

**Participan:**
- Saulo Camarena - Director de ANDROMEX, Médico especializado en Andrología
- Imanol Daran - Co-Founder de Vira AI, Neuron Health y SOFIWellness
- Carlos Roca - CEO de Mellow
- Alejandro Arreola - CEO & Co-Founder HAi, OkDoc

**Modera:**
- Ludivina Herrera - Rectora ULA
`
			},
			{
				id: '5',
				schedule: '12:55 PM - 1:05 PM',
				title: 'Taller',
				description:
					'«Navegando el aprendizaje en la Era Digital», impartido por Andrés Felipe Mena – Líder de Proyectos de Ciencia, Tecnología e Innovación de la Universidad Cooperativa de Colombia.'
			},
			{
				id: '6',
				schedule: '1:15 PM - 2:05 PM',
				title: 'Taller',
				description:
					'«Secretos para el éxito digital: el ERP y la Inteligencia Artificial», impartido por Nohemi Méndez-Head Of Product Communications en ODOO.'
			},
			{
				id: '7',
				schedule: '2:15 PM - 3:15 PM',
				title: 'Taller',
				description:
					'«El impacto de la IA en el futuro de la empleabilidad», impartido por Abraham Bacha- Subdirector de Proyectos y Productos en Santander Universia México.'
			},
			{
				id: '8',
				schedule: '4:50 PM - 5:50 PM',
				title: 'Panel de discusión en Ingenierías',
				description: `**«Inteligencia Artificial y Robótica: La Próxima Revolución Industrial»**  
Debatir sobre cómo la IA está impulsando la robótica y qué implicaciones tiene esto para la ingeniería y la industria.

**Participan:**
- Carlos Ramonda - Decano de Ciencias Aplicadas en Universidad Siglo XXI de Argentina
- Carlos Landa – Fundador y CEO de Apoint México
- Luisa María Jiménez - Académica con amplia experiencia en Gobernanza de datos, Importancia de la mujer en la ingeniería y habilidades STEM
- Ricardo Hernández - Fundador y CTO de Sidian Security, experto en ciberseguridad

**Modera:**
- Delia Lienzo - Jefa del área de ingenierías UTC
`
			},
			{
				id: '9',
				schedule: '6:00 PM - 6:30 PM',
				title: 'Premiación',
				description: 'Ganadores Competición DESAFÍA BY POTTENCIA (asistencia presencial ganadores).'
			},
			{
				id: '10',
				schedule: '6:30 PM - 7:30 PM',
				title: 'Conferencia magistral de cierre',
				description:
					'Tema: «IA y el Trabajo: Herramientas y Habilidades para el Futuro» Impartida por: Alfonso Sandoval- Especialista de Azure para sector Educación,  Microsoft México'
			},
			{
				id: '11',
				schedule: '7:30 PM - 9:40 PM',
				title: 'Concurso DJ’s',
				description: ''
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

				<section className="space-y-12">
					<Carousel
						opts={{
							align: 'start',
							loop: true
						}}
						plugins={[Autoplay({ delay: 6000 })]}
						className="cursor-grab space-y-10"
					>
						<CarouselDotsButton />
						<CarouselContent className="m-0">
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
				</section>
			</div>
		</main>
	)
}
