import skills from '@/db/skills.json'
import styles from '@/styles/Resume.module.css'

const Skills = () => {
	return (
		<div className={styles.table_wrap}>
			<h3>주요 기술</h3>
			<table>
				<colgroup>
					<col width="18%" />
					<col width="*" />
				</colgroup>
				<thead>
					<tr>
						<th>구분</th>
						<th>내용</th>
					</tr>
				</thead>
				<tbody>
					{skills.skills.map((skill, i) => (
						<tr key={i}>
							<th>{skill.type}</th>
							<td>
								<ul>
									{skill.contents.map((con, j) => (
										<li key={j}>
											<strong>{con}</strong>
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
export default Skills
