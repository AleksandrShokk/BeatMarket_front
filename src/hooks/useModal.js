import { useState } from 'react'

export const useModal = () => {
	const [isShow, setIsShow] = useState(false)
	return { isShow, setIsShow }
}
