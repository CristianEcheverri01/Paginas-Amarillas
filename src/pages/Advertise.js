import React from 'react'

import '../components/styles/Advertise.css'
import '../components/styles/Fondo.css'
import '../components/styles/input.css'
const Advertise = () => (
	<div className='fondo'>
		<div className='container'>
			<div className='advertise-container'>
				<button className='btn-add-img'>Añadir imagen</button>
				<div className='input-container'>
					<input type='text' className='input-name' id='name' />
					<label for='name'> nombre del local</label>
				</div>

				<input className='input-about' />
			</div>
			<button className='btn-advertise'>Anúnciate</button>
			<div className='planes-container'>
				<h2>Planes</h2>
				<div className='presios-container'>
					<div className='plata'>
						<p>1 Día</p>
						<p>$10</p>
					</div>
					<div className='plata'>
						<p>1 Semana</p>
						<p>$10</p>
					</div>
					<div className='plata'>
						<p>1 Mes</p>
						<p>$10</p>
					</div>
					<div className='plata'>
						<p>3 Mes</p>
						<p>$10</p>
					</div>
					<div className='plata'>
						<p>6 Mes</p>
						<p>$10</p>
					</div>
					<div className='plata'>
						<p>12 Mes</p>
						<p>$10</p>
					</div>
					<div className='total'>
						<p>Total</p>
						<p>$100</p>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Advertise
