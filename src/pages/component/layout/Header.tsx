import { useRouter } from 'next/router'

export interface Props {
	title?: string
}

const Header = ({ title }: Props) => {
	const router = useRouter()
	const back = () => {
		router.back()
	}

	return (
		<>
			<header>{title}</header>
		</>
	)
}

export default Header
