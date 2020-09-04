import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TextInput, TextArea } from 'components/Input/TextInput'
import { PrimaryButton } from 'components/Button/Button'
import ImageInput from 'components/Input/ImageInput'
import DateInput from 'components/Input/DateInput'
import { RadioInput, RadioInputContainer } from 'components/Input/RadioInput'
import Select from 'components/Input/Select'
import Loading from 'components/Loading/Loading'

const OrderFormContainer = styled.form`
	height: auto;
	width: 60%;
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
		address_street,
		address_village,
		address_kecamatan,
		address_city,
		address_postal_code,
		address_province,
		email,
		institution,
		type,
		material,
		order_status,
		detail,
		due_date,
		notes,
		currentDate,
		image,
		types,
		materials,
		buttons,
		jacketTypes,
		kurRopes,
		purings,
		screenPrintings,
		stoppers,
		zippers,
		provinces,
		regencies,
		districts,
		subDistricts,
		postalCodes,
	} = value

	return (
		<OrderFormContainer onSubmit={onSubmitOrder}>
			<TextInput
				name="name"
				value={name}
				type="text"
				placeholder="Masukkan nama lengkap kamu"
				label="Nama"
				onChange={handleChangeFormValue}
			/>
			<TextInput
				name="phone_number"
				value={phone_number}
				type="tel"
				placeholder="Masukkan nomor telepon kamu (WA)"
				label="Nomor Telepon"
				onChange={handleChangeFormValue}
			/>
			<TextInput
				name="email"
				value={email}
				type="text"
				placeholder="Masukkan email kamu"
				label="Email"
				onChange={handleChangeFormValue}
			/>
			<TextInput
				name="institution"
				value={institution}
				type="text"
				placeholder="Sebutkan nama komunitas atau instansi kamu/perorangan"
				label="Komunitas/Instansi/Perorangan"
				onChange={handleChangeFormValue}
			/>
			<TextArea
				name="address_street"
				value={address_street}
				placeholder="Masukkan alamat lengkap kamu"
				label="Alamat Lengkap"
				onChange={handleChangeFormValue}
			/>
			<Select
				name="address_province"
				value={address_province}
				placeholder="Pilih Provinsi"
				label="Provinsi"
				onChange={handleChangeFormValue}
				onLoading={getSelectLoad}
			>
				{provinces.length > 0 &&
					provinces.map(({ province }, index) => (
						<option key={index} value={province}>
							{province}
						</option>
					))}
			</Select>
			<Select
				name="address_city"
				value={address_city}
				placeholder="Pilih Kota/Kabupaten"
				label="Kota/Kabupaten"
				onChange={handleChangeFormValue}
				onLoading={getSelectLoad}
			>
				{regencies.length > 0 &&
					regencies.map(({ city }, index) => (
						<option key={index} value={city}>
							{city}
						</option>
					))}
			</Select>
			<Select
				name="address_kecamatan"
				value={address_kecamatan}
				placeholder="Pilih Kecamatan"
				label="Kecamatan"
				onChange={handleChangeFormValue}
				onLoading={getSelectLoad}
			>
				{districts.length > 0 &&
					districts.map(({ kecamatan }, index) => (
						<option key={index} value={kecamatan}>
							{kecamatan}
						</option>
					))}
			</Select>
			<Select
				name="address_village"
				value={address_village}
				placeholder="Pilih Kelurahan/Desa"
				label="Kelurahan/Desa"
				onChange={handleChangeFormValue}
				onLoading={getSelectLoad}
			>
				{subDistricts.length > 0 &&
					subDistricts.map(({ kelurahan }, index) => (
						<option key={index} value={kelurahan}>
							{kelurahan}
						</option>
					))}
			</Select>
			<Select
				name="address_postal_code"
				value={address_postal_code}
				placeholder="Pilih kode pos daerah kamu"
				label="Kode Pos"
				onChange={handleChangeFormValue}
				onLoading={getSelectLoad}
			>
				{postalCodes.length > 0 &&
					postalCodes.map(({ postal_code }, index) => (
						<option key={index} value={postal_code}>
							{postal_code}
						</option>
					))}
			</Select>
			<RadioInputContainer
				label="Status Pesanan"
				name="order_status"
				onChangeValue={handleChangeFormValue}
				selectedValue={order_status}
				isColumned={true}
			>
				<RadioInput
					label="Full Order (Pemesanan Keseluruhan)"
					id="FULL_ORDER"
					value="FULL_ORDER"
				/>
				<RadioInput
					label="Makloon (Hanya bagian tertentu saja)"
					id="MAKLOON"
					value="MAKLOON"
				/>
			</RadioInputContainer>
			<Select
				name="type"
				value={type}
				placeholder="Jenis sandang"
				label="Jenis"
				onChange={handleChangeFormValue}
				options={types}
				onLoading={getSelectLoad}
			>
				{types.length > 0 &&
					types.map(({ code, name }, index) => (
						<option key={index} value={code}>
							{name}
						</option>
					))}
			</Select>
			<Select
				name="material"
				value={material}
				placeholder="Jenis bahan"
				label="Bahan"
				onChange={handleChangeFormValue}
				options={materials}
				onLoading={getSelectLoad}
			>
				{materials.length > 0 &&
					materials.map(({ code, name }, index) => (
						<option key={index} value={code}>
							{name}
						</option>
					))}
			</Select>

			{/* <TextInput
				name="detail"
				value={detail}
				placeholder="Contoh : S - 12pcs, M-13pcs, L-20pcs"
				label="Deskripsi Detail Jumlah dan Ukuran"
				onChange={handleChangeFormValue}
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
			/> */}
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