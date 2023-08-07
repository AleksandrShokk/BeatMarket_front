import CreateNewBeat from '/src/Components/screens/Admin/CreateNewBeat.jsx'
import AuthPage from '/src/Components/screens/Auth/AuthPage.jsx'
import CheckOut from '/src/Components/screens/CheckOut/CheckOut.jsx'
import Home from '/src/Components/screens/Home/Home.jsx'
import Profile from '/src/Components/screens/Profile/Profile.jsx'
import SellBeat from '/src/Components/screens/SellBeat/SellBeat.jsx'

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
