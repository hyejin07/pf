import styles from '@/styles/Portfolio.module.css'
import lists from '@/db/portfolio.json'
import { prefix } from '@/config/config'

const Portfolio = () => {
	return (
		<section id="portfolio" className="portfolio">
			<div className="pf_wrapper">
				{lists.pf.map((pf, i) => (
					<div key={i}>
						<article className={styles.pf}>
							<div className={styles.left_con}>
								<img src={prefix ? `${prefix}${pf.image}` : pf.image} alt={pf.subject} />
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
													<ul>{pf.introduce && pf.introduce.map((list, i) => <li key={i}>{list}</li>)}</ul>
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
					</div>
				))}
			</div>
		</section>
	)
}

export default Portfolio
