import { useQuery } from '@tanstack/react-query'

import BeatService from '../services/Beat.service'

export const useListBeat = () => {
	return useQuery(['List beats'], () => BeatService.getAll(), {
		select: ({ data }) => data
	})
}
