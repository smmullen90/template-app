import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Container from '../../shared/styleguide/container'
import Form from '../../shared/styleguide/form'
import Button from '../../shared/styleguide/button'
import Typography from '../../shared/styleguide/typography'

import { useAuth } from '../../../hooks/auth'   

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)

	const auth = useAuth()
	const history = useHistory()

	const onSignupSuccess = () => history.push('/')
	const onSignupFailure = error => setError(error.message) 

	const onSubmit = () => {
		setError(null)

		auth
			.signup({ email, password })
			.then(onSignupSuccess, onSignupFailure)
	}
	
	return (
		<Container>
			<Typography.H2>
				Login
			</Typography.H2>

			<Form onSubmit={onSubmit}>
				<Form.TextInput 
					onChange={event => setEmail(event.target.value)}
					name='email' 
					label='Email' 
					value={email}
				/>
				<Form.TextInput 
					onChange={event => setPassword(event.target.value)}
					name='password' 
					label='Password' 
					value={password}
				/>
				{error && <p>{error}</p>}
				<Button type='submit'>
					Log in
				</Button>
			</Form>
		</Container>
	)
}

export default Login