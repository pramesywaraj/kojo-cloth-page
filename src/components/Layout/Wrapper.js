import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const Wrap = styled.div`
	padding: 5%;
	height: auto;
`

export default function Wrapper({ children }) {
	return <Wrap>{children}</Wrap>
}

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
}
