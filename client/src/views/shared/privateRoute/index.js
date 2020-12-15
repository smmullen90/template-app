import { Route, Redirect } from 'react-router-dom'

import { useAuth } from '../../../hooks/auth'

const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: 'auth/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute