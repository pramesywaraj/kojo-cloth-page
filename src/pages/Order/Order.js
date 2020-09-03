import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import useLoading from 'hooks/useLoading'
import { dateFormatParse } from 'utils/date'
import { fetch, post } from 'utils/api'
import {
	initialOrderState,
	initialProvinces,
	initialRegencies,
	initialDistricts,
	initialSubDistricts,
	initialMaterials,
	initialTypes,
} from 'utils/initialState'

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
	const [types, setTypes] = useState(initialTypes)
	const [materials, setMaterials] = useState(initialMaterials)

	const [provinces, setProvinces] = useState(initialProvinces)
	const [regencies, setRegencies] = useState(initialRegencies)
	const [districts, setDistricts] = useState(initialDistricts)
	const [subDistricts, setSubDistricts] = useState(initialSubDistricts)

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

	async function getMaterials() {
		try {
			const { data: materials } = await fetch(
				`clothing/type/${selectedTypeId}/material`
			)

			setMaterials([...materials])
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
	// Address ///////////////////////

	useEffect(() => {
		const date = new Date()

		Promise.all([getTypes(), getProvinces()])

		setCurrentDate(dateFormatParse(date))

		if (firstLoad) setFirstLoad(false)
	}, [])

	useEffect(() => {
		if (selectedTypeId) getMaterials()
	}, [selectedTypeId])

	useEffect(() => {
		if (firstLoad) return

		getRegencies(order.address_province)
	}, [order.address_province])

	useEffect(() => {
		if (firstLoad) return

		getDistricts(order.address_city)
	}, [order.address_city])

	useEffect(() => {
		if (firstLoad) return

		getSubDistricts(order.address_kecamatan)
	}, [order.address_kecamatan])

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

		console.log(name, value)

		if (name === 'type') {
			let temp = types.find((type) => type.code === value)
			setSelectedTypeId(temp.id)
		}

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
								}}
								status={{ loading, getSelectLoad }}
								value={{
									...order,
									image,
									currentDate,
									types,
									materials,
									provinces,
									regencies,
									districts,
									subDistricts,
								}}
							/>
						</>
					)}
				</OrderSection>
			</Wrapper>
		</OrderMain>
	)
}
