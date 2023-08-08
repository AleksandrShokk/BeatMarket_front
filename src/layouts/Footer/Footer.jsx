import { AiOutlineMail } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { SlSocialVkontakte } from 'react-icons/sl'
import styles from './Footer.module.scss'
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<a href=''>
					<BsTelegram />
				</a>
				<a href='mailto:beatspace.coop@gmail.com'>
					<AiOutlineMail />
				</a>
				<a href='https://vk.com/beat_space'>
					<SlSocialVkontakte />
				</a>
			</div>
		</footer>
	)
}

export default Footer
