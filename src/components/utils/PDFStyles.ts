import { StyleSheet } from '@react-pdf/renderer'

export const PDFStyles = StyleSheet.create({
	document: {
		width: '100vw',
		minHeight: '100vh',
	},
	header: {
		width: '100%',
		display: 'flex',
		marginBottom: '10px',
	},
	headerImg: {
		width: '400px',
		alignSelf: 'flex-end',
	},
	body: {
		width: '100%',
		padding: '0 50px 50px 50px',
	},
	bodyInfo: {
		marginBottom: '20px',
	},
	title: {
		fontWeight: 'extrabold',
		fontSize: '16px',
	},
	content: {
		fontWeight: 'thin',
		fontSize: '16px',
		marginTop: '8px',
	},
	position: {
		textTransform: 'uppercase',
	},
	table: {
		width: '100%',
	},
	tableHeader: {
		width: '100%',
		backgroundColor: '#E5E5E5',
		color: '#000',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		height: '34px',
	},
	tableRow: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderBottom: '2px solid #DFDFDF',
		marginTop: '10px',
		height: '70px',
		paddingBottom: '10px',
	},
	colImage: {
		flex: '1',
		padding: '0 5px',
		objectFit: 'cover',
	},
	tableImage: {
		height: '60px',
		width: '60px',
		borderRadius: '50%',
	},
	colDNI: {
		flex: '1',
		padding: '0 5px',
	},
	colName: {
		flex: '2',
		padding: '0 5px',
	},
})
