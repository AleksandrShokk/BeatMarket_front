import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { TOKEN } from '../../../app.constant'
import { useAuth } from '../../../hooks/useAuth'
import { useProfile } from '../../../hooks/useProfile'
import { navbar } from '../navbar.data'
import styles from './HamburgerMenu.module.scss'
const HamburgerMenu = () => {
	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()
	const logOutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
	}
	const { data } = useProfile()
	return (
		<div className={styles.menu}>
			<ul>
				{navbar.map((itemNav, index) => (
					<li key={`${index}`}>
						<Link to={itemNav.link}>{itemNav.heading}</Link>
					</li>
				))}

				<li>
					{isAuth ? (
						<div className={styles.buttonContainer}>
							<button
								onClick={() => {
									navigate(`/profile`)
									location.reload()
								}}
							>
								Профиль
							</button>
							<a href='/'>
								<button onClick={logOutHandler}>Выйти</button>
							</a>
							{data?.role === 'ADMIN' ? (
								<button
									onClick={() => {
										navigate(
											'/admin10229u32jdinebhqbwlcnamscns'
										)
									}}
								>
									Добавить бит
								</button>
							) : (
								<></>
							)}
						</div>
					) : (
						<button
							onClick={() => {
								navigate('/auth')
							}}
						>
							Войти
						</button>
					)}
				</li>
			</ul>
		</div>
	)
}

export default HamburgerMenu
