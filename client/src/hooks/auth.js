import { createContext, useContext, useState } from 'react'

import Api from '../utils/api'
import PATHS from '../constants/paths'

const AuthStore = {
  isAuthenticated: false,
  parseResponse: ({token, user}) => {
    console.log('token:', token);
    return user
  },
  login: data => Api.post(PATHS.login, data).then(AuthStore.parseResponse),
  signup: data => Api.post(PATHS.signup, data).then(AuthStore.parseResponse),
  signout: () => {
    AuthStore.isAuthenticated = false
    return Promise.resolve()
  }
}

const authContext = createContext()

export function useAuth() {
  return useContext(authContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)

  const login = data => AuthStore.login(data).then(setUser('user'))

  const signup = data => AuthStore.signup(data).then(setUser('user'))

  const signout = () => AuthStore.signout().then(() => setUser(null))

  return {
    user,
    login,
    signup,
    signout
  }
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}