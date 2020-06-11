import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Wrapper from 'components/Layout/Wrapper'
import { PrimarySectionTitle } from 'components/Misc/SectionTitle'
import { TextInput, TextArea } from 'components/Input/TextInput'
import ImageInput from 'components/Input/ImageInput'
import DateInput from 'components/Input/DateInput'
import Select from 'components/Input/Select'
import { PrimaryButton } from 'components/Button/Button'

import { services, otherServices, materials } from 'constants/services'

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
		margin: 20px auto;
	}
`

export default function Order() {
	const [order, setOrder] = useState({
		name: '',
		address: '',
		phone_number: '',
		type: 'DEFAULT',
		material: 'DEFAULT',
		design_url: '',
		due_date: '',
		detail: '',
		total: '',
		notes: '',
	})

	const [image, setImage] = useState(null)
	const [currentDate, setCurrentDate] = useState(null)
	const typeOptions = [...services, ...otherServices]

	useEffect(() => {
		const date = new Date()

		const fullDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

		setCurrentDate(fullDate)
	}, [])

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

	function changeImageValue({ target }) {
		const { files } = target
		setImage(files[0])
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
							name="type"
							value={order.type}
							placeholder="Jenis sandang"
							label="Jenis"
							onChange={changeFormValue}
							options={typeOptions}
						/>
						<Select
							name="material"
							value={order.material}
							placeholder="Jenis bahan"
							label="Bahan"
							onChange={changeFormValue}
							options={materials}
						/>
						<TextInput
							name="detail"
							value={order.detail}
							placeholder="Contoh : S - 12pcs, M-13pcs, L-20pcs"
							label="Deskripsi Detail Jumlah dan Ukuran"
							onChange={changeFormValue}
						/>
						<TextInput
							name="total"
							value={order.total}
							placeholder="Jumlah sandang yang akan dipesan"
							label="Jumlah Seluruhnya"
							onChange={changeFormValue}
							type="number"
							unit="pcs"
						/>
						<DateInput
							name="due_date"
							value={order.due_date}
							label="Tenggat"
							onChange={changeFormValue}
							type="date"
							min={currentDate}
						/>
						<ImageInput
							name="total"
							value={image}
							label="Gambar Desain"
							onChange={changeImageValue}
						/>
						<TextArea
							name="notes"
							value={order.notes}
							placeholder="Catatan tambahan mengenai pesanan yang akan dibuat"
							label="Catatan Tambahan"
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
