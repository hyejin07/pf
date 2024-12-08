import React from 'react'
import Header from './Header'
import Head from 'next/head'
import Footer from './Footer'

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Head>
				<title>프론트엔드 김혜진 포트폴리오</title>
				<meta name="description" content="프론트엔드 김혜진 포트폴리오" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <Header />
			<main className="main">{children}</main>
			<Footer /> */}
		</>
	)
}

export default Layout
