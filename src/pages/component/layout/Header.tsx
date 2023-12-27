import styles from '@/styles/Header.module.css'
import { useRouter } from 'next/router'

export interface Props {
	title?: string
}

const Header = () => {
	const router = useRouter()

	console.log(router.pathname)

	return (
		<>
			<header className={styles.header}>
				<div>
					<h1 className={styles.logo} onClick={() => router.push('/')}>
						&lt;<span>HJ </span>/&gt;
					</h1>
					<nav className={styles.nav}>
						<ul>
							<li className={router.pathname === '/' ? 'active' : ''} onClick={() => router.push('/')}>
								Home
							</li>
							<li className={router.pathname === '/resume' ? 'active' : ''} onClick={() => router.push('/resume')}>
								Career
							</li>
							<li
								className={router.pathname === '/portfolio' ? 'active' : ''}
								onClick={() => router.push('/portfolio')}>
								Portfolio
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header
