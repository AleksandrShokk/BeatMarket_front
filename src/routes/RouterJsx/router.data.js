import CreateNewBeat from '../../Components/screens/Admin/CreateNewBeat'
import AuthPage from '../../Components/screens/Auth/AuthPage'
import CheckOut from '../../Components/screens/CheckOut/CheckOut'
import Home from '../../Components/screens/Home/Home'
import Profile from '../../Components/screens/Profile/Profile'
import SellBeat from '../../Components/screens/SellBeat/SellBeat'

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
		path: '/checkout',
		isAuth: true
	},

	// {
	// 	// component: <About/>
	// },
	{
		component: SellBeat,
		path: 'sellbeat',
		isAuth: true
	},
	{
		component: CreateNewBeat,
		path: 'admin10229u32jdinebhqbwlcnamscns',
		isAuth: true
	}
]
