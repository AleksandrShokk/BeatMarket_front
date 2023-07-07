import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useNewBeat } from '../../../hooks/useNewBeat.js'
import Button from '../../ui/Button'
import Field from '../../ui/Field'
import styles from './CreateNewBeat.module.scss'

const CreateNewBeat = () => {
	const { control, errors, handleSubmit, isSuccess, onSubmit, register } =
		useNewBeat()

	return (
		<div className={styles.container}>
			<Link to='/' className={styles.exitButton}>
				<Button>
					<AiOutlineClose />
				</Button>
			</Link>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h1>Добавить бит</h1>
				{isSuccess && alert('Бит загружен!')}
				<div>
					<div>
						<Field
							error={errors?.email?.message}
							name='name'
							register={register}
							options={{
								...register('name', {
									required: 'Это обязательноe поле!'
								})
							}}
							type='text'
							placeholder='Название бита'
						/>
						<Field
							error={errors?.email?.message}
							name='category'
							register={register}
							options={{
								...register('category', {
									required: 'Это обязательноe поле!'
								})
							}}
							type='text'
							placeholder='Категория'
						/>
						<Field
							error={errors?.password?.message}
							name='author'
							register={register}
							options={{
								...register('author', {
									required: 'Это обязательное поле!'
								})
							}}
							type='text'
							placeholder='Автор'
						/>
					</div>
					<div>
						<Field
							error={errors?.password?.message}
							name='priceForMP3'
							register={register}
							options={{
								...register('priceForMP3', {
									required: 'Это обязательное поле!'
								})
							}}
							type='text'
							placeholder='Цена за мп3'
						/>
						<Field
							error={errors?.password?.message}
							name='priceForWav'
							register={register}
							options={{
								...register('priceForWav', {
									required: 'Это обязательное поле!'
								})
							}}
							type='text'
							placeholder='цена за Wav'
						/>
						<Field
							error={errors?.password?.message}
							name='priceForSoundtracks'
							register={register}
							options={{
								...register('priceForSoundtracks', {
									required: 'Это обязательное поле!'
								})
							}}
							type='text'
							placeholder='Цена за Soundtracks'
						/>
					</div>
					<div>
						<Field
							error={errors?.password?.message}
							name='pathMp3'
							register={register}
							options={{
								...register('pathMp3', {
									required: 'Это обязательное поле!'
								})
							}}
							type='text'
							placeholder='Ссылка на Mp3'
						/>
						<Field
							error={errors?.password?.message}
							name='pathWav'
							register={register}
							options={{
								...register('pathWav', {
									required: 'Это обязательное поле!'
								})
							}}
							type='text'
							placeholder='Ссылка на Wav'
						/>
						<Field
							error={errors?.password?.message}
							name='pathTracks'
							register={register}
							options={{
								...register('pathTracks', {
									required: 'Это обязательное поле!'
								})
							}}
							type='text'
							placeholder='Ссылка на tracks'
						/>
					</div>
				</div>
				<Button>Опубликовать</Button>
			</form>
		</div>
	)
}

export default CreateNewBeat
