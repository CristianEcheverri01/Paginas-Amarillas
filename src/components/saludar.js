import React from 'react'

const link = 'https://www.youtube.com/watch?v=Tkz0rW0YlvM'

class Saludar extends React.Component {
	//constructor del componente
	constructor(props) {
		super(props)
		//estados base el componente
		this.state = {
			titulo: 'titulo',
			msg: 'mensaje',
			color: '#ddd',
		}
	}
	//se ejecuta depues de que se renderize el componente
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				titulo: 'hola que tal',
			})
		}, 5000)
	}

	//lo que seva a mostar
	render() {
		//destructuring
		const { msg, titulo, color } = this.props

		return (
			<div
				style={{
					background: color,
				}}
			>
				<h1>{msg}</h1>
				<h1>{this.state.titulo}</h1>
			</div>
		)
	}
}

export default Saludar
