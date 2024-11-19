import { getVideo } from '@/actions/dashboard/actions'
import { VideoForm } from '@/components/molecules'

export default async function VideoPage() {
	const video = await getVideo()

	return (
		<div className="min-h-[70vh]">
			<VideoForm defaultVideoUrl={video?.url} defaultVideoId={video?.id} />
		</div>
	)
}
