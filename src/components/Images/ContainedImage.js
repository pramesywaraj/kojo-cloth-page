import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImageContainer = styled.div`
  width: ${({ width }) => width},
  height: ${({ height }) => height}
`

const Image = styled.img.attrs(({ src, alt }) => ({
	src: src,
	alt: alt,
}))`
	width: 100%;
	height: 100%;
	display: block;
	object-fit: contain;
`

export default function ContainedImage({ src, alt, width, height }) {
	return (
		<ImageContainer width={width} height={height}>
			<Image src={src} alt={alt} />
		</ImageContainer>
	)
}

ContainedImage.PropTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
}
