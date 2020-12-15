// import React from 'react'
import { css } from '@emotion/react'

const containerStyles = css`
  marigin: 1rem;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 4px;
` 
const Container = ({ children }) => (
	<div css={containerStyles}>	
		{children}
	</div>
)

export default Container