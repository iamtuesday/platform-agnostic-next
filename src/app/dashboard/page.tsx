import { getUsers } from '@/actions/dashboard/actions'
import { usersTableColumns } from '@/components/molecules'
import { DataTable } from '@/components/organisms'
import { mapUserOutputToUserTable } from '@/mappers'

export default async function DashboardPage({
	searchParams
}: {
	searchParams?: {
		search?: string
		page?: string
		size?: string
	}
}) {
	const params = {
		pageSize: Number(searchParams?.size) || 10,
		pageNumber: Number(searchParams?.page) || 1,
		term: searchParams?.search || ''
	}

	console.log(params)

	const users = await getUsers(params)

	const mappedUsers = users?.items?.map(mapUserOutputToUserTable)

	return (
		<div className="min-h-[70vh]">
			<DataTable
				isServerSide
				totalItems={users?.totalItems || 0}
				filterBy="email"
				filterPlaceholder="Filtrar por email"
				columns={usersTableColumns}
				data={mappedUsers || []}
				classNames={{ card: 'grid grid-cols-[auto_1fr] space-y-0 gap-y-1 gap-x-2' }}
			/>
		</div>
	)
}
