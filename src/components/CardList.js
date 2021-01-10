import React, { Fragment } from 'react'
import Card from './Card'

const CardList = ({ data }) => {
	let key = 0

	return (
		<Fragment>
			<div className='grid'>
				{data.map(data => {
					key = key + 1
					return <Card key={key} {...data} />
				})}
			</div>
		</Fragment>
	)
}

export default CardList
