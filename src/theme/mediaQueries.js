const breakpoints = {
	phone: 320,
	tablet: 481,
	small_screen: 769,
	desktop: 1025,
	large_screen: 1441,
}

const mediaQueries = (key) => {
	return (style) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`
}

export default mediaQueries
