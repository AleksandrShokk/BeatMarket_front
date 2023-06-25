import { Link } from 'react-router-dom'
import { useAuthPage } from '../../hooks/useAuthPage'
import styles from '../screens/Auth/Auth.module.scss'
import Button from '../ui/Button'
import Field from '../ui/Field'
const RegisterModal = () => {
	const { errors, handleSubmit, onSubmit, register, setType } = useAuthPage()
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Регистрация</h1>
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
				<Button clickHandler={() => setType('register')}>
					Зарегистрироваться
				</Button>
			</div>
			<Link onClick={() => setISShow(false)}> Вернуться назад</Link>
		</form>
	)
}

export default RegisterModal
