import React from 'react'

//img
import img from '../img/error(404).png'
import logoMini from '../img/logito.svg'
//style
import '../components/styles/NotFound.css'
const NotFound = () => (
	<div>
		<div className='contenedor'>
			<img src={logoMini} className='logo1' />
			<img src={img} className='img1' />
			<img src={logoMini} className='logo2' />
		</div>
		<h1 className='text'>Pagina no encontrada verifica la dirección url</h1>
		<h3 className='text'>¿a donde puedo ir?</h3>
		<ol className='listica'>
			<li>
				<a href='/'>principal</a>
			</li>
			<li>
				<a href='register'>registro</a>
			</li>
		</ol>
	</div>
)

export default NotFound
