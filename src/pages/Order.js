import React, { useState } from 'react'
import styled from 'styled-components'

import Wrapper from 'components/Layout/Wrapper'
import { PrimarySectionTitle } from 'components/Misc/SectionTitle'
import { TextInput, TextArea } from 'components/Input/TextInput'
import Select from 'components/Input/Select'
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

	.submit-button {
		width: 50vw;
		margin: 0 auto;
	}
`

export default function Order() {
	const [order, setOrder] = useState({
		name: '',
		address: '',
		selectedType: '',
		selectedMaterial: '',
		details: '',
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
						<TextArea
							name="address"
							value={order.address}
							placeholder="Masukkan alamat lengkap Anda"
							label="Alamat"
							onChange={changeFormValue}
						/>
						<Select
							name="selectedType"
							value={order.selectedType}
							placeholder="Jenis Sandang"
							label="Jenis"
							onChange={changeFormValue}
						/>
						<TextArea
							name="details"
							value={order.details}
							placeholder="Contoh : S - 12pcs, M-13pcs, L-20pcs"
							label="Detail Jumlah dan Ukuran"
							onChange={changeFormValue}
						/>
						<div className="submit-button">
							<PrimaryButton type="submit">Pesan Sekarang</PrimaryButton>
						</div>
					</OrderForm>
				</OrderSection>
			</Wrapper>
		</OrderMain>
	)
}
