import { useListBeat } from '../../../hooks/useListBeat'
import Layout from '../../../layouts/Layout'
import Beat from './Beat/Beat'
import styles from './Home.module.scss'

const Home = () => {
	const { data } = useListBeat()
	return (
		<Layout>
			<main>
				<h1 className={styles.heading}>
					Место, где ты найдешь <span>биты </span>на каждый день!
				</h1>
			</main>
			<Beat data={data} />
		</Layout>
	)
}

export default Home