import React from 'react'
import { css } from '@emotion/react'

import { TYPE_SCALE } from '../typography'

const labelStyles = css`
  display: block;
  padding-bottom: 0.25rem;
  font-size: ${TYPE_SCALE.small};
` 

const containerStyles = css`
	margin-bottom: 1rem;
`

const TextInput = ({ onChange, name, label, value }) => (
	<div css={containerStyles}>
		<label for={name} css={labelStyles}>
			{label}
		</label>
		<input 
			id={name} 
			name={name} 
			onChange={onChange} 
			type='text' 
			value={value} 
		/>
	</div>
)

export default TextInput