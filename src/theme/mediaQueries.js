const breakpoints = {
	tablet: 481,
	small_screen: 769,
	desktop: 1025,
	large_screen: 1201,
}

const mediaQueries = (key) => {
	return (style) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`
}

export default mediaQueries
