import { IUserInfo, IUserInfoTable } from '@/interfaces'

export const mapUserOutputToUserTable = (userInfo: IUserInfo): IUserInfoTable => {
	return {
		id: userInfo.id,
		fullName: userInfo.fullName || 'desconocido',
		email: userInfo.email || 'desconocido',
		campus: userInfo.campus || 'desconocido',
		firstLogin: userInfo.firstLogin === true ? 'Si' : 'No',
		mode: userInfo.mode || 'desconocido',
		country: userInfo.country || 'desconocido'
	}
}
