import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon({ icon, size, color, ...rest }) {
	return <FontAwesomeIcon icon={icon} size={size} color={color} {...rest} />
}

Icon.propTypes = {
	icon: PropTypes.any,
	size: PropTypes.string,
	color: PropTypes.string,
}

Icon.defaultProps = {
	size: '1x',
	color: 'white',
}
