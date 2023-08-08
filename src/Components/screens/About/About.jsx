import { Link } from 'react-router-dom'
import Footer from '../../../layouts/Footer/Footer'
import Layout from '../../../layouts/Layout'
import Button from '../../ui/Button'

const About = () => {
	return (
		<>
			<Layout>
				<div
					style={{
						width: '70%',
						textAlign: 'center',
						margin: '50px auto'
					}}
				>
					<a
						style={{
							marginBottom: '30px',
							fontSize: '30px',
							textAlign: 'center'
						}}
					>
						Кто мы такие?
					</a>
					<h4>
						Beat space - это уникальный интернет-магазин, в котором
						вы найдете широкий выбор музыкальной продукции различных
						жанров и стилей. Мы предлагаем редкие и эксклюзивные
						композиции от новых и перспективных артистов. Наш
						магазин предлагает простой и интуитивно понятный
						интерфейс, который позволяет легко найти интересующую
						вас музыку. Мы работаем напрямую с музыкантами, что
						позволяет нам предлагать вам лучшие цены на продукцию.
						Мы принимаем различные способы оплаты, включая кредитные
						карты, электронные платежи. Мы ценим каждого клиента и
						гарантируем высокий уровень обслуживания. Наслаждайтесь
						качественной и разнообразной музыкой с "Beat space" -
						вашим надежным партнером в мире битов и мелодий.
					</h4>
					<h3>
						Оформление заказа проходит быстро и безопасно (выбираете
						-{'>'} оплачиваете -{'>'} бит уже у вас в личном
						кабинете!).
					</h3>
					<Link to='/'>
						<Button>Перейти к покупкам!</Button>
					</Link>
				</div>
			</Layout>
			<Footer />
		</>
	)
}

export default About
