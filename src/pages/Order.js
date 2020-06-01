import React, { useState } from 'react'
import styled from 'styled-components'

import Wrapper from 'components/Layout/Wrapper'
import { PrimarySectionTitle } from 'components/Misc/SectionTitle'
import TextInput from 'components/Input/TextInput'
import { PrimaryButton } from 'components/Button/Button'

const OrderMain = styled.main`
	padding-top: 8vh;
	min-height: 80vh;
	text-align: center;
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
`

export default function Order() {
	const [order, setOrder] = useState({
		name: '',
	})

	function onSubmitOrder(e) {
		e.preventDefault()
		console.log(order)
	}

	function changeFormValue({ target }) {
		const { name, value } = target
		setOrder((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	return (
		<OrderMain>
			<Wrapper>
				<OrderSection>
					<PrimarySectionTitle>Layanan Pemesanan</PrimarySectionTitle>
					<div className="order-caption">
						<p>Silahkan isi form berikut untuk memesan</p>
					</div>
					<OrderForm onSubmit={onSubmitOrder}>
						<TextInput
							name="name"
							value={order.name}
							type="text"
							placeholder="Masukkan nama lengkap Anda"
							label="Nama"
							onChange={changeFormValue}
						/>
						<PrimaryButton type="submit">Pesan Sekarang</PrimaryButton>
					</OrderForm>
				</OrderSection>
			</Wrapper>
		</OrderMain>
	)
}
