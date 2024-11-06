import HomeCalendar from '@/components/molecules/home-calendar'
import { HomeLocation, HomeVideosList } from '@/components/organisms'
import HomeExperience from '@/components/organisms/home-experience'

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<HomeCalendar />
			<HomeLocation />
			<HomeVideosList />
			<HomeExperience />
		</div>
	)
}
