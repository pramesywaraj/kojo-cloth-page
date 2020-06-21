import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const SelectContainer = styled.div`
	width: auto;
	height: auto;
	margin: 1.5vh 0;

	display: block;
	position: relative;
`

const Label = styled.label`
	float: left;
	margin-bottom: 1vh;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: 600;
`

const SelectInput = styled.select`
	width: 100%;
	min-height: 20px;
	padding: 10px;
	border: 1.5px solid ${({ theme }) => theme.colors.primary};
	border-radius: 8px;
	outline: none;

	option {
		width: 100%;
		color: ${({ theme }) => theme.colors.font};
		background: white;
		display: flex;
		white-space: pre;
		min-height: 20px;
		padding: 0px 2px 1px;
	}
`

export default function Select({
	name,
	placeholder,
	label,
	onChange,
	value,
	options,
	onLoading,
}) {
	return (
		<SelectContainer>
			<Label htmlFor={name}>{label}</Label>
			<SelectInput id={name} name={name} onChange={onChange} value={value}>
				<option value="DEFAULT" disabled>
					{placeholder}
				</option>
				{!onLoading && options !== null
					? options.map((option, index) => (
							<option key={index} value={option.code}>
								{option.name}
							</option>
					  ))
					: ''}
			</SelectInput>
		</SelectContainer>
	)
}

Select.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
	options: PropTypes.array,
	onLoading: PropTypes.bool,
}
