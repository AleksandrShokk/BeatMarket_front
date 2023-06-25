import AuthPage from '../../Components/screens/Auth/AuthPage'
import CheckOut from '../../Components/screens/CheckOut/CheckOut'
import Home from '../../Components/screens/Home/Home'
import Profile from '../../Components/screens/Profile/Profile'

export const router = [
	{
		component: Home,
		path: '/',
		isAuth: false
	},
	{
		component: AuthPage,
		path: '/auth',
		isAuth: false
	},
	{
		component: Profile,
		path: '/profile',
		isAuth: true
	},
	{
		component: CheckOut,
		path: '/checkOut',
		isAuth: true
	}

	// {
	// 	// component: <About/>
	// },
	// {
	// 	// component: <SellBeat/>
	// }
]
