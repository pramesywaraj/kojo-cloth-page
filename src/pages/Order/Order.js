import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import useLoading from 'hooks/useLoading'
import { dateFormatParse } from 'utils/date'
import { fetch, post } from 'utils/api'
import { initialOrderState, emptyArray } from 'utils/initialState'

import OrderSuccess from './OrderSuccess'
import Wrapper from 'components/Layout/Wrapper'
import { PrimarySectionTitle } from 'components/Misc/SectionTitle'
import { ErrorMessage } from 'components/Message/Message'
import OrderForm from 'components/Form/OrderForm'

const OrderMain = styled.main`
	padding-top: 8vh;
	min-height: 80vh;
	text-align: center;
`

const OrderSection = styled.section`
	display: flex;
	flex-direction: column;

	align-items: center;

	.order-caption {
		font-size: ${({ theme }) => theme.fontSize.regular};
		color: ${({ theme }) => theme.colors.font};
	}
`

export default function Order() {
	const [order, setOrder] = useState(initialOrderState)
	const [loading, showLoading, hideLoading] = useLoading()
	const [orderInfo, setOrderInfo] = useState({
		isOrdered: false,
		submittedOrderRef: '',
	})
	const [error, setError] = useState({
		isError: false,
		message: '',
	})
	const [types, setTypes] = useState(emptyArray)
	const [materials, setMaterials] = useState(emptyArray)
	const [buttons, setButtons] = useState(emptyArray)
	const [jacketTypes, setJacketTypes] = useState(emptyArray)
	const [kurRopes, setKurRopes] = useState(emptyArray)
	const [purings, setPurings] = useState(emptyArray)
	const [screenPrintings, setScreenPrintings] = useState(emptyArray)
	const [stoppers, setStoppers] = useState(emptyArray)
	const [zippers, setZippers] = useState(emptyArray)

	const [provinces, setProvinces] = useState(emptyArray)
	const [regencies, setRegencies] = useState(emptyArray)
	const [districts, setDistricts] = useState(emptyArray)
	const [subDistricts, setSubDistricts] = useState(emptyArray)
	const [postalCodes, setPostalCodes] = useState(emptyArray)

	const [getSelectLoad, setSelectLoad] = useState(true)

	const [image, setImage] = useState(null)
	const [currentDate, setCurrentDate] = useState(null)
	const [selectedTypeId, setSelectedTypeId] = useState(null)

	const [firstLoad, setFirstLoad] = useState(true)

	async function getTypes() {
		try {
			const { data: types } = await fetch('clothing/type')

			setTypes([...types])
		} catch (err) {
			alert(err.message)
		} finally {
			setSelectLoad(false)
		}
	}

	async function getAttributes() {
		try {
			let {
				data: {
					materials,
					buttons,
					jacket_types,
					kur_ropes,
					purings,
					screen_printings,
					stoppers,
					zippers,
				},
			} = await fetch(`clothing/type/${selectedTypeId}/attributes`)

			if (selectedTypeId === 'OTHER' || !jacket_types) jacket_types = []

			setMaterials([...materials])
			setButtons([...buttons])
			setJacketTypes([...jacket_types])
			setKurRopes([...kur_ropes])
			setPurings([...purings])
			setScreenPrintings([...screen_printings])
			setStoppers([...stoppers])
			setZippers([...zippers])
		} catch (err) {
			alert(err.message)
		} finally {
			setSelectLoad(false)
		}
	}

	// Address ///////////////////////
	async function getProvinces() {
		try {
			const { data: provinces } = await fetch(`master/provinces`)

			setProvinces([...provinces])
		} catch (err) {
			alert(err.message)
		} finally {
			setSelectLoad(false)
		}
	}

	async function getRegencies(province) {
		try {
			const { data: regencies } = await fetch(
				`master/cities?province=${province}`
			)

			setRegencies([...regencies])
		} catch (err) {
			alert(err.message)
		} finally {
			setSelectLoad(false)
		}
	}

	async function getDistricts(regency) {
		try {
			const { data: districts } = await fetch(
				`master/kecamatan?province=${order.address_province}&city=${regency}`
			)

			setDistricts([...districts])
		} catch (err) {
			alert(err.message)
		} finally {
			setSelectLoad(false)
		}
	}

	async function getSubDistricts(district) {
		try {
			const { data: subDistricts } = await fetch(
				`master/kelurahan?province=${order.address_province}&city=${order.address_city}&kecamatan=${district}`
			)

			setSubDistricts([...subDistricts])
		} catch (err) {
			alert(err.message)
		} finally {
			setSelectLoad(false)
		}
	}

	async function getPostalCodes(subDistricts) {
		try {
			const { data: postalCodes } = await fetch(
				`master/postal_codes?province=${order.address_province}&city=${order.address_city}&kecamatan=${order.address_kecamatan}&kelurahan=${subDistricts}`
			)

			setPostalCodes([...postalCodes])
		} catch (err) {
			alert(err.message)
		} finally {
			setSelectLoad(false)
		}
	}
	// Address ///////////////////////

	useEffect(() => {
		const date = new Date()

		Promise.all([getTypes(), getProvinces()])

		setCurrentDate(dateFormatParse(date))

		if (firstLoad) setFirstLoad(false)
	}, [])

	useEffect(() => {
		if (selectedTypeId) getAttributes()
	}, [selectedTypeId])

	useEffect(() => {
		if (firstLoad) return
		if (order.address_city !== 'DEFAULT')
			setOrder({
				...order,
				address_city: 'DEFAULT',
				address_kecamatan: 'DEFAULT',
				address_village: 'DEFAULT',
				address_postal_code: 'DEFAULT',
			})

		getRegencies(order.address_province)
	}, [order.address_province])

	useEffect(() => {
		if (firstLoad) return
		if (order.address_kecamatan !== 'DEFAULT')
			setOrder({
				...order,
				address_kecamatan: 'DEFAULT',
				address_village: 'DEFAULT',
				address_postal_code: 'DEFAULT',
			})

		getDistricts(order.address_city)
	}, [order.address_city])

	useEffect(() => {
		if (firstLoad) return
		if (order.address_village !== 'DEFAULT')
			setOrder({
				...order,
				address_village: 'DEFAULT',
				address_postal_code: 'DEFAULT',
			})

		getSubDistricts(order.address_kecamatan)
	}, [order.address_kecamatan])

	useEffect(() => {
		if (firstLoad) return
		if (order.address_postal_code !== 'DEFAULT')
			setOrder({
				...order,
				address_postal_code: 'DEFAULT',
			})

		getPostalCodes(order.address_village)
	}, [order.address_village])

	// ////////////////////////////////////

	async function uploadImageRequest() {
		const imageUploadOption = {
			'Content-Type': 'multipart/form-data',
		}

		let imageData = new FormData()
		imageData.append('design', image)

		try {
			const {
				data: { url },
				errors,
			} = await post(`order/design/upload`, imageData, imageUploadOption)

			if (!url) throw errors

			return url
		} catch (err) {
			setError({
				isError: true,
				message: err.message,
			})
		}
	}

	async function onSubmitOrder(e) {
		e.preventDefault()

		showLoading()

		let imageData = new FormData()
		imageData.append('design', image)

		try {
			const imageUrl = await uploadImageRequest()

			let orderData = {
				...order,
				design_url: imageUrl,
			}

			const {
				success,
				errors,
				data: { code },
			} = await post('order', orderData)

			if (!success || errors) throw errors

			setOrderInfo({
				isOrdered: true,
				submittedOrderRef: code,
			})

			window.scrollTo({ top: 0, behavior: 'smooth' })
			setOrder(initialOrderState)
		} catch (err) {
			setError({
				isError: true,
				message: err.message,
			})
		} finally {
			hideLoading()
		}
	}

	function handleChangeFormValue({ target }) {
		let { name, value } = target

		if (name === 'type') {
			switch (value) {
				case 'OTHER':
					setSelectedTypeId('OTHER')
					break
				default: {
					let type = types.find((type) => type.code === value)
					if (!type) break
					setSelectedTypeId(type.id)
				}
			}
		}

		if (value === 'OTHER') value = ''

		setOrder((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	function handleChangeImageValue({ target }) {
		const { files } = target
		setImage(files[0])
	}

	function handleReOrder() {
		setOrderInfo({
			isOrdered: false,
			submittedOrderRef: '',
		})

		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	function handleAddDetailField() {
		const newField = {
			size: 'DEFAULT',
			type: '',
			quantity: '',
		}
		setOrder({ ...order, detail: [...order.detail, newField] })
	}

	function handleRemoveDetailField(index) {
		const list = [...order.detail]
		list.splice(index, 1)
		setOrder({ ...order, detail: [...list] })
	}

	function handleChangeDetailField(e, index) {
		const { name, value } = e.target

		const list = [...order.detail]

		list[index][name] = value

		setOrder({ ...order, detail: [...list] })
	}

	return (
		<OrderMain>
			<Wrapper>
				{orderInfo.isOrdered && <OrderSection></OrderSection>}
				<OrderSection>
					<PrimarySectionTitle>Layanan Pemesanan</PrimarySectionTitle>
					{orderInfo.isOrdered && (
						<OrderSuccess
							onReOrderHandler={handleReOrder}
							orderRef={orderInfo.submittedOrderRef}
						/>
					)}
					{!orderInfo.isOrdered && (
						<>
							<div className="order-caption">
								<p>Silahkan isi form berikut untuk memesan</p>
							</div>
							{error.isError && <ErrorMessage message={error.message} />}
							<OrderForm
								functions={{
									onSubmitOrder,
									handleChangeFormValue,
									handleChangeImageValue,
									handleAddDetailField,
									handleRemoveDetailField,
									handleChangeDetailField,
								}}
								status={{ loading, getSelectLoad }}
								value={{
									...order,
									image,
									currentDate,
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
								}}
							/>
						</>
					)}
				</OrderSection>
			</Wrapper>
		</OrderMain>
	)
}
