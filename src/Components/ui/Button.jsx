import styles from './Button.module.scss'
const Button = ({ children, clickHandler = null }) => {
	return (
		<div>
			<button className={styles.button} onClick={clickHandler}>
				{children}
			</button>
		</div>
	)
}

export default Button
