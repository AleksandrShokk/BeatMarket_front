import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import PaymentService from '../services/Payment.service'
export const useCheckout = () => {
	const cartItemsJson = localStorage.getItem('cart')
	const cartItems = JSON.parse(cartItemsJson)
	const [currentPrice, setCurrentPrice] = useState(cartItems.priceForMP3)

	const { mutate } = useMutation(
		['place order'],
		() =>
			PaymentService.placeOrder({
				item: [
					{
						price: currentPrice,
						beatId: cartItems.id
					}
				]
			}),
		{
			onSuccess({ data }) {
				window.location.assign(data.confirmation.confirmation_url)
			}
		}
	)
	return [mutate, cartItems, currentPrice, setCurrentPrice]
}
