import { $axios } from '../api'
export const ORDER = '/order'

class PaymentService {
	async placeOrder(body) {
		return $axios.post(`/order`, body)
	}
}

export default new PaymentService()
