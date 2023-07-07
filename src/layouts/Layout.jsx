import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'

const Layout = ({ children, bgImg, heading, isActive }) => {
	return (
		<>
			<section className={styles.wrapper}>
				<Header />

				{heading && <h1 className={styles.heading}>{heading}</h1>}

				{children && (
					<div
						style={{
							backdropFilter: 'blur(10px)',
							backgroundImage: `url('${bgImg}')`,
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover'
						}}
					>
						{children}
					</div>
				)}
			</section>
			{isActive && <Footer />}
		</>
	)
}

export default Layout
