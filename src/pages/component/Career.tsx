import careers from '@/db/career.json'
import styles from '@/styles/Resume.module.css'

const Career = () => {
	return (
		<div className={styles.table_wrap}>
			<h3>경력</h3>
			<table>
				<colgroup>
					<col width="18%" />
					<col width="18%" />
					<col width="*" />
				</colgroup>
				<thead>
					<tr>
						<th>회사명</th>
						<th>재직기간</th>
						<th>주요업무</th>
					</tr>
				</thead>
				<tbody>
					{careers.career.map((career) => (
						<tr key={career.id}>
							<th>{career.company}</th>
							<td>{career.year}</td>
							<td>
								<ul>
									{career.works.map((work, i) => (
										<li key={i}>
											<strong>{work.title}</strong>
											<p>{work.contents}</p>
										</li>
									))}
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
export default Career
