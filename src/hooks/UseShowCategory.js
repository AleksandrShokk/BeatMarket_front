import { useForm } from 'react-hook-form'

const useShowCategory = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})
}
