import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/Auth.service'
import { useAuth } from './useAuth'

export const useAuthPage = () => {
	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ mode: 'onChange' })

	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])
	const { mutate } = useMutation(
		['auth'],
		({ email, password, userName }) =>
			AuthService.main(email, password, userName, type),
		{
			onSuccess: data => {
				setIsAuth(true)
				reset()
			}
		}
	)
	const onSubmit = data => {
		mutate(data)
	}
	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			onSubmit
		}),
		[errors]
	)
}
