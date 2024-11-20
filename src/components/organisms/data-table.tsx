'use client'

import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'
import * as React from 'react'

import {
	Button,
	Card,
	CardHeader,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Typography } from '../molecules'

export interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
	className?: string
	classNames?: {
		card?: string
	}
	filterBy?: string
	filterPlaceholder?: string
	customBar?: React.ReactNode
}

export const DataTable = <TData, TValue>({
	data,
	columns,
	classNames,
	filterBy,
	filterPlaceholder,
	customBar
}: DataTableProps<TData, TValue>) => {
	const [sorting, setSorting] = React.useState<SortingState>([])
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = React.useState({})

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection
		}
	})

	return (
		<div className={cn('w-full space-y-2 laptop:space-y-4')}>
			<header className="flex gap-x-4">
				<Input
					placeholder={filterPlaceholder}
					value={(table.getColumn(filterBy!)?.getFilterValue() as string) ?? ''}
					onChange={event => table.getColumn(filterBy!)?.setFilterValue(event.target.value)}
					className="max-w-sm"
				/>
				{customBar}
			</header>
			<Table className="hidden laptop:table">
				<TableHeader>
					{table.getHeaderGroups().map(headerGroup => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map(header => {
								return (
									<TableHead key={header.id}>
										{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
									</TableHead>
								)
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map(row => (
							<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
								{row.getVisibleCells().map(cell => (
									<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			<div className="grid gap-4 tablet:grid-cols-2 laptop:hidden">
				{table.getRowModel().rows?.length ? (
					table.getRowModel().rows.map(row => (
						<Card key={row.id} data-state={row.getIsSelected() && 'selected'}>
							<CardHeader className={cn(classNames?.card)}>
								{row.getVisibleCells().map(cell => (
									<React.Fragment key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</React.Fragment>
								))}
							</CardHeader>
						</Card>
					))
				) : (
					<Card className="tablet:col-span-2">
						<CardHeader>
							<Typography size="sm">No results.</Typography>
						</CardHeader>
					</Card>
				)}
			</div>

			<footer className="flex items-center justify-between">
				<section className="hidden items-center gap-2 tablet:flex">
					<Typography size="sm" weight="medium">
						Filas por página
					</Typography>
					<Select
						value={`${table.getState().pagination.pageSize}`}
						onValueChange={value => {
							table.setPageSize(Number(value))
						}}
					>
						<SelectTrigger className="h-8 w-[70px]">
							<SelectValue placeholder={table.getState().pagination.pageSize} />
						</SelectTrigger>
						<SelectContent side="top">
							{[10, 20, 30, 40, 50].map(pageSize => (
								<SelectItem key={pageSize} value={`${pageSize}`} className="cursor-pointer">
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</section>

				<section className="flex w-full items-center justify-between gap-2 tablet:w-max tablet:justify-start">
					<Typography size="sm">
						Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
					</Typography>

					<div className="flex items-center space-x-2">
						<Button
							variant="outline"
							className="hidden h-8 w-8 p-0 lg:flex"
							onClick={() => table.setPageIndex(0)}
							disabled={!table.getCanPreviousPage()}
						>
							<span className="sr-only">Go to first page</span>
							<ChevronsLeft className="h-4 w-4" />
						</Button>

						<Button
							variant="outline"
							className="h-8 w-8 p-0"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							<span className="sr-only">Go to previous page</span>
							<ChevronLeft className="h-4 w-4" />
						</Button>

						<Button
							variant="outline"
							className="h-8 w-8 p-0"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							<span className="sr-only">Go to next page</span>
							<ChevronRight className="h-4 w-4" />
						</Button>

						<Button
							variant="outline"
							className="hidden h-8 w-8 p-0 lg:flex"
							onClick={() => table.setPageIndex(table.getPageCount() - 1)}
							disabled={!table.getCanNextPage()}
						>
							<span className="sr-only">Go to last page</span>
							<ChevronsRight className="h-4 w-4" />
						</Button>
					</div>
				</section>
			</footer>
		</div>
	)
}
