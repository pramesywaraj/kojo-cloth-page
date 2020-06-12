import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PropTypes from 'prop-types'

import useLoading from 'hooks/useLoading'

import Wrapper from 'components/Layout/Wrapper'
import { PrimarySectionTitle } from 'components/Misc/SectionTitle'
import { TextInput, TextArea } from 'components/Input/TextInput'
import { PrimaryButton } from 'components/Button/Button'
import ImageInput from 'components/Input/ImageInput'
import DateInput from 'components/Input/DateInput'
import Select from 'components/Input/Select'
import ContainedImage from 'components/Images/ContainedImage'

import Loading from 'components/Loading/Loading'
import { ErrorMessage } from 'components/Message/Message'

import { services, otherServices, materials } from 'constants/services'

import IconCheck from 'assets/icons/ic-check.svg'

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

const OrderSuccessContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 3vh 0;
	text-align: center;

	.success-message {
		margin: 3vh 0;
		h3 {
			color: ${({ theme }) => theme.colors.primary};
			margin-bottom: 2vh;
		}
	}

	.order-ref {
		#order-ref-code {
			margin-top: 10px;
			font-size: 2rem;
			font-weight: 700;
			color: ${({ theme }) => theme.colors.primary};
		}
	}

	.order-ref-warning {
		margin: 3vh 0;
	}

	.re-order-button {
		min-width: 55vw;
	}
`

function OrderSuccess({ orderRef, onReOrderHandler }) {
	return (
		<OrderSuccessContainer>
			<ContainedImage src={IconCheck} alt="icon-check" width="156px" />
			<div className="success-message">
				<h3>Pesanan Sukses</h3>
				<p>
					Pesanan Anda telah kami terima dan sedang kami proses. Silahkan
					konfirmasi pesanan Anda melalui kontak kami. Terima kasih telah
					memesan di Kojo Cloth{' '}
					<span role="img" aria-label="emoji-smile">
						&#128512;
					</span>
				</p>
			</div>
			<div className="order-ref">
				<p>Nomor pesanan Anda:</p>
				<p id="order-ref-code">{orderRef}</p>
			</div>
			<div className="order-ref-warning">
				<p>
					Silahkan simpan nomor pesanan Anda. Nomor pesanan dapat digunakan
					untuk melihat status pesanan Anda kemudian.
				</p>
			</div>
			<div className="re-order-button">
				<PrimaryButton type="button" onClickHandler={onReOrderHandler}>
					Pesan Kembali
				</PrimaryButton>
			</div>
		</OrderSuccessContainer>
	)
}

OrderSuccess.propTypes = {
	orderRef: PropTypes.string.isRequired,
	onReOrderHandler: PropTypes.func.isRequired,
}

export default function Order() {
	const initialOrderState = {
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

	const [image, setImage] = useState(null)
	const [currentDate, setCurrentDate] = useState(null)
	const typeOptions = [...services, ...otherServices]

	useEffect(() => {
		const date = new Date()

		const fullDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

		setCurrentDate(fullDate)
	}, [])

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

			if (!imageUploadResponse.url)
				throw new Error('Terjadi kesalahan. Silahkan ulangi kembali')

			let orderData = {
				...order,
				design_url: imageUploadResponse.url,
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
				submittedOrderRef: orderPostResponse.data.order_ref,
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

	function onReOrderHandler() {
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
							onReOrderHandler={onReOrderHandler}
							orderRef={orderInfo.submittedOrderRef}
						/>
					)}
					{!orderInfo.isOrdered && (
						<>
							<div className="order-caption">
								<p>Silahkan isi form berikut untuk memesan</p>
							</div>
							{error.isError && <ErrorMessage message={error.message} />}
							<OrderForm onSubmit={onSubmitOrder}>
								<TextInput
									name="name"
									value={order.name}
									type="text"
									placeholder="Masukkan nama lengkap Anda"
									label="Nama"
									onChange={changeFormValue}
								/>
								<TextInput
									name="phone_number"
									value={order.phone_number}
									type="tel"
									placeholder="Masukkan nomor telepon Anda"
									label="Nomor Telepon"
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
									<PrimaryButton type="submit">
										{loading && <Loading />}
										{!loading && 'Pesan Sekarang'}
									</PrimaryButton>
								</div>
							</OrderForm>
						</>
					)}
				</OrderSection>
			</Wrapper>
		</OrderMain>
	)
}
