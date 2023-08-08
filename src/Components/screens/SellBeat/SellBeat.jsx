import bgUrl from '../../../assets/coop.jpg'
import Layout from '../../../layouts/Layout'
import styles from './Sellbeat.module.scss'
const SellBeat = () => {
	return (
		<>
			<Layout bgImg={bgUrl} isActive={true}>
				<div className={styles.textItems}>
					<h1>
						<span>Ты молодой креатор</span>? Любишь писать крутые
						биты и хочешь на этом заработать? Тогда ты пришел по
						адресу!
					</h1>
					<h3>
						Присылай свои работы на нашу почту, и мы обсудим условия
						сотрудничества!{' '}
						<a href='mailto:beatspace.coop@gmail.com'>
							beatspace.coop@gmail.com
						</a>
					</h3>
				</div>
			</Layout>
		</>
	)
}

export default SellBeat
