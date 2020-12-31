import React, { useState } from 'react'
import { db } from '../firebase'
//styles
import './styles/Register/RegisterForm.css'
import './styles/Register/check.css'
const RegisterForm = () => {
	//estado inicial
	const url = 'localhost:3000/'
	const estado = {}
	const [values, setValues] = useState(estado)

	const handlerInputChange = e => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	const handlerSubmit = async e => {
		e.preventDefault()
		//create new user in firebase
		await db.collection('user').doc().set(values)
	}
	return (
		<>
			<h2 className='text'>Formulario de registro</h2>
			<form className='form' onSubmit={handlerSubmit}>
				<div className='relative'>
					<i className='far fa-user icon'></i>
					<input
						type='text'
						placeholder='nombre de usuario'
						className='center'
						name='name'
						onChange={handlerInputChange}
					/>
				</div>
				<div className='relative'>
					<i className='far fa-envelope icon'></i>
					<input
						type='email'
						placeholder='correo electronico'
						className='center'
						name='email'
						onChange={handlerInputChange}
					/>
				</div>
				<div className='relative'>
					<i className='fas fa-key icon'></i>
					<input
						type='password'
						placeholder='contraseña'
						className='center'
						name='pass'
						onChange={handlerInputChange}
					/>
				</div>
				<div className='relative'>
					<i className='fas fa-key icon'></i>
					<input
						type='password'
						placeholder='repita la contraseña'
						className='center'
						name='passRep'
						onChange={handlerInputChange}
					/>
				</div>
				<div className='relative'>
					<input type='checkbox' id='_checkbox' />
					<label for='_checkbox'>
						<div id='tick_mark'></div>
					</label>
					<p className='p'>Aceptar términos y condiciónes</p>
				</div>
				<button className='btn-sends'> Registrate</button>
			</form>
		</>
	)
}

export default RegisterForm
