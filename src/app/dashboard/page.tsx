import { getUsers } from '@/actions/dashboard/actions'
import { Typography, usersTableColumns } from '@/components/molecules'
import { ServerDataTable } from '@/components/organisms'
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

	const users = await getUsers(params)

	const mappedUsers = users?.items?.map(mapUserOutputToUserTable)

	return (
		<main className="min-h-[70vh] space-y-4">
			<Typography size="xl" weight="semibold">
				Usuarios
			</Typography>

			<ServerDataTable
				totalItems={users?.totalItems || 0}
				filterPlaceholder="Filtrar por nombre"
				columns={usersTableColumns}
				data={mappedUsers || []}
				classNames={{ card: 'grid  space-y-0 gap-y-1' }}
			/>
		</main>
	)
}
