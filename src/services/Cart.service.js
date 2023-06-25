import { $axios } from '../api'

export const CART = '/cart'

class CartService {
	async createCart(body) {
		return $axios.post(CART, body)
	}
	async getCartById(id) {
		return $axios.get(`${CART}/${id}`)
	}
	async deleteCart(id) {
		return $axios.delete(`${CART}/${id}`)
	}
}

export default new CartService()
