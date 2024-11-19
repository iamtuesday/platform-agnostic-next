export default async function DashboardPage() {
	return <></>
	// const token = getSession()
	// const { getUsers } = await DashboardModule(`${token}`)
	// const { list } = await CountryModule()
	// const [users, error] = await getUsers()
	// const [countries, _error] = await list()

	// if (!!error || !!_error) {
	// 	return {
	// 		notFound: true
	// 	}
	// }

	// /**
	//  * TODO: La lista de usuarios debe estar en el modulo de usuarios, no hay necesidad de crear un module para el dashboard, a menos que sea para la entidades y ui
	//  */
	// const dataUsers = users?.map(user => {
	// 	return {
	// 		id: user.id,
	// 		email: user.email,
	// 		firstName: user.firstName,
	// 		lastName: user.paternalLastName + ' ' + user.maternalLastName,
	// 		countryId: countries?.find(country => country.value === user.countryId)?.name || '',
	// 		phone: user?.phone?.prefix && user?.phone?.number ? `${user.phone.prefix} ${user.phone.number}` : 'Sin teléfono',
	// 		profile: user.profile
	// 	}
	// })

	// return (
	// 	<DataTable
	// 		filterBy="email"
	// 		filterPlaceholder="Filtrar por email"
	// 		columns={usersTableColumns}
	// 		data={dataUsers!}
	// 		classNames={{ card: 'grid grid-cols-[auto_1fr] space-y-0 gap-y-1 gap-x-2' }}
	// 	/>
	// )
}
