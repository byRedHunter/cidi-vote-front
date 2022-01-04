import ChartistGraph from 'react-chartist'
import { ResultsElection } from '../../interfaces'
import { ModalTitle, ResultContainer, Winner } from '../../styles/utils'

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
	let veces = 0

	series.forEach((el) => {
		if (el === mayor) {
			veces += 1
		}
	})
	console.log(mayor, veces)

	const empate = veces > 1 ? true : false
	const index = series.indexOf(mayor)
	const winner = results[index]

	const options = {
		high: mayor < 5 ? 5 : mayor,
		low: 0,
		onlyInteger: true,
	}

	return (
		<>
			<ModalTitle style={{ textAlign: 'center' }}>
				Resultados para la elección: <br /> "{position}"
			</ModalTitle>

			{labels.length > 0 && series.length > 0 ? (
				<ResultContainer>
					{empate ? (
						<Winner>
							<h3>No hay un ganador.</h3>
						</Winner>
					) : (
						<Winner>
							<h2>El ganador de la eleccion es:</h2>
							<h3>
								{`${winner.candidate.name} ${winner.candidate.lastName} con ${
									winner.amount
								} voto${winner.amount > 1 ? 's' : ''}`}
							</h3>
						</Winner>
					)}
					<ChartistGraph
						data={{ labels: labels, series: [series] }}
						options={options}
						type='Bar'
						style={{ display: 'block', marginTop: '4rem', width: '100%' }}
					/>
				</ResultContainer>
			) : (
				<Loading />
			)}
		</>
	)
}

export default Results
