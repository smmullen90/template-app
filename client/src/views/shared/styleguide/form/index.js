import React from 'react'

import TextInput from './textInput'

const Form = ({ children, onSubmit }) => {
	const cleanedOnSubmit = event => {
		event.preventDefault()
		onSubmit()
	}

	return (
		<form onSubmit={cleanedOnSubmit}>
			{children}
		</form>
	)
}

Form.TextInput = TextInput

export default Form