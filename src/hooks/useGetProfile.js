import { useProfile } from './useProfile'

export const useGetProfile = () => {
	function getNumberOfDays(start, end) {
		const date1 = start
		const date2 = end
		const oneDay = 1000 * 60 * 60 * 24
		const diffInTime = date2.getTime() - date1.getTime()
		const diffInDays = Math.round(diffInTime / oneDay)

		return diffInDays
	}

	let userInfo = {}
	function getUserInfo() {
		const { data } = useProfile()
		const nowDate = new Date()
		const registeredDate = new Date(data?.createdAt)
		console.log(data)
		userInfo = {
			nickName: data?.userName,
			amountBeats: data?.amountBeats,
			dayOnProject: getNumberOfDays(registeredDate, nowDate),
			obtainedBeat: data?.obtainedBeat
		}
		return userInfo
	}

	return getUserInfo()
}
