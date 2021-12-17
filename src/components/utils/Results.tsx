import ChartistGraph from 'react-chartist'
import { ResultsElection } from '../../interfaces'
import { ModalTitle, ResultContainer } from '../../styles/utils'

import 'chartist/dist/chartist.css'
import Loading from '../shared/Loading'

interface PropsResults {
	results: ResultsElection[]
	position: string
}

const Results = ({ results, position }: PropsResults) => {
	if (results.length === 0) {
		return (
			<>
				<ModalTitle>
					Resultados para la elección: <br /> "{position}"
				</ModalTitle>
				<p>Esta eleccion no cuenta con resultados</p>
			</>
		)
	}

	const labels: string[] = []
	const series: number[] = []

	results.forEach((el) => {
		labels.push(`${el.candidate.lastName}`)
		series.push(el.amount)
	})

	const mayor = Math.max(...series)

	const options = {
		high: mayor < 5 ? 5 : mayor,
		low: 0,
		onlyInteger: true,
	}

	return (
		<>
			<ModalTitle>
				Resultados para la elección: <br /> "{position}"
			</ModalTitle>

			{labels.length > 0 && series.length > 0 ? (
				<ResultContainer>
					<ChartistGraph
						data={{ labels: labels, series: [series] }}
						options={options}
						type='Bar'
					/>
				</ResultContainer>
			) : (
				<Loading />
			)}
		</>
	)
}

export default Results
