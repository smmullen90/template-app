import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Auth from './views/auth'
import PrivateRoute from './views/shared/privateRoute'

const App = () => {
  return (
    <BrowserRouter>
    	<Switch>
				<PrivateRoute exact path='/'>
	        <p>Logged in</p>
	      </PrivateRoute>

	      <Route path='/auth'>
	        <Auth />
	      </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App