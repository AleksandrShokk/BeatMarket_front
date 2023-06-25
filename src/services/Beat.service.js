import { $axios } from '../api'
export const BEAT = '/beat'

class BeatService {
	async getAll() {
		return $axios.get(BEAT)
	}
	async getByCategory(category) {
		return $axios.get(`${BEAT}/${category}`)
	}
	async create(body) {
		return $axios.post(BEAT, body)
	}
	async update(id, body) {
		return $axios.put(`${BEAT}/${id}`, body)
	}
	async delete(id) {
		return $axios.delete(`${BEAT}/${id}`)
	}
}
export default new BeatService()
