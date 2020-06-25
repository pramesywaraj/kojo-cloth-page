import React from 'react'
import styled from 'styled-components'
import mediaQueries from 'theme/mediaQueries'

import PropTypes from 'prop-types'

const Wrap = styled.div`
	padding: 5%;
	height: auto;

	${mediaQueries('small_screen')`
		padding: 5vh 5vw;
	`}
`

export default function Wrapper({ children }) {
	return <Wrap>{children}</Wrap>
}

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
}
