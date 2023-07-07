import { useEffect, useState } from 'react'

export const useAudio = url => {
	const [audio] = useState(new Audio(url))
	const [playing, setPlaying] = useState(false)

	const toggle = () => setPlaying(!playing)

	useEffect(() => {
		playing ? audio.play() : audio.pause()
		audio.volume = 0.2
	}, [playing])

	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false))
		return () => {
			audio.removeEventListener('ended', () => setPlaying(false))
		}
	}, [])

	return [playing, toggle]
}
