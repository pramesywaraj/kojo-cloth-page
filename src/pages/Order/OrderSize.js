import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { TextInput } from 'components/Input/TextInput'
import { RadioInput, RadioInputContainer } from 'components/Input/RadioInput'
import Select from 'components/Input/Select'
import { IconedButton } from 'components/Button/Button'
import Icon from 'components/Icon/Icon'

import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

import { CLOTHES_SIZE } from 'constants/order'

const OrderSizeInputContainer = styled.div`
	width: auto;
	height: auto;
	margin: 1.5vh 0;

	display: ${({ isShown }) => (isShown ? 'inline-block' : 'none')};
	position: relative;

	text-align: initial;
`

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: auto;
`

const FieldContainer = styled(Container)`
	justify-content: initial;
`

const FieldChildContainer = styled.div`
	${({ width }) =>
		width
			? css`
					width: ${({ width }) => `${width}px`};
			  `
			: ''}
	margin: 0 10px;
	text-align: center;
`

const ButtonContainer = styled(Container)`
	padding: 1%;
	flex: 1;
`

const Label = styled.label`
	display: block;
	margin-bottom: 1vh;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: 600;
`

const WarnText = styled.span`
	font-weight: 400;
	font-size: 0.8rem;
	margin: 1vh 0;
`

export default function OrderSize({ inputList, onChange, onAdd, onRemove }) {
	return (
		<OrderSizeInputContainer isShown={true}>
			<Label>Jumlah & Ukuran</Label>
			{inputList.map((element, index) => (
				<Container key={index}>
					<FieldContainer>
						<FieldChildContainer width={100}>
							<Select
								name="size"
								placeholder="Ukuran"
								value={element.size}
								onChange={(e) => onChange(e, index)}
							>
								{CLOTHES_SIZE.length > 0 &&
									CLOTHES_SIZE.map((size, index) => (
										<option key={index} value={size}>
											{size}
										</option>
									))}
							</Select>
						</FieldChildContainer>
						<FieldChildContainer width={110}>
							<TextInput
								name="quantity"
								value={element.quantity}
								type="number"
								placeholder="Jumlah"
								unit="pcs"
								onChange={(e) => onChange(e, index)}
							/>
						</FieldChildContainer>
						<FieldChildContainer>
							<RadioInputContainer
								name="type"
								selectedValue={element.type}
								onChangeValue={(e) => onChange(e, index)}
							>
								<RadioInput
									label="Lengan Panjang"
									id="Lengan1"
									value="Lengan Panjang"
								/>
								<RadioInput
									label="Lengan Pendek"
									id="Lengan2"
									value="Lengan Pendek"
								/>
							</RadioInputContainer>
						</FieldChildContainer>
					</FieldContainer>
					<ButtonContainer>
						<IconedButton primary onClickHandler={onAdd}>
							<Icon icon={faPlus} size="lg" />
						</IconedButton>
						{inputList.length > 1 && (
							<IconedButton onClickHandler={onRemove}>
								<Icon icon={faTrash} size="lg" color="#eb2813" />
							</IconedButton>
						)}
					</ButtonContainer>
				</Container>
			))}
			<WarnText>
				Abaikan pemilihan lengan panjang/pendek jika dirasa tidak perlu
			</WarnText>
		</OrderSizeInputContainer>
	)
}

OrderSize.propTypes = {
	inputList: PropTypes.array,
	onChange: PropTypes.func,
	onAdd: PropTypes.func,
	onRemove: PropTypes.func,
}
