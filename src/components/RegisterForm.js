import React, { useState } from 'react'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
//styles
import './styles/Register/RegisterForm.css'
import './styles/Register/check.css'

const RegisterForm = () => {
	//estado inicial
	const data = new Date()
	const estado = {
		data: data,
		email: '',
		name: '',
		pass: '',
		passRep: '',
	}
	const [values, setValues] = useState(estado)
	const [check, setCheck] = useState(false)

	const handlerInputChange = e => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	const handlerClick = () => {
		//toggle check
		check ? setCheck(false) : setCheck(true)
	}

	const handlerClickArrow = () => {}

	const handlerSubmit = async e => {
		e.preventDefault()
		//create new user in firebase

		if (document.forms[0].pass.value === document.forms[0].passRep.value) {
			if (check) {
				await db.collection('user').doc().set(values)
				document.forms[0].name.value = estado.name
				document.forms[0].email.value = estado.email
				document.forms[0].pass.value = estado.pass
				document.forms[0].passRep.value = estado.passRep
			} else {
				alert('recuerde aceptar termino y condiciones')
			}
		} else {
			alert('recuerde las claves deben coincidirs')
		}
	}

	return (
		<>
			<Link className='arrow' to='/'>
				<i className='fas fa-arrow-left ' onClick={handlerClickArrow}></i>
			</Link>
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
					<input
						type='checkbox'
						id='_checkbox'
						className='checks'
						name='check'
						onClick={handlerClick}
					/>
					<label htmlFor='_checkbox'>
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
