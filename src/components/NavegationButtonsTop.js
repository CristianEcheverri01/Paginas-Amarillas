import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import styles
import './styles/NavegationButtonsTop.css'
import Login from './Login'

const Loginsito = props => {
	const show = props.showLogin
	if (show) {
		return (
			<div>
				<Login show={props.setShowLogin} iniciarSesion={props.iniciarSesion} />
			</div>
		)
	} else {
		return <div></div>
	}
}

const NavegationButtonsTop = ({ iniciarSesion }) => {
	const [showLogin, setShowLogin] = useState(false)

	const handlerClickLogin = () => {
		setShowLogin(true)
	}

	return (
		<div className='btns'>
			<button className='btn-login redondo p-1 m-t-1' onClick={handlerClickLogin}>
				Inicia sesion
			</button>
			<Link to='register'>
				<button className='btn-register redondo p-1 m-t-1'>Registrate</button>
			</Link>
			<Loginsito
				showLogin={showLogin}
				setShowLogin={setShowLogin}
				iniciarSesion={iniciarSesion}
			/>
		</div>
	)
}

export default NavegationButtonsTop
