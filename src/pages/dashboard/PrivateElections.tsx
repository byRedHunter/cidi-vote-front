import React from 'react'
import ModalWrapper from '../../components/shared/ModalWrapper'
import {
	ListCandidates,
	ModalTitle,
	SectionDescription,
	SectionInfo,
} from '../../styles/utils'

const MyElections = () => {
	return (
		<div>
			<p>usuario elections</p>

			<ModalWrapper>
				<ModalTitle>Emitir Voto</ModalTitle>
				<SectionDescription>
					Seleccione a su candidato favorito para emitir su voto.
				</SectionDescription>
				<SectionInfo>Candidatos</SectionInfo>

				<ListCandidates>{/* <CardCandidate /> */}</ListCandidates>
			</ModalWrapper>
		</div>
	)
}

export default MyElections
