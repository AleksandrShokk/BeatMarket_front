// import YooKassa from 'yookassa'
// const yooKassa = new YooKassa({
// 	shopId: '222508',
// 	secretKey: 'test_hqzdUvzkQB2CTgCC0P7mtI7GownM5X-X1Wy_WqKEorE'
// })
// export const usePayment = async () => {
// 	const payment = await yooKassa.createPayment({
// 		amount: {
// 			value: '2.00',
// 			currency: 'RUB'
// 		},
// 		payment_method_data: {
// 			type: 'bank_card'
// 		},
// 		confirmation: {
// 			type: 'redirect',
// 			return_url: 'http://localhost:5173/'
// 		},
// 		description: 'Заказ №72',
// 		capture: true
// 	})
// 	const paymentStatus = yooKassa.getPayment.status

// 	if (paymentStatus === 'succeeded') {
// 		res.status(200)
// 		return payment
// 	}
// }
