import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import BeatService from '../services/Beat.service'

export const useNewBeat = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isSuccess } = useMutation(
		['create beat'],
		body => BeatService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate({
			name: data.name,
			category: data.category,
			author: data.author,
			priceForMP3: Number(data.priceForMP3),
			priceForWav: Number(data.priceForWav),
			priceForSoundtracks: Number(data.priceForSoundtracks),
			pathMp3: data.pathMp3,
			pathWav: data.pathWav,
			pathTracks: data.pathTracks
		})
	}
	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			control,
			onSubmit,
			isSuccess
		}),
		[errors, isSuccess]
	)
}
