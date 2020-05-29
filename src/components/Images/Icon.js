import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const IconContainer = styled.div`
	width: ${({ width }) => width || 'auto'};
	height: ${({ height }) => height || 'auto'};
	display: block;
	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: contain;
	}
`

export default function Icon({ width, height, src }) {
	return (
		<IconContainer width={width} height={height}>
			<img src={src} alt="icon" />
		</IconContainer>
	)
}

Icon.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	src: PropTypes.string.isRequired,
}
