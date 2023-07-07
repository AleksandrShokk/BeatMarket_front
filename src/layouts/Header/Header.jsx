import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { TOKEN } from '../../app.constant'
import logo from '../../assets/fullLogo.png'
import { useAuth } from '../../hooks/useAuth'
import { useProfile } from '../../hooks/useProfile'
import styles from './Header.module.scss'
import { navbar } from './navbar.data'

const Header = () => {
	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()
	const logOutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
	}
	const { data } = useProfile()
	return (
		<header className={styles.header}>
			<Link to='/'>
				<img src={logo} alt='logo' className={styles.logo} />
			</Link>
			<nav>
				<ul>
					{navbar.map((itemNav, index) => (
						<li key={`${index}`}>
							<Link to={itemNav.link}>{itemNav.heading}</Link>
						</li>
					))}

					<li>
						<span></span>
						{isAuth ? (
							<>
								<button
									onClick={() => {
										navigate(`/profile`)
									}}
								>
									Профиль
								</button>
								<a href='/'>
									<button onClick={logOutHandler}>
										Выйти
									</button>
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
							</>
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
			</nav>
		</header>
	)
}

export default Header
