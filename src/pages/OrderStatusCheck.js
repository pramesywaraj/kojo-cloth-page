import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Wrapper from 'components/Layout/Wrapper'
import { PrimarySectionTitle } from 'components/Misc/SectionTitle'
import { TextInput } from 'components/Input/TextInput'
import { PrimaryButton } from 'components/Button/Button'

import Loading from 'components/Loading/Loading'

const OrderMain = styled.main`
	padding-top: 8vh;
	min-height: 80vh;
	text-align: center;

	display: flex;
	flex-direction: column;

	justify-content: center;
`

const OrderSection = styled.section`
	display: flex;
	flex-direction: column;

	.order-caption {
		font-size: ${({ theme }) => theme.fontSize.regular};
		color: ${({ theme }) => theme.colors.font};
	}
`

const OrderForm = styled.form`
	height: auto;
	width: 100%;
	padding: 3vh 0;

	display: flex;
	flex-direction: column;

	.submit-button {
		width: 50vw;
		margin: 20px auto;
	}
`

export default function OrderStatusCheck() {
	const [orderRef, setOrderRef] = useState('')

	function onSubmitSearchStatus(e) {
		e.preventDefault()

		try {
			const { data } = axios.get(
				`${process.env.REACT_APP_API_URL}/order/${orderRef}`
			)
			console.log(data)
		} catch (e) {
			console.log('ada error')
		} finally {
		}
	}

	function changeFormValue({ target }) {
		const { value } = target
		setOrderRef(value)
	}

	return (
		<OrderMain>
			<Wrapper>
				<OrderSection>
					<PrimarySectionTitle>Cek Status Pemesanan</PrimarySectionTitle>
					<OrderForm onSubmit={onSubmitSearchStatus}>
						<TextInput
							name="name"
							value={orderRef}
							type="text"
							placeholder="Masukkan kode pesanan Anda"
							onChange={changeFormValue}
							centered
						/>
						<div className="submit-button">
							<PrimaryButton type="submit">Periksa Pesanan Saya</PrimaryButton>
						</div>
					</OrderForm>
				</OrderSection>
			</Wrapper>
		</OrderMain>
	)
}
