import React, { Fragment } from 'react'
import Card from './Card'

const CardList = ({ data }) => (
	<Fragment>
		<div className='grid'>
			{data.map(data => (
				<Card key={data.id} {...data} />
			))}
		</div>
	</Fragment>
)

export default CardList
