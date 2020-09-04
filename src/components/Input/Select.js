import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TextInput } from 'components/Input/TextInput'

const SelectContainer = styled.div`
	width: auto;
	height: auto;
	margin: 1.5vh 0;

	display: ${({ isShown }) => (isShown ? 'inline-block' : 'none')};
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
	children,
	onLoading,
	isShown,
	isOtherOption,
}) {
	const [selectedValue, setSelectedValue] = useState('DEFAULT')
	const [isOther, setIsOther] = useState(false)

	function selectAnOption(e) {
		const { value } = e.target
	}

	return (
		<SelectContainer isShown={isShown}>
			<Label htmlFor={name}>{label}</Label>
			<SelectInput id={name} name={name} onChange={onChange} value={value}>
				<option value="DEFAULT" disabled>
					{placeholder}
				</option>
				{children}
				{onLoading && <option>Loading...</option>}
				{isOtherOption && <option value="OTHER">Lainnya</option>}
			</SelectInput>
			{isOtherOption && isOther ? (
				<TextInput
					name={name}
					type="text"
					placeholder={`${placeholder} lainnya`}
					onChange={() => {}}
					value={value}
				/>
			) : (
				''
			)}
		</SelectContainer>
	)
}

Select.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any.isRequired,
	children: PropTypes.node,
	onLoading: PropTypes.bool,
	isShown: PropTypes.bool,
	isOtherOption: PropTypes.bool,
}

Select.defaultProps = {
	isShown: true,
	children: <option disabled>---</option>,
	isOtherOption: false,
}
