import { Link, useNavigate } from 'react-router-dom'
import url from '../../../../assets/lonely_Master (1).wav'
import { useLocalStorage } from '../../../../hooks/useLocalStorage'
import styles from './Beat.module.scss'

const Beat = ({ data }) => {
	const [cart, setCart] = useLocalStorage('cart', {})
	const navigate = useNavigate()
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.head}>
					<h3>Название</h3>
					<h3>Время</h3>
					<h3>Цена</h3>
				</div>
			</div>
			{data?.map((item, index) => (
				<div key={index} className={styles.properties}>
					<h5>{item.name}</h5>
					<audio
						src={url}
						controls={true}
						controlsList='nodownload'
						loop
					></audio>
					<button
						id={item.id}
						onClick={() => {
							setCart({
								id: item.id,
								name: item.name,
								priceForMP3: item.priceForMP3,
								priceForWav: item.priceForWav,
								priceForSoundtracks: item.priceForSoundtracks
							})
							setTimeout(() => {
								navigate('/checkOut')
							}, 1)
						}}
					>
						<Link>{item.priceForMP3}P</Link>
					</button>
				</div>
			))}
		</div>
	)
}

export default Beat
