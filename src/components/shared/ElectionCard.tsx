import {
	ElecctionActions,
	ElecctionCardWrapper,
	ElecctionTitle,
} from '../../styles/pages/home'

const ElectionCard = () => {
	return (
		<ElecctionCardWrapper>
			<ElecctionTitle>Presidente de Mesa</ElecctionTitle>
			<p>
				Una pequeña descripción del cargo, de que trata o quque actividades
				realizara.
			</p>
			<ElecctionActions>
				<div>
					<button>Candidatos</button>
					<button>Votantes</button>
				</div>
				<button className='main'>Resultados</button>
			</ElecctionActions>
		</ElecctionCardWrapper>
	)
}

export default ElectionCard
