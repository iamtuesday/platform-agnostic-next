import { Typography } from '../molecules'

const schedules = [
	{
		id: '1',
		schedule: '9:00 AM',
		title: 'BIENVENIDA CON IA AL CONGRESO',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '2',
		schedule: '10:00 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '3',
		schedule: '11:00 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	}
]
export function HomeSchedules() {
	return (
		<section className="bg-black py-10 laptop:pb-20">
			<div className="container mx-auto space-y-10">
				<Typography
					as="p"
					className="bg-gradient-to-t from-[#B28AF2] to-[#3B1FA5] bg-clip-text text-transparent uppercase"
					size="xl"
				>
					Agenda
				</Typography>

				<div className="space-y-10">
					<Typography as="p" className="text-white" size="5xl">
						Jueves 28 de Noviembre
					</Typography>

					<div className="flex flex-col gap-16">
						{schedules.map(schedule => {
							return (
								<div key={schedule.id} className="items-center grid grid-cols-1 laptop:grid-cols-[300px_auto] px-20">
									<Typography as="p" className="text-white" size="3xl" weight="bold">
										{schedule.schedule}
									</Typography>
									<div>
										<Typography as="p" className="text-white uppercase" size="3xl" weight="semibold">
											{schedule.title}
										</Typography>
										<Typography as="p" className="text-white uppercase" weight="medium" size="lg">
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
