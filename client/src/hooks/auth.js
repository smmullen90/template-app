import { createContext, useContext, useState } from 'react'

const fakeAuth = {
  isAuthenticated: false,
  async login() {
    fakeAuth.isAuthenticated = true
    return Promise.resolve()
  },
  async signup() {
    fakeAuth.isAuthenticated = true
    return Promise.resolve()
  },
  async signout() {
    fakeAuth.isAuthenticated = false
    return Promise.resolve()
  }
}

const authContext = createContext()

export function useAuth() {
  return useContext(authContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)


  const login = async () => {
    return fakeAuth.login().then(() => setUser('user'))
  }

  const signup = async () => {
    return fakeAuth.signup().then(() => setUser('user'))
  }

  const signout = async () => {
    return fakeAuth.signout().then(() => setUser(null))
  }

  return {
    user,
    login,
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