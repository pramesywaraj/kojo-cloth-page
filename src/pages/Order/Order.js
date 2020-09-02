import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import useLoading from 'hooks/useLoading'

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
	const initialOrderState = {
		name: '',
		address_street: '',
		address_village: '',
		address_kecamatan: '',
		address_city: '',
		address_postal_code: '',
		email: '',
		institution: '',
		phone_number: '',
		type: 'DEFAULT',
		material: 'DEFAULT',
		design_url: '',
		due_date: '',
		detail: [
			{
				size: 'DEFAULT',
				type: 'DEFAULT',
				quantity: '',
			},
		],
		total: '',
		notes: '',
	}
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
	const [types, setTypes] = useState(null)
	const [materials, setMaterials] = useState(null)
	const [getSelectLoad, setSelectLoad] = useState(true)

	const [image, setImage] = useState(null)
	const [currentDate, setCurrentDate] = useState(null)
	const [selectedTypeId, setSelectedTypeId] = useState(null)

	useEffect(() => {
		const date = new Date()

		const fullDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
		const getTypes = async () => {
			try {
				const { data } = await axios.get(
					`${process.env.REACT_APP_API_URL}/clothing/type`
				)

				setTypes(data.data)
			} catch (err) {
				alert('Terjadi kesalahan. Silahkan refresh laman ini.')
			} finally {
				setSelectLoad(false)
			}
		}

		setCurrentDate(fullDate)
		getTypes()
	}, [])

	useEffect(() => {
		const getMaterials = async () => {
			setMaterials(null)
			try {
				const { data } = await axios.get(
					`${process.env.REACT_APP_API_URL}/clothing/type/${selectedTypeId}/material`
				)

				setMaterials(data.data)
			} catch (err) {
				alert('Terjadi kesalahan. Silahkan refresh laman ini.')
			} finally {
				setSelectLoad(false)
			}
		}

		if (selectedTypeId) getMaterials()
	}, [selectedTypeId])

	async function onSubmitOrder(e) {
		e.preventDefault()

		showLoading()

		const imageUploadOption = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		}
		const orderPostOption = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		let imageData = new FormData()
		imageData.append('design', image)

		try {
			const {
				data: imageUploadResponse,
			} = await axios.post(
				`${process.env.REACT_APP_API_URL}/order/design/upload`,
				imageData,
				{ headers: imageUploadOption }
			)

			if (!imageUploadResponse.data.url || !imageUploadResponse.success)
				throw imageUploadResponse.errors

			let orderData = {
				...order,
				design_url: imageUploadResponse.data.url,
			}

			const {
				data: orderPostResponse,
			} = await axios.post(
				`${process.env.REACT_APP_API_URL}/order`,
				orderData,
				{ headers: orderPostOption }
			)

			if (!orderPostResponse.success || orderPostResponse.errors)
				throw orderPostResponse.errors

			setOrderInfo({
				isOrdered: true,
				submittedOrderRef: orderPostResponse.data.code,
			})

			window.scrollTo({ top: 0, behavior: 'smooth' })
			setOrder(initialOrderState)
		} catch (err) {
			setError({
				isError: true,
				message: err,
			})
		} finally {
			hideLoading()
		}
	}

	function handleChangeFormValue({ target }) {
		let { name, value } = target

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
								value={{ ...order, image, currentDate, types, materials }}
							/>
						</>
					)}
				</OrderSection>
			</Wrapper>
		</OrderMain>
	)
}
