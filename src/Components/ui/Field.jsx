import styles from './Field.module.scss'

const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div className={styles.container}>
			<input {...register(name)} {...rest} />
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default Field
