import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/fullLogo.png'
import { useAuth } from '../../hooks/useAuth'
import styles from './Header.module.scss'
import { navbar } from './navbar.data'

const Header = () => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	return (
		<header className={styles.header}>
			<button>
				<img src={logo} alt='logo' className={styles.logo} />
			</button>
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
							<button
								onClick={() => {
									navigate('/profile')
								}}
							>
								Профиль
							</button>
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
