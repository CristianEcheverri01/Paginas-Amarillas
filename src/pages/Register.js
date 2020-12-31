import React from 'react'

import RegisterForm from '../components/RegisterForm'
//img
import img from '../img/Grupo1.png'
//styles
import '../components/styles/Fondo.css'
import '../components/styles/Register/Register.css'

const Register = () => (
	<div className='fondo scroll'>
		<div className='scroll'>
			<div className='img-fondo'>
				<img src={img} width='400px' />
			</div>
			<div className='form-container'>
				<RegisterForm />

				<div className='redes-container'>
					<p>
						<i className='fab fa-google'></i>
					</p>
					<p>
						<i className='fab fa-facebook'></i>
					</p>
					<p>
						<i className='fab fa-linkedin-in'></i>
					</p>
					<p>
						<i className='fab fa-twitter'></i>
					</p>
				</div>
			</div>
		</div>
	</div>
)

export default Register
