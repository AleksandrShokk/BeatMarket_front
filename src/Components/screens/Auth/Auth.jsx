import { useAuthPage } from '../../../hooks/useAuthPage'
import Button from '../../ui/Button'
import Field from '../../ui/Field'
import styles from './Auth.module.scss'

const Auth = () => {
	const { errors, register, setType } = useAuthPage()
	return (
		<>
			<h1>Вход</h1>
			<Field
				error={errors?.email?.message}
				name='email'
				register={register}
				options={{
					...register('email', {
						required: 'Это обязательноe поле!'
					})
				}}
				type='email'
				placeholder='Введите email'
			/>
			<Field
				error={errors?.password?.message}
				name='password'
				register={register}
				options={{
					...register('password', {
						required: 'Это обязательное поле!'
					})
				}}
				type='password'
				placeholder='Введите пароль'
			/>
			<div className={styles.buttonContainer}>
				<Button
					clickHandler={() => {
						setType('login')
					}}
				>
					Войти
				</Button>
			</div>
		</>
	)
}

export default Auth
