import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './component/layout/Layout'
import { PortfolioProvider } from './component/context/context'
import { prefix } from '../config/config'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<PortfolioProvider value={{ prefix }}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</PortfolioProvider>
	)
}
