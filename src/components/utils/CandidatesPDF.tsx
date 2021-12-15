import { Document, Page, View, Text, Image } from '@react-pdf/renderer'
import { PDFStyles } from './PDFStyles'
import { UserInfo } from '../../interfaces/index'

interface PropsCandidatesPDF {
	candidates: UserInfo[]
	position: string
}

const CandidatesPDF = ({ candidates, position }: PropsCandidatesPDF) => {
	return (
		<Document>
			<Page orientation='portrait' size='A4' style={PDFStyles.document}>
				<View style={PDFStyles.header}>
					<Image
						src='/images/header-candidates.png'
						style={PDFStyles.headerImg}
					/>
				</View>

				<View style={PDFStyles.body}>
					<View style={PDFStyles.bodyInfo}>
						<Text style={PDFStyles.title}>Cargo:</Text>
						<Text style={[PDFStyles.content, PDFStyles.position]}>
							{position}
						</Text>
					</View>

					<View style={PDFStyles.bodyInfo}>
						<Text style={PDFStyles.title}>Listado:</Text>
					</View>

					{candidates.length > 0 ? (
						<View style={PDFStyles.table}>
							<View style={PDFStyles.tableHeader}>
								<View style={PDFStyles.colImage}>
									<Text>Foto</Text>
								</View>
								<View style={PDFStyles.colDNI}>
									<Text>DNI</Text>
								</View>
								<View style={PDFStyles.colName}>
									<Text>Nombres</Text>
								</View>
								<View style={PDFStyles.colName}>
									<Text>Apellidos</Text>
								</View>
							</View>

							{candidates.map((el) => (
								<View key={el.uid} style={PDFStyles.tableRow}>
									<View style={PDFStyles.colImage}>
										<Image src={el.image} style={PDFStyles.tableImage} />
									</View>
									<View style={PDFStyles.colDNI}>
										<Text style={PDFStyles.content}>{el.dni}</Text>
									</View>
									<View style={PDFStyles.colName}>
										<Text style={PDFStyles.content}>{el.name}</Text>
									</View>
									<View style={PDFStyles.colName}>
										<Text style={PDFStyles.content}>{el.lastName}</Text>
									</View>
								</View>
							))}
						</View>
					) : (
						<View style={PDFStyles.bodyInfo}>
							<Text style={PDFStyles.title}>
								No hay candidatos disponibles.
							</Text>
						</View>
					)}
				</View>
			</Page>
		</Document>
	)
}

export default CandidatesPDF
