import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import { TOKEN } from '../../../app.constant'
import { useAuth } from '../../../hooks/useAuth'

const Profile = () => {
	const { setIsAuth } = useAuth()

	const logOutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
	}
	return (
		<Link to={'/'}>
			<button onClick={logOutHandler}>Выйти</button>
		</Link>
	)
}

export default Profile
