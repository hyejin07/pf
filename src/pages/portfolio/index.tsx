import Card from '../component/Card'
import lists from '@/db/portfolio.json'

interface portfolio {
	image: string
	subject: string
	type: string
	introduce: string[]
	frontend: string
	backend: string
	tools: string
	android: string
	ios: string
	web: string
}

const Portfolio = () => {
	return (
		<section id="portfolio" className="portfolio">
			{/* <div className="linkbox cf"></div> */}
			<div className="pf_wrapper">
				{lists.pf.map((pf: portfolio, i) => (
					<div key={i}>
						<Card portfolio={pf} />
					</div>
				))}
			</div>
		</section>
	)
}

export default Portfolio
