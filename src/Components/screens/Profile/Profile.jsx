import { RiDownloadFill } from 'react-icons/ri'
import { RxAvatar } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useGetCurrentBeats } from '../../../hooks/useGetCurrentBeats'
import { useGetProfile } from '../../../hooks/useGetProfile'
import Footer from '../../../layouts/Footer/Footer'
import Layout from '../../../layouts/Layout'
import Button from '../../ui/Button'
import styles from './Profile.module.scss'

const Profile = () => {
	const userInfo = useGetProfile()
	const currentBeat = useGetCurrentBeats()
	return (
		<>
			<Layout>
				<div className={styles.wrapper}>
					<aside className={styles.sidebar}>
						<div>
							<RxAvatar size={200} color='#a7a7a7' />

							<h2>{userInfo.nickName}</h2>
							<h4>Статистика</h4>
							<div>
								<p>Всего битов куплено </p>
								<p>{userInfo.obtainedBeat?.length}</p>
							</div>
							<div>
								<p>Дней на проекте </p>
								<p>{userInfo.dayOnProject}</p>
							</div>
							<Link>
								<Button>Редактировать профиль</Button>
							</Link>
						</div>
					</aside>

					{currentBeat.length > 0 ? (
						<div className={styles.wrapperBeat}>
							<div className={styles.container}>
								<div>
									<div className={styles.head}>
										<h3>Название</h3>
										<h3>Время</h3>
										<h3>Скачать</h3>
									</div>
								</div>

								{currentBeat?.map((item, index) => (
									<div
										key={index}
										className={styles.properties}
									>
										<h5>
											{
												item.name
													.toUpperCase()
													.split('(')[0]
											}
										</h5>
										<audio
											src={`${item.trackPath}`}
											controls={true}
											loop
											controlsList='nodownload'
										></audio>
										<a href={item.downloadPath} download>
											<RiDownloadFill size={25} />
										</a>
									</div>
								))}
							</div>
						</div>
					) : (
						<h2>У вас пока нет купленных битов!</h2>
					)}
				</div>
			</Layout>
			<Footer />
		</>
	)
}

export default Profile
