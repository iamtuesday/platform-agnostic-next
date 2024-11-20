'use client'

import { ReactNode, useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './sheet'

interface CustomSheetProps {
	children: (handleOpen: (value: boolean) => void) => ReactNode
	title: string
	trigger: ReactNode
}

export const CustomSheet = ({ children, title, trigger }: CustomSheetProps) => {
	const [open, setOpen] = useState(false)

	const handleOpen = (value: boolean) => {
		setOpen(value)
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>{trigger}</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>{title}</SheetTitle>
				</SheetHeader>

				<div className="py-10">{children(handleOpen)}</div>
			</SheetContent>
		</Sheet>
	)
}
