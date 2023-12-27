import styles from '@/styles/Portfolio.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

type portfolio = {
	image: string
	subject: string
	type: string
	introduce: string[]
	frontend: string
	backend: string
	tools: string
	android: string
	ios: string
	web: string[]
}

const Card = (props: portfolio) => {
	const pfData: portfolio = {
		image: '',
		subject: '',
		type: '',
		introduce: [],
		frontend: '',
		backend: '',
		tools: '',
		android: '',
		ios: '',
		web: [],
	}

	let [count, setCount] = useState(0)
	let [pf, setPortfolio] = useState(pfData)

	useEffect(() => {
		console.log(props)
		console.log('prev', pf, ' effect', props)
		setPortfolio(props.portfolio)
		console.log('next', pf)
	}, [pf])

	return (
		<>
			<article className={styles.pf}>
				<div className={styles.left_con}>
					<img src={pf.image} alt={pf.subject} />
				</div>
				<div className={styles.right_con}>
					<div className={styles.table_wrap}>
						<table>
							<colgroup>
								<col width="30%" />
								<col width="*" />
							</colgroup>
							<thead>
								<tr>
									<th>구분</th>
									<th>내용</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>프로젝트명</th>
									<td>{pf.subject}</td>
								</tr>
								<tr>
									<th>소개</th>
									<td>
										<ul>
											{pf.introduce.map((list) => (
												<li>{list}</li>
											))}
										</ul>
									</td>
								</tr>
								<tr>
									<th>Frontend</th>
									<td>{pf.frontend}</td>
								</tr>
								{pf.backend && (
									<tr>
										<th>Brontend</th>
										<td>{pf.backend}</td>
									</tr>
								)}

								<tr>
									<th>사용 툴</th>
									<td>{pf.tools}</td>
								</tr>
							</tbody>
						</table>
					</div>
					{/* {pf.android && <Link href={pf.android}>Android</Link>}
					{pf.ios && <Link href={pf.ios}>IOS</Link>}
					{pf.web && <Link href={pf.web}>web</Link>} */}
				</div>
			</article>
		</>
	)
}

export default Card
