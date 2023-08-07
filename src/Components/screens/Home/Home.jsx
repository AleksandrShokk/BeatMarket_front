import bgUrlLight from '../../../assets/main-banner.jpg'
import bgUrl from '../../../assets/main-banner.png'
import { useListBeat } from '../../../hooks/useListBeat'
import Layout from '../../../layouts/Layout'
import Beat from './Beat/Beat'
import styles from './Home.module.scss'
const Home = () => {
	const { data } = useListBeat()
	const currentTheme = () => {
		return window.matchMedia('(prefers-color-scheme: light)').matches
	}

	return (
		<>
			<Layout
				bgImg={currentTheme() ? bgUrlLight : bgUrl}
				isActive={false}
			>
				<main id='main'>
					<div>
						<h1 className={styles.heading}>
							Место, где ты найдешь <span>биты </span>на каждый
							день!
						</h1>
					</div>
				</main>
			</Layout>
			<Beat data={data} />
		</>
	)
}

export default Home
