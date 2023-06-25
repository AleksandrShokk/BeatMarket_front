import { useState } from 'react'
import logo from '../../../assets/logo.png'
import url from '../../../assets/lonely_Master (1).wav'
import soundtrack from '../../../assets/soundTrack.png'
import { useModal } from '../../../hooks/useModal'
import Layout from '../../../layouts/Layout'
import Button from '../../ui/Button'
import Player from '../../ui/Player'
import styles from './CheckOut.module.scss'

import cn from 'clsx'

const CheckOut = () => {
	const cartItemsJson = localStorage.getItem('cart')
	const cartItems = JSON.parse(cartItemsJson)
	const { isShow, setIsShow } = useModal()
	const [clickIndex, setClickIndex] = useState(0)
	const [currentPrice, setCurrentPrice] = useState(cartItems.priceForMP3)
	// const { payment } = usePayment()
	return (
		<Layout>
			<div className={styles.wrapperItems}>
				<div className={styles.wrapperHeader}>
					<div className={styles.wrapperName}>
						<img src={logo} alt='' />
						<h2>{cartItems.name}</h2>
					</div>
					<Player url={url} />
					<div className={styles.soundtrackContainer}>
						<img src={soundtrack} alt='' />
					</div>
				</div>
				<div className={styles.wrapperPrice}>
					<div>
						<h2>Выберите формат</h2>
						<div
							onClick={() => {
								setIsShow(!isShow)
								setClickIndex(0)
								setCurrentPrice(cartItems.priceForMP3)
							}}
							className={
								clickIndex === 0
									? cn(styles.price, styles.active)
									: styles.price
							}
						>
							<h3>MP3 формат</h3>
							<h5>{cartItems.priceForMP3} руб</h5>
						</div>
						<div
							onClick={() => {
								setIsShow(!isShow)
								setClickIndex(1)
								setCurrentPrice(cartItems.priceForWav)
							}}
							className={
								clickIndex === 1
									? cn(styles.price, styles.active)
									: styles.price
							}
						>
							<h3>WAV формат</h3>
							<h5>{cartItems.priceForWav} руб</h5>
						</div>
						<div
							onClick={() => {
								setIsShow(!isShow)
								setClickIndex(2)
								setCurrentPrice(cartItems.priceForSoundtracks)
							}}
							className={
								clickIndex === 2
									? cn(styles.price, styles.active)
									: styles.price
							}
						>
							<h3>Бит разбитый по дорожкам</h3>
							<h5>{cartItems.priceForSoundtracks} руб</h5>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.acceptButton}>
				<p>
					Цена <span>{currentPrice}</span> руб{' '}
				</p>
				{clickIndex === 0 && (
					<a href='https://my.qiwi.com/Aleksandr-Chi7a_qs8Tl'>
						<Button>Подтвердить</Button>
					</a>
				)}
				{clickIndex === 1 && (
					<a href=''>
						<Button>Подтвердить</Button>
					</a>
				)}
				{clickIndex === 2 && (
					<a href=''>
						<Button>Подтвердить</Button>
					</a>
				)}
			</div>
		</Layout>
	)
}

export default CheckOut
