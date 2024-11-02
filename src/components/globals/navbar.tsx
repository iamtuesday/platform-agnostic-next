'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { LogIn, Menu, X } from 'lucide-react'
import { Session } from 'next-auth'
import Link from 'next/link'
import { useState } from 'react'

const menuItems = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/services', label: 'Services' },
	{ href: '/contact', label: 'Contact' }
]
interface NavigationProps {
	user: Session
}

export const Navigation = ({ user }: NavigationProps) => {
	const [isOpen, setIsOpen] = useState(false)

	console.log('user', user)

	const MenuItems = () => (
		<>
			{menuItems.map(item => (
				<li key={item.href}>
					<Link
						href={item.href}
						className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
						onClick={() => setIsOpen(false)}
					>
						{item.label}
					</Link>
				</li>
			))}
		</>
	)

	return (
		<nav className="bg-white shadow-lg">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							<Link href="/" className="flex items-center py-4 px-2">
								<span className="font-semibold text-gray-500 text-lg">Logo</span>
							</Link>
						</div>
					</div>
					{/* Desktop menu */}
					<div className="hidden md:flex items-center space-x-1">
						<ul className="flex space-x-2">
							<MenuItems />
						</ul>
						<Button variant="outline" size="sm" className="ml-4">
							<LogIn className="mr-2 h-4 w-4" /> Login
						</Button>
					</div>
					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
								>
									<Menu className="h-6 w-6" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-[300px] sm:w-[400px]">
								<nav className="flex flex-col h-full">
									<div className="flex items-center justify-between py-4 border-b">
										<span className="font-semibold text-gray-500 text-lg">Menu</span>
										<Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
											<X className="h-6 w-6" />
										</Button>
									</div>
									<ul className="flex flex-col space-y-4 mt-8">
										<MenuItems />
									</ul>
									<div className="mt-auto pb-6">
										<Button className="w-full">
											{/* <LogIn className="mr-2 h-4 w-4" /> Login */}
											{}
										</Button>
									</div>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	)
}
