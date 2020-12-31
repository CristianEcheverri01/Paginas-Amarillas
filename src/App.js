import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//pages
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Register from './pages/Register'
import Advertise from './pages/Advertise'

import './firebase'

const App = props => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/register' component={Register} />
			<Route exact path='/advertise' component={Advertise} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

export default App
