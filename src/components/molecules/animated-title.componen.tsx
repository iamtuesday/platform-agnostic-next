import { motion } from 'motion/react'
import { Typography } from './typography.component'

const bluredFadeInAnimationVariants = {
	initial: {
		filter: 'blur(5px)',
		opacity: 0
	},
	animate: (index: number) => {
		return {
			opacity: 1,
			filter: 'blur(0px)',
			transition: {
				delay: 0.03 * index
			}
		}
	}
}

export const AnimatedTitle = ({ title }: { title: string }) => {
	return (
		<header>
			<Typography className="font-clash-grotesk text-white" size="5xl">
				{title.split('').map((letter, index) => (
					<motion.span
						key={index}
						variants={bluredFadeInAnimationVariants}
						custom={index}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true
						}}
					>
						{letter}
					</motion.span>
				))}{' '}
			</Typography>
		</header>
	)
}
