import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Container from '../../shared/styleguide/container'
import Form from '../../shared/styleguide/form'
import Button from '../../shared/styleguide/button'
import Typography from '../../shared/styleguide/typography'

import { useAuth } from '../../../hooks/auth'   

const Signup = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirmation, setPasswordConfirmation] = useState('')

	const auth = useAuth()
	const history = useHistory()

	const onSubmit = () => {
		auth.signup().then(() => history.push('/'))
	}
	
	return (
		<Container>
			<Typography.H2>
				Signup
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
				<Form.TextInput 
					onChange={event => setPasswordConfirmation(event.target.value)}
					name='passwordConfirmation' 
					label='Confirm Password' 
					value={passwordConfirmation}
				/>
				<Button type='submit'>
					Signup
				</Button>
			</Form>
		</Container>
	)
}

export default Signup