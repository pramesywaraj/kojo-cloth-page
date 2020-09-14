import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import mediaQueries from 'theme/mediaQueries'

import { TextInput, TextArea } from 'components/Input/TextInput'
import { PrimaryButton } from 'components/Button/Button'
import ImageInput from 'components/Input/ImageInput'
import DateInput from 'components/Input/DateInput'
import { RadioInput, RadioInputContainer } from 'components/Input/RadioInput'
import Select from 'components/Input/Select'
import Loading from 'components/Loading/Loading'

import { ORDER_FORM, initialOrderDetailState } from 'constants/order'
import { validateOrder } from 'utils/validator'
import useFormValidation from 'hooks/useFormValidation'

import OrderSize from 'pages/Order/OrderSize'

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

	${mediaQueries('tablet')`
		width: 90%;
	`}

	${mediaQueries('small_screen')`
		width: 80%;
	`}

	${mediaQueries('desktop')`
		width: 70%;
	`}

	${mediaQueries('large_screen')`
		width: 50%;
	`}
`

export default function OrderForm({ functions, status, value }) {
	const {
		onSubmitOrder,
		handleChangeFormValue,
		handleChangeImageValue,
		handleAddDetailField,
		handleRemoveDetailField,
		handleChangeDetailField,
		handleChangeOrderDetailValue,
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
		order_detail,
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

	const [shownStatus, setShownStatus] = useState(initialOrderDetailState)
	const [firstLoad, setFirstLoad] = useState(true)
	const [errors, handleValidate] = useFormValidation(onSubmitOrder)

	useEffect(() => {
		if (firstLoad) {
			setFirstLoad(false)
			return
		}

		setShownStatus({ ...ORDER_FORM[type] })
	}, [type])

	const {
		embroidery_point_status,
		embroidery_notes_status,
		screen_printing_status,
		screen_printing_notes_status,
		button_status,
		use_perepet_status,
		kur_rope_status,
		stopper_status,
		zipper_status,
		puring_status,
		jacket_type_status,
	} = shownStatus

	async function handleFormValidation(e) {
		e.preventDefault()

		const result = await validateOrder(value, order_status, shownStatus)

		handleValidate(result)
	}

	return (
		<OrderFormContainer onSubmit={handleFormValidation} noValidate>
			<TextInput
				name="name"
				value={name}
				type="text"
				placeholder="Masukkan nama lengkap kamu"
				label="Nama"
				onChange={handleChangeFormValue}
				error={errors['name']}
			/>
			<TextInput
				name="phone_number"
				value={phone_number}
				type="tel"
				placeholder="Masukkan nomor telepon kamu (WA)"
				label="Nomor Telepon"
				onChange={handleChangeFormValue}
				error={errors['phone_number']}
			/>
			<TextInput
				name="email"
				value={email}
				type="text"
				placeholder="Masukkan email kamu"
				label="Email"
				onChange={handleChangeFormValue}
				error={errors['email']}
			/>
			<TextInput
				name="institution"
				value={institution}
				type="text"
				placeholder="Sebutkan nama komunitas atau instansi kamu/perorangan"
				label="Komunitas/Instansi/Perorangan"
				onChange={handleChangeFormValue}
				error={errors['institution']}
			/>
			<TextArea
				name="address_street"
				value={address_street}
				placeholder="Masukkan alamat lengkap kamu"
				label="Alamat Lengkap"
				onChange={handleChangeFormValue}
				error={errors['address_street']}
			/>
			<Select
				name="address_province"
				value={address_province}
				placeholder="Pilih Provinsi"
				label="Provinsi"
				onChange={handleChangeFormValue}
				onLoading={getSelectLoad}
				error={errors['address_province']}
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
				error={errors['address_city']}
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
				error={errors['address_kecamatan']}
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
				error={errors['address_village']}
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
				error={errors['address_postal_code']}
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
				error={errors['order_status']}
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
				onLoading={getSelectLoad}
				isOtherOption
				error={errors['type']}
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
				onLoading={getSelectLoad}
				isOtherOption
				error={errors['material']}
			>
				{materials.length > 0 &&
					materials.map(({ code, name }, index) => (
						<option key={index} value={code}>
							{name}
						</option>
					))}
			</Select>

			{/* Order Detail Form Section */}
			<Select
				name="jacket_type"
				value={order_detail.jacket_type}
				placeholder="Jenis jaket pesanan kamu"
				label="Jenis Jaket"
				onChange={handleChangeOrderDetailValue}
				onLoading={getSelectLoad}
				isOtherOption
				isShown={jacket_type_status}
				error={errors['jacket_type']}
			>
				{jacketTypes.length > 0 &&
					jacketTypes.map(({ code, name }, index) => (
						<option key={index} value={code}>
							{name}
						</option>
					))}
			</Select>

			<Select
				name="screen_printing"
				value={order_detail.screen_printing}
				placeholder="Jenis sablon pesanan kamu"
				label="Jenis Sablon"
				onChange={handleChangeOrderDetailValue}
				onLoading={getSelectLoad}
				isOtherOption
				isShown={screen_printing_status}
				error={errors['screen_printing']}
			>
				{screenPrintings.length > 0 &&
					screenPrintings.map(({ code, name }, index) => (
						<option key={index} value={code}>
							{name}
						</option>
					))}
			</Select>

			<TextArea
				name="screen_printing_notes"
				value={order_detail.screen_printing_notes}
				placeholder="Catatan tambahan mengenai sablon yang akan dibuat"
				label="Detil Sablon"
				onChange={handleChangeOrderDetailValue}
				isShown={screen_printing_notes_status}
				error={errors['screen_printing_notes']}
			/>

			<TextInput
				name="embroidery_point"
				value={order_detail.embroidery_point}
				type="number"
				placeholder="Jumlah titik bordir"
				label="Bordir"
				onChange={handleChangeOrderDetailValue}
				unit="Titik"
				isShown={embroidery_point_status}
				error={errors['embroidery_point']}
			/>

			<TextArea
				name="embroidery_notes"
				value={order_detail.embroidery_notes}
				placeholder="Catatan tambahan mengenai titik bordir yang akan dibuat"
				label="Detil Bordir"
				onChange={handleChangeOrderDetailValue}
				isShown={embroidery_notes_status}
				error={errors['embroidery_notes']}
			/>

			<Select
				name="button"
				value={order_detail.button}
				placeholder="Jenis kancing pada pesanan kamu"
				label="Jenis Kancing"
				onChange={handleChangeOrderDetailValue}
				onLoading={getSelectLoad}
				isOtherOption
				isShown={button_status}
				error={errors['button']}
			>
				{buttons.length > 0 &&
					buttons.map(({ code, name }, index) => (
						<option key={index} value={code}>
							{name}
						</option>
					))}
			</Select>

			<RadioInputContainer
				label="Velcro/Perepet"
				name="use_perepet"
				onChangeValue={handleChangeOrderDetailValue}
				selectedValue={order_detail.use_perepet}
				isShown={use_perepet_status}
				error={errors['use_perepet']}
			>
				<RadioInput label="Ya" id="true" value={true} />
				<RadioInput label="Tidak" id="false" value={false} />
			</RadioInputContainer>

			<Select
				name="kur_rope"
				value={order_detail.kur_rope}
				placeholder="Jenis tali kur pada pesanan kamu"
				label="Jenis Tali Kur"
				onChange={handleChangeOrderDetailValue}
				onLoading={getSelectLoad}
				isOtherOption
				isShown={kur_rope_status}
				error={errors['kur_rope']}
			>
				{kurRopes.length > 0 &&
					kurRopes.map(({ code, name }, index) => (
						<option key={index} value={code}>
							{name}
						</option>
					))}
			</Select>

			<Select
				name="stopper"
				value={order_detail.stopper}
				placeholder="Jenis stopper (yang ada di ujung jaket) pada pesanan kamu"
				label="Jenis Stopper"
				onChange={handleChangeOrderDetailValue}
				onLoading={getSelectLoad}
				isOtherOption
				isShown={stopper_status}
				error={errors['stopper']}
			>
				{stoppers.length > 0 &&
					stoppers.map(({ code, name }, index) => (
						<option key={index} value={code}>
							{name}
						</option>
					))}
			</Select>

			<Select
				name="zipper"
				value={order_detail.zipper}
				placeholder="Jenis resleting pada pesanan kamu"
				label="Jenis Resleting"
				onChange={handleChangeOrderDetailValue}
				onLoading={getSelectLoad}
				isOtherOption
				isShown={zipper_status}
				error={errors['zipper']}
			>
				{zippers.length > 0 &&
					zippers.map(({ code, name }, index) => (
						<option key={index} value={code}>
							{name}
						</option>
					))}
			</Select>

			<Select
				name="puring"
				value={order_detail.puring}
				placeholder="Jenis puring pada pesanan kamu"
				label="Jenis Puring"
				onChange={handleChangeOrderDetailValue}
				onLoading={getSelectLoad}
				isOtherOption
				isShown={puring_status}
				error={errors['puring']}
			>
				{purings.length > 0 &&
					purings.map(({ code, name }, index) => (
						<option key={index} value={code}>
							{name}
						</option>
					))}
			</Select>

			{/* Order Detail Form Section */}

			<OrderSize
				inputList={detail}
				onAdd={handleAddDetailField}
				onRemove={handleRemoveDetailField}
				onChange={handleChangeDetailField}
			/>

			<ImageInput
				name="image"
				value={image}
				label="Gambar Desain"
				onChange={handleChangeImageValue}
			/>
			<TextArea
				name="notes"
				value={notes}
				placeholder="Catatan tambahan mengenai gambar desain pesanan yang akan dibuat"
				label="Catatan Gambar Desain"
				onChange={handleChangeFormValue}
				error={errors['notes']}
			/>
			<DateInput
				name="due_date"
				value={due_date}
				label="Tenggat"
				onChange={handleChangeFormValue}
				type="date"
				min={currentDate}
				placeholder="Minimal tenggat waktu dua minggu dari hari ini"
				error={errors['due_date']}
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
