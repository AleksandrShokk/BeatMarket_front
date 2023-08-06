import React from 'react'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'
import { useAudio } from '../../hooks/useAudio'

const Player = ({ url, size }) => {
	const [playing, toggle] = useAudio(url)

	return (
		<div>
			<button onClick={toggle}>
				{playing ? (
					<AiFillPauseCircle size={size} />
				) : (
					<AiFillPlayCircle size={size} />
				)}
			</button>
		</div>
	)
}

export default Player
