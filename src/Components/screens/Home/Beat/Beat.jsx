import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../hooks/useAuth'
import { useLocalStorage } from '../../../../hooks/useLocalStorage'
import Player from '../../../ui/Player'
import styles from './Beat.module.scss'

const Beat = ({ data }) => {
	const [cart, setCart] = useLocalStorage('cart', {})
	const navigate = useNavigate()
	const { isAuth } = useAuth()
	let counter = 0
	data?.map(item => {
		if (item.isBought === false) {
			counter++
		}
	})

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.head}>
					<h3>Название</h3>
					<h3>BPM</h3>
					{window.screen.width >= 700 ? (
						<h3>Время</h3>
					) : (
						<h3>Старт</h3>
					)}
					<h3>Цена</h3>
				</div>
			</div>
			{counter === 0 ? (
				<h3>К сожалению битов пока нет!</h3>
			) : (
				data?.map((item, index) => (
					<div
						key={index}
						className={
							item.isBought === false
								? styles.properties
								: styles.disActive
						}
					>
						<h5>{`${item.name.toUpperCase().split('(')[0]}  (by ${
							item.author
						})`}</h5>
						<h5>{item.name.split('(')[1]}</h5>
						{window.screen.width >= 700 ? (
							<audio
								src={item.pathMp3}
								controls={true}
								controlsList='nodownload'
							></audio>
						) : (
							<Player url={item.pathMp3} size={25} />
						)}
						{isAuth ? (
							<button
								id={item.id}
								onClick={() => {
									setCart({
										id: item.id,
										name: item.name,
										priceForMP3: item.priceForMP3,
										priceForWav: item.priceForWav,
										priceForSoundtracks:
											item.priceForSoundtracks,
										pathTrack: item.pathMp3
									})
									setTimeout(() => {}, 1)
								}}
							>
								<Link to='/checkout'>{item.priceForMP3}P</Link>
							</button>
						) : (
							<button
								onClick={() => {
									navigate('/auth')
								}}
							>
								<Link>{item.priceForMP3}P</Link>
							</button>
						)}
					</div>
				))
			)}
		</div>
	)
}

export default Beat
