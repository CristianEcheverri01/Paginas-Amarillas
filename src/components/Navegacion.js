import React, { useState } from 'react'
import Btns from './NavegationButtonsTop'
import Search from './NavegationSearch'
import Advertise from './NavegationAdvertise'
import Menu from './NavegationMenu'
//import estilos
import './styles/Navegacion.css'
//import img
import img from '../img/banner principal.png'

//firebase
//import { db } from '../firebase'

const Navegacion = props => {
	//estado inicial
	const estado = false
	const [login, setLogin] = useState(estado)

	const iniciarSesion = e => {
		console.log(e)
		setLogin(true)
	}

	const btns = e => {
		if (!e) {
			return <Btns iniciarSesion={iniciarSesion} />
		} else {
			return <h1>logueado</h1>
		}
	}

	return (
		<div className=''>
			<div className='div'>
				<img className='img' src={img} alt='hola img' />
			</div>
			{btns(login)}
			<Search />
			<Advertise />
			<Menu />
		</div>
	)
}

export default Navegacion
