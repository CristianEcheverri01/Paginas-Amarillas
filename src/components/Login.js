import React, { useState } from 'react'

//styles
import './styles/Login.css'
const Login = ({ show, iniciarSesion }) => {
	//estado inicial
	const inicial = {
		user: '',
		pass: '',
	}

	const [user, setUser] = useState(inicial)

	const handlerInputChange = e => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}

	const handlerClickClose = () => {
		show(false)
	}

	const handlerSubmit = e => {
		e.preventDefault()
		iniciarSesion(user)
	}
	return (
		<div className='login-container'>
			<div className='card'>
				<div className='card-header'>
					<h2>Inicia sesion</h2>
					<button className='close' onClick={handlerClickClose}>
						X
					</button>
				</div>
				<div className='card-body'>
					<form className='form' onSubmit={handlerSubmit}>
						<div>
							<label htmlFor='user'>Nombre de usuario</label>
							<input
								type='text'
								name='user'
								id='user'
								className='input-user'
								onChange={handlerInputChange}
							/>
						</div>
						<div className='pass-container'>
							<label htmlFor='pass'>Contraseña</label>
							<input
								type='password'
								className='input-pass'
								name='pass'
								id='pass'
								onChange={handlerInputChange}
							/>
						</div>
						<button type='submit' className='btn-send'>
							Iniciar sesion
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
