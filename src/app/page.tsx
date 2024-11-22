import { HomeBanner, HomeCalendar, HomeLocation, HomeSchedules, HomeVideosList } from '@/components/organisms'
import HomeExperience from '@/components/organisms/home-experience'

export default function Home() {
	return (
		<div>
			<HomeBanner />
			<HomeCalendar />
			<HomeSchedules />
			<HomeLocation />
			<HomeVideosList />
			<HomeExperience />
		</div>
	)
}
