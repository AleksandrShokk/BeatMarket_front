import { useGetProfile } from './useGetProfile'
import { useListBeat } from './useListBeat'

export const useGetCurrentBeats = () => {
	const userInfo = useGetProfile()
	const { data } = useListBeat()
	let downloadPath = ''
	let trackPath = ''
	const currentBeatsIds = userInfo.obtainedBeat
	let currentBeatInfo = []

	data?.map(item => {
		switch (item.purchasePrice) {
			case item.priceForMP3:
				downloadPath = item.pathMp3
				trackPath = item.pathMp3

				break
			case item.priceForWav:
				downloadPath = item.pathWav
				trackPath = item.pathMp3

				break
			case item.priceForSoundtracks:
				downloadPath = item.pathTracks
				trackPath = item.pathMp3
				break
			default:
				break
		}

		currentBeatsIds?.forEach(element => {
			if (item.id === element) {
				currentBeatInfo = [
					...currentBeatInfo,
					{
						name: item.name,
						downloadPath: downloadPath,
						trackPath: trackPath,
						author: item.author
					}
				]
			}
		})
	})
	return currentBeatInfo
}
