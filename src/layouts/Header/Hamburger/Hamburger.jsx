import cn from 'clsx'
import { useModal } from '../../../hooks/useModal'
import styles from './Hamburger.module.scss'
import HamburgerMenu from './HamburgerMenu'
const Hamburger = () => {
	const { isShow, setIsShow } = useModal(false)
	return (
		<div
			className={styles.hamburger}
			onClick={() => {
				setIsShow(!isShow)
			}}
		>
			<span
				className={
					isShow ? cn(styles.line, styles.active) : styles.line
				}
			></span>
			<span
				className={
					isShow ? cn(styles.line, styles.active) : styles.line
				}
			></span>
			<span
				className={
					isShow ? cn(styles.line, styles.active) : styles.line
				}
			></span>
			{isShow && <HamburgerMenu />}
		</div>
	)
}

export default Hamburger
