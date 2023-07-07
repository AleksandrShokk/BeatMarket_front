import bgUrl from '../../../assets/main-banner.png'
import { useListBeat } from '../../../hooks/useListBeat'
import Layout from '../../../layouts/Layout'
import Beat from './Beat/Beat'
import styles from './Home.module.scss'
const Home = () => {
	const { data } = useListBeat()

	return (
		<>
			<Layout bgImg={bgUrl} isActive={false}>
				<main>
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
