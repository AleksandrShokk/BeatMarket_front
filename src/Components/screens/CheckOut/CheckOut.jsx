import { useState } from 'react'
import logo from '../../../assets/logo.png'
import soundtrack from '../../../assets/soundTrack.png'
import Layout from '../../../layouts/Layout'
import Button from '../../ui/Button'
import Player from '../../ui/Player'
import styles from './CheckOut.module.scss'

import cn from 'clsx'

import { useCheckout } from '../../../hooks/useCheckout'

const CheckOut = () => {
	const [clickIndex, setClickIndex] = useState(0)

	const [mutate, cartItems, currentPrice, setCurrentPrice] = useCheckout()
	return (
		<Layout>
			<div className={styles.wrapperItems}>
				<div className={styles.wrapperHeader}>
					<div className={styles.wrapperName}>
						<img src={logo} alt='' />
						<h2>{cartItems.name.split('(')[0]}</h2>
					</div>
					<Player url={cartItems.pathTrack} />
					<div className={styles.soundtrackContainer}>
						<img src={soundtrack} alt='' />
					</div>
				</div>
				<div className={styles.wrapperPrice}>
					<div>
						<h2>Выберите формат</h2>
						<div
							onClick={() => {
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
						</div>
						<div
							onClick={() => {
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
						</div>
						<div
							onClick={() => {
								setClickIndex(2)
								setCurrentPrice(cartItems.priceForSoundtracks)
							}}
							className={
								clickIndex === 2
									? cn(styles.price, styles.active)
									: styles.price
							}
						>
							<h3>Дорожки*</h3>
						</div>
					</div>
					<div>
						<h2>Цена товара</h2>
						<h5>{cartItems.priceForMP3} руб</h5>
						<h5>{cartItems.priceForWav} руб</h5>
						<h5>{cartItems.priceForSoundtracks} руб</h5>
					</div>
				</div>
			</div>
			<div className={styles.acceptButton}>
				<p>
					Цена <span>{currentPrice}</span> руб{' '}
				</p>
				{clickIndex === 0 && (
					<a onClick={() => mutate()}>
						<Button>Подтвердить</Button>
					</a>
				)}
				{clickIndex === 1 && (
					<a onClick={() => mutate()}>
						<Button>Подтвердить</Button>
					</a>
				)}
				{clickIndex === 2 && (
					<a onClick={() => mutate()}>
						<Button>Подтвердить</Button>
					</a>
				)}
			</div>
			<p>
				*Дорожки - трек разбитый по дорожкам. В личном кабинете
				появляется zip файл с каждой дорожкой трека
			</p>
		</Layout>
	)
}

export default CheckOut
