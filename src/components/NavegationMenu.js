import React from 'react'

//styles
import './styles/NavegationMenu.css'

const NavegationMenu = props => {
	const handlerClick = e => {
		const list = document.getElementsByClassName('active')
		list[0].classList.remove('active')

		e.target.classList.toggle('active')
	}

	return (
		<div className='menu-container'>
			<div className='list'>
				<ol>
					<li className='uno active' onClick={handlerClick}>
						Otros
					</li>
					<li className='dos' onClick={handlerClick}>
						Supermercados
					</li>
					<li className='tres' onClick={handlerClick}>
						Droguerias
					</li>
					<li className='cuatro' onClick={handlerClick}>
						Comidas
					</li>
					<li className='cinco' onClick={handlerClick}>
						Colegios
					</li>
				</ol>
			</div>
		</div>
	)
}

export default NavegationMenu
