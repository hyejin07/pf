import styles from '@/styles/About.module.css'

const About = () => {
	return (
		<>
			<section className={styles.home}>
				<ul className={styles.hello}>
					<li>#소통 잘 되는</li>
					<li>#같이 일하고 싶은</li>
					<li>#FrontEnd</li>
				</ul>
				<article className={styles.profile}>
					<div className={styles.img_wrap}>
						<img src="/images/profile.jpg" alt="프론트엔드 개발자 김혜진" />
					</div>
					<div>
						<ul>
							<li>Frontend Developer</li>
							<li>김혜진</li>
							<li>1994.07.18</li>
							<li>yhhj0723@naver.com</li>
						</ul>
					</div>
				</article>
			</section>
			<article className={styles.introduce}>
				<h4>#</h4>
				<p>
					동료들과 서로 존중하며 커뮤니케이션하는 것을 좋아합니다.
					<br />
					원활한 소통은 더 좋은 서비스를 만들다는 믿음이 있습니다. <br />
					다양한 직군의 동료들과 함께 일하면
					<br />
					다음에도 같이 프로젝트를 하고 싶다는 피드백을 받고는 합니다.
				</p>
			</article>
		</>
	)
}

export default About
