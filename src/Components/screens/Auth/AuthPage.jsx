import bgImg from '../../../assets/Auth.jpg'
import { useAuthPage } from '../../../hooks/useAuthPage.js'
import { useModal } from '../../../hooks/useModal'
import Layout from '../../../layouts/Layout'
import RegisterModal from '../../modal/RegisterModal'
import Button from '../../ui/Button'
import Field from '../../ui/Field'
import styles from './Auth.module.scss'

const AuthPage = () => {
	const { errors, handleSubmit, onSubmit, register, setType } = useAuthPage()
	const { isShow, setIsShow } = useModal()
	return (
		<Layout bgImg={bgImg}>
			<div className='wrapper-inner-page'>
				{isShow ? (
					<RegisterModal setIsShow={setIsShow} />
				) : (
					<form onSubmit={handleSubmit(onSubmit)}>
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
							<Button clickHandler={() => setType('login')}>
								Войти
							</Button>
						</div>
						<h3>
							Нет аккаунта?{' '}
							<a onClick={() => setIsShow(!isShow)}>
								Зарегистрироваться!
							</a>
						</h3>
					</form>
				)}
			</div>
		</Layout>
	)
}

export default AuthPage
