import Image from 'next/image'

export default function StreamingPage() {
	return (
		<div className="min-h-screen flex flex-col bg-gray-100 relative">
			<picture className="absolute inset-0 -z-10">
				<source media="(min-width: 960px)" srcSet="/assets/2148054088.jpg" />
				<source media="(min-width: 414px)" srcSet="/assets/2148054088.jpg" />
				<Image
					src="/assets/2148054428.jpg"
					alt="Responsive background image"
					layout="fill"
					style={{ objectFit: 'cover' }}
					quality={100}
				/>
			</picture>

			<main className="flex-grow container mx-auto p-4">
				<div className="bg-black rounded-lg overflow-hidden shadow-lg">
					<div className="relative pt-[56.25%]">
						<iframe
							src="https://www.youtube.com/embed/dQw4w9WgXcQ"
							className="absolute top-0 left-0 w-full h-full"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>
			</main>
		</div>
	)
}
