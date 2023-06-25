import Header from './Header/Header'
import styles from './Layout.module.scss'

const Layout = ({ children, bgImg, heading }) => {
	return (
		<section
			className={styles.wrapper}
			style={{ backgroundImage: `url('${bgImg}')` }}
		>
			<Header />

			{heading && <h1 className={styles.heading}>{heading}</h1>}

			{children && (
				<div style={{ backdropFilter: 'blur(10px)' }}>{children}</div>
			)}
		</section>
	)
}

export default Layout
