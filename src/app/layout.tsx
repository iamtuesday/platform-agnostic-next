import { Footer, Navigation } from '@/components/globals'
import { ToastProvider } from '@/components/ui'
import { getSession } from '@/lib/auth/session'
import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Toaster } from 'sonner'
import './globals.css'

// const geistSans = localFont({
// 	src: './fonts/GeistVF.woff',
// 	variable: '--font-geist-sans',
// 	weight: '100 900'
// })
// const geistMono = localFont({
// 	src: './fonts/GeistMonoVF.woff',
// 	variable: '--font-geist-mono',
// 	weight: '100 900'
// })

const inter = Inter({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter'
})

const dharmaGothic = localFont({
	src: './fonts/DharmaGothic.woff2',
	variable: '--font-dharma-gothic',
	weight: '400'
})

const clashGrotesk = localFont({
	src: './fonts/ClashGrotesk.woff2',
	variable: '--font-clash-grotesk',
	weight: '400'
})

const plusJakarta = localFont({
	src: './fonts/PlusJakarta.woff2',
	variable: '--font-plus-jakarta',
	weight: '400'
})

export const metadata: Metadata = {
	title:
		'PottencIA – Programa innovador diseñado para dar a los estudiantes las herramientas necesarias para potenciar sus oportunidades académicas, laborales y de empleabilidad en el mundo actual.',
	description:
		'PottencIA – Programa innovador diseñado para dar a los estudiantes las herramientas necesarias para potenciar sus oportunidades académicas, laborales y de empleabilidad en el mundo actual.',
	icons: {
		icon: '/assets/favicon-potencia-32x32.svg'
	}
}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await getSession()

	return (
		<html lang="en">
			{/* <body className={`${geistSans.variable} ${geistMono.variable} ${dharmaGothic.variable} antialiased`}> */}
			<body
				className={`${clashGrotesk.variable} ${plusJakarta.variable} ${dharmaGothic.variable} ${inter.variable} grid min-h-[100dvh] grid-rows-[auto_1fr_auto] font-inter antialiased`}
			>
				<ToastProvider>
					<SessionProvider>
						<Navigation session={session} />
						{children}
						<Footer />
						<Toaster />
					</SessionProvider>
				</ToastProvider>
			</body>
		</html>
	)
}
