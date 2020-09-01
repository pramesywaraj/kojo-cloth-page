import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TextInput, TextArea } from 'components/Input/TextInput'
import { PrimaryButton } from 'components/Button/Button'
import ImageInput from 'components/Input/ImageInput'
import DateInput from 'components/Input/DateInput'
import Select from 'components/Input/Select'
import Loading from 'components/Loading/Loading'

const OrderFormContainer = styled.form`
	height: auto;
	width: 100%;
	padding: 3vh 0;

	display: flex;
	flex-direction: column;
	max-width: 1000px;

	.submit-button {
		width: 100%;
		margin: 20px auto;
		max-width: 348px;
	}
`

export default function OrderForm({ functions, status, value }) {
	const {
		onSubmitOrder,
		handleChangeFormValue,
		handleChangeImageValue,
	} = functions
	const { loading, getSelectLoad } = status
	const {
		name,
		phone_number,
		address,
		type,
		material,
		detail,
		total,
		due_date,
		notes,
		currentDate,
		image,
		types,
		materials,
	} = value

	return (
		<OrderFormContainer onSubmit={onSubmitOrder}>
			<TextInput
				name="name"
				value={name}
				type="text"
				placeholder="Masukkan nama lengkap Anda"
				label="Nama"
				onChange={handleChangeFormValue}
			/>
			<TextInput
				name="phone_number"
				value={phone_number}
				type="tel"
				placeholder="Masukkan nomor telepon Anda"
				label="Nomor Telepon"
				onChange={handleChangeFormValue}
			/>
			<TextArea
				name="address"
				value={address}
				placeholder="Masukkan alamat lengkap Anda"
				label="Alamat"
				onChange={handleChangeFormValue}
			/>
			<Select
				name="type"
				value={type}
				placeholder="Jenis sandang"
				label="Jenis"
				onChange={handleChangeFormValue}
				options={types}
				onLoading={getSelectLoad}
			/>
			<Select
				name="material"
				value={material}
				placeholder="Jenis bahan"
				label="Bahan"
				onChange={handleChangeFormValue}
				options={materials}
				onLoading={getSelectLoad}
			/>
			<TextInput
				name="detail"
				value={detail}
				placeholder="Contoh : S - 12pcs, M-13pcs, L-20pcs"
				label="Deskripsi Detail Jumlah dan Ukuran"
				onChange={handleChangeFormValue}
			/>
			<TextInput
				name="total"
				value={total}
				placeholder="Jumlah sandang yang akan dipesan"
				label="Jumlah Seluruhnya"
				onChange={handleChangeFormValue}
				type="number"
				unit="pcs"
			/>
			<DateInput
				name="due_date"
				value={due_date}
				label="Tenggat"
				onChange={handleChangeFormValue}
				type="date"
				min={currentDate}
				placeholder="Minimal tenggat waktu dua minggu dari hari ini"
			/>
			<ImageInput
				name="total"
				value={image}
				label="Gambar Desain"
				onChange={handleChangeImageValue}
			/>
			<TextArea
				name="notes"
				value={notes}
				placeholder="Catatan tambahan mengenai pesanan yang akan dibuat"
				label="Catatan Tambahan"
				onChange={handleChangeFormValue}
			/>
			<div className="submit-button">
				<PrimaryButton type="submit">
					{loading && <Loading />}
					{!loading && 'Pesan Sekarang'}
				</PrimaryButton>
			</div>
		</OrderFormContainer>
	)
}

OrderForm.propTypes = {
	functions: PropTypes.objectOf(PropTypes.func),
	status: PropTypes.objectOf(PropTypes.bool),
	value: PropTypes.object.isRequired,
}
