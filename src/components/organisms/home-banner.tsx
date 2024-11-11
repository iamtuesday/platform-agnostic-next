import { Typography } from '../molecules'

export const HomeBanner = () => {
	return (
		<figure className="relative w-full h-[800px]">
			<div className="w-full h-full bg-black mix-blend-multiply opacity-100" />

			<div className="absolute inset-0 after:absolute after:inset-0 after:bg-[url('/assets/potencia-banner.webp')] after:bg-cover after:bg-center after:opacity-100" />

			<div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
				<Typography as="h1" className="text-white uppercase" size="7xl" weight="semibold">
					Bienvenido a{' '}
					<span className="bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent uppercase">/</span>
					Pottenc
					<span
						className="bg-clip-text text-transparent"
						style={{
							background: 'linear-gradient(305deg, #FFFFFF, #9600FB)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent'
						}}
					>
						ia
					</span>
				</Typography>

				<Typography as="p" className="text-white" size="xl" weight="medium">
					Pottencia de Lottus Education es un programa innovador diseñado para dar a los estudiantes las herramientas
					necesarias para potenciar sus oportunidades académicas, laborales y de empleabilidad en el mundo actual.
				</Typography>
			</div>
		</figure>
	)
}
