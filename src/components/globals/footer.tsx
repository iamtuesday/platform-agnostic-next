import { Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logoUrl from '../../../public/assets/potencia-logo.svg'
import { Separator } from '../ui/separator'

export const Footer = () => {
	return (
		<footer className="bg-black text-gray-300">
			<div className="max-w-6xl mx-auto px-4 py-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
						<figure className="mb-2">
							<Image src={logoUrl} alt="Potencia Logo" width={160} height={60} />
						</figure>
						<div className="flex items-center mb-2">
							<Mail className="w-4 h-4 mr-2 text-purple-400" />
							<Link href="mailto:potencia-logo.svg" className="hover:text-purple-400 transition-colors" target="_blank">
								pottencia@lottus.com
							</Link>
						</div>
					</div>
				</div>

				<Separator className="hidden md:block my-10 bg-gray-700" />

				<div className="flex justify-between">
					<div className="w-full md:w-auto flex">
						<span className="text-sm whitespace-nowrap">© 2024 Scoit. All rights reserved.</span>
					</div>

					<p className="text-sm">
						Developed with
						<span className="mx-1 text-purple-400">&hearts;</span>
						by
						<Link
							href="https://www.linkedin.com/in/roycerdan"
							target="_blank"
							className="ml-1 font-semibold hover:text-purple-400 transition-colors"
						>
							Roy
						</Link>
					</p>
				</div>
			</div>
		</footer>
	)
}
