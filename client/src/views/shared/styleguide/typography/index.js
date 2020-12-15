import { css } from '@emotion/react'

const BASE = {
	1: '0.512rem',
	2: '0.64rem',
	3: '0.8rem',
	4: '1rem',
	5: '1.25rem',
	6: '1.563rem',
	7: '1.953rem',
	8: '2.441rem',
	9: '3.052rem',
}

export const TYPE_SCALE = {
	h1: BASE[7],
	h2: BASE[6],
	h3: BASE[5],
	p: BASE[4],
	small: BASE[3],
	smaller: BASE[2],
	smallest: BASE[1],
}

const P = ({ children }) => (
	<p css={css`font-size: ${TYPE_SCALE.p};`}>
		{children}
	</p>
)

const H1 = ({ children }) => (
	<h1 css={css`font-size: ${TYPE_SCALE.h1};`}>
		{children}
	</h1>
)

const H2 = ({ children }) => (
	<h2 css={css`font-size: ${TYPE_SCALE.h2};`}>
		{children}
	</h2>
)

const H3 = ({ children }) => (
	<h3 css={css`font-size: ${TYPE_SCALE.h3};`}>
		{children}
	</h3>
)

const Typography = {
	P: P,
	H1: H1,
	H2: H2,
	H3: H3,
}

export default Typography