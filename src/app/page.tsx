import HomeCalendar from '@/components/molecules/home-calendar'
import { HomeLocation, HomeSchedules, HomeVideosList } from '@/components/organisms'
import HomeExperience from '@/components/organisms/home-experience'

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<HomeCalendar />
			<HomeSchedules />
			<HomeLocation />
			<HomeVideosList />
			<HomeExperience />
		</div>
	)
}
