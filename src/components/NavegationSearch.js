import React from 'react'

//styles
import './styles/NavegationSearch.css'

const Search = () => (
	<div>
		<h1 className='title'>Paginas Amarillas Niquia</h1>
		<div className='search'>
			<div id='search'>
				<label for='input-search' className='icon'>
					<i className='fas fa-search' />
				</label>
				<input
					type='text'
					className='input_search'
					id='input-search'
					name='input-search'
				/>
			</div>
			<div id='btns'>
				<button className='btn-buscar'>busca con nostros</button>
				<button className='btn-buscar'>catalogo</button>
			</div>
		</div>
	</div>
)

export default Search
