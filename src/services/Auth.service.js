import Cookies from 'js-cookie'
import { $axios } from '../api'
import { TOKEN } from '../app.constant'

class AuthService {
	async main(email, password, userName = '', type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				userName,
				email,
				password
			})

			if (data.refreshToken) Cookies.set(TOKEN, data.refreshToken)

			return data
		} catch (error) {
			const errorMessage = error.response.data.message
			alert(errorMessage)
			throw new Error(errorMessage)
		}
	}
}

export default new AuthService()
