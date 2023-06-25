import Cookies from 'js-cookie'
import { $axios } from '../api'
import { TOKEN } from '../app.constant'

class AuthService {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})

			if (data.token) Cookies.set(TOKEN, data.token)

			return data
		} catch (error) {
			const errorMessage = error.response.data.message
			alert(errorMessage)
			throw new Error(errorMessage)
		}
	}
}

export default new AuthService()
