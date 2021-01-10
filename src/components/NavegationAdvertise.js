import React from 'react'
import { Link } from 'react-router-dom'

//img
import img from '../img/documents.svg'
//styles
import './styles/NavegationAdvertise.css'

const Advertise = () => (
	<div className='anunciate b-1'>
		<Link to='advertise' className='boton'>
			<p className='post m-a'>
				<img id='icono_anunciate' src={img} alt='icono documentos' />
			</p>
			<p className='t'>Anúnciate</p>
		</Link>
	</div>
)

export default Advertise
