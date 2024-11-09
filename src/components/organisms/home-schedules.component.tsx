import { Typography } from '../molecules'

const schedules = [
	{
		id: '1',
		schedule: '9:00 AM',
		title: 'BIENVENIDA CON IA AL CONGRESO',
		description: 'MEGA PANTALLA IMAX'
	}
]
export function HomeSchedules() {
	return (
		<section className="bg-black py-10 laptop:py-20">
			<div className="container mx-auto space-y-10">
				<Typography
					as="p"
					className="bg-gradient-to-t from-[#B28AF2] to-[#3B1FA5] bg-clip-text text-transparent uppercase"
					size="xl"
				>
					Agenda
				</Typography>

				<div className="space-y-6">
					<Typography as="p" className="text-white" size="5xl">
						Jueves 28 de Noviembre
					</Typography>

					<div>
						{schedules.map(schedule => {
							return (
								<div key={schedule.id} className="flex items-center space-x-4">
									<Typography as="p" className="text-white" size="2xl" weight="bold">
										{schedule.schedule}
									</Typography>
									<div>
										<Typography as="p" className="text-white">
											{schedule.title}
										</Typography>
										<Typography as="p" className="text-white">
											{schedule.description}
										</Typography>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
