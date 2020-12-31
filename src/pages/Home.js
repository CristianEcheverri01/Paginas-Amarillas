import React, { useState, useEffect } from 'react'

import Nav from '../components/Navegacion'
import CardContainer from '../components/CardList'
import Loading from '../components/Loading'
//error 500
import FaltalError from './500'
//img
import imagen from '../img/logito.PNG'
//style
import '../components/styles/Home.css'
import { db } from '../firebase'

const Home = props => {
	//estado inicial
	const estado = [
		{
			id: 1,
			img: imagen,
			des: 'desayuno',
			titulo: 'titulo',
		},
	]

	const [err, setErr] = useState(null)
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState(estado)

	const datas = async () => {
		const values = []
		const queryShapshot = await db.collection('almacenes').get()

		queryShapshot.forEach(doc => {
			values.push(doc.data())
		})
		setData(values)
		setLoading(false)
	}

	useEffect(() => {
		//todo el codigo de las peticiones
		datas()
	}, [])

	if (err) {
		return <FaltalError />
	}
	const carga = () => {
		if (loading) {
			return <Loading />
		} else {
			return <CardContainer data={data} />
		}
	}

	return (
		<div className='degrade'>
			<Nav />
			<div>{carga()}</div>
		</div>
	)
}

export default Home
