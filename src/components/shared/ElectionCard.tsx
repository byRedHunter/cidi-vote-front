import { ActionCard } from '../../interfaces/enums'
import {
	ElecctionActions,
	ElecctionCardWrapper,
	ElecctionTitle,
} from '../../styles/pages/home'

interface PropsElectionCard {
	action: ActionCard
}

const ElectionCard = ({ action }: PropsElectionCard) => {
	return (
		<ElecctionCardWrapper>
			<ElecctionTitle>Presidente de Mesa</ElecctionTitle>
			<p>
				Una pequeña descripción del cargo, de que trata o quque actividades
				realizara.
			</p>
			<ElecctionActions>
				{action === ActionCard.home && (
					<>
						<div>
							<button>Candidatos</button>
							<button>Votantes</button>
						</div>
						<button className='main'>Resultados</button>
					</>
				)}

				{action === ActionCard.election && (
					<>
						<div>
							<button>Editar</button>
							<button>Eliminar</button>
						</div>
						<button className='main'>Cerrar</button>
					</>
				)}

				{action === ActionCard.candidates && (
					<>
						<div>
							<button>Agregar</button>
						</div>
					</>
				)}

				{action === ActionCard.voters && (
					<>
						<div>
							<button>Agregar</button>
						</div>
					</>
				)}

				{action === ActionCard.user && (
					<>
						<div></div>
						<button className='main'>Votar</button>
					</>
				)}
			</ElecctionActions>
		</ElecctionCardWrapper>
	)
}

export default ElectionCard
