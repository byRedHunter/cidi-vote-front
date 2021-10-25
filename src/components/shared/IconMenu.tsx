import { Menu } from 'react-ionicons'

import { ButtonMenu } from '../../styles/utils'
import { useApp } from '../../store/useApp'

const IconMenu = () => {
	const { toggleMenu } = useApp((store) => store)

	return (
		<ButtonMenu onClick={toggleMenu}>
			<Menu />
		</ButtonMenu>
	)
}

export default IconMenu
