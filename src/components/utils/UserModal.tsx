import Image from '../shared/Image'

const UserModal = () => {
	return (
		<li className='line'>
			<Image
				src='https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056__340.jpg'
				alt='Nombre de la persona'
			/>
			<p>Jazmin Lana, Martinez Suares</p>
			<button>Agregar</button>
		</li>
	)
}

export default UserModal
