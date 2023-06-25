import React from 'react'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'
import { useAudio } from '../../hooks/useAudio'

const Player = ({ url }) => {
	const [playing, toggle] = useAudio(url)

	return (
		<div>
			<button onClick={toggle}>
				{playing ? (
					<AiFillPauseCircle size={55} />
				) : (
					<AiFillPlayCircle size={55} />
				)}
			</button>
		</div>
	)
}

export default Player
