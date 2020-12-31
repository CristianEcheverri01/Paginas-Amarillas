import React from 'react'
import '../components/styles/Card.css'

const Card = ({ img, title, des }) => {
	return (
		<div className='carta'>
			<div className='img-dos'>
				<img alt='no se encotro la imagen' src={img} />
			</div>
			<div className='Card-titulo'>
				<h2>{title}</h2>
			</div>
			<div className='info'>
				<p>{des}</p>
			</div>
		</div>
	)
}

export default Card
