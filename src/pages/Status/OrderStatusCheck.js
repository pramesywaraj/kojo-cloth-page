import React, { useState } from 'react'
import styled from 'styled-components'
import mediaQueries from 'theme/mediaQueries'

import useLoading from 'hooks/useLoading'
import { post, fetch } from 'utils/api'

import Wrapper from 'components/Layout/Wrapper'
import { PrimarySectionTitle } from 'components/Misc/SectionTitle'
import { TextInput } from 'components/Input/TextInput'
import { PrimaryButton } from 'components/Button/Button'
import ImageInput from 'components/Input/ImageInput'
import Loading from 'components/Loading/Loading'
import { ErrorMessage, SuccessMessage } from 'components/Message/Message'
import OrderStatusTable from './OrderStatusTable'

import {
	ORDER_NEW,
	ORDER_REJECTED,
	ORDER_PAID,
	ORDER_COMPLETED,
} from 'constants/order'

const OrderMain = styled.main`
	padding-top: 8vh;
	min-height: 80vh;
	text-align: center;

	display: flex;
	flex-direction: column;
`

const OrderFormSection = styled.section`
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	min-height: 90vh;

	.order-caption {
		font-size: ${({ theme }) => theme.fontSize.regular};
		color: ${({ theme }) => theme.colors.font};
	}
`

const OrderForm = styled.form`
	height: auto;
	width: 100%;
	padding: 0 5vw;
	margin: 3vh 0;

	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	max-width: 70vw;

	.submit-button {
		width: 80vw;
		margin: 20px auto;

		display: flex;
		flex-direction: row;
		justify-content: center;
		max-width: 348px;
	}

	${mediaQueries('phone')`
		.submit-button {
			width: 80vw;
		}
	`}

	${mediaQueries('small_screen')`
		padding: 0 7vw;
	`}
`

const OrderPaymentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin: 10vh 0;
`

const OrderPaymentMessageContainer = styled.div`
	margin: 20px 10px;
	max-width: 420px;
`

const UploadPaymentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	max-width: 500px;

	.image-upload-button {
		width: 200px;
		float: right;
		margin: 2vh 0;
	}
`

export default function OrderStatusCheck() {
	const [orderRef, setOrderRef] = useState('')
	const [orderDetail, setOrderDetail] = useState(null)
	const [downPayment, setDownPayment] = useState(null)
	const [payOff, setPayOff] = useState(null)
	const [successUploadingPayment, setSuccessUploadingPayment] = useState(false)
	const [error, setError] = useState({
		isError: false,
		message: '',
	})
	const [errorPayment, setErrorPayment] = useState({
		isError: false,
		message: '',
	})

	const [mainLoading, showMainLoading, hideMainLoading] = useLoading()
	const [
		downPaymentLoading,
		showDownPaymentLoading,
		hideDownPaymentLoading,
	] = useLoading()
	const [paidOffLoading, showPaidOffLoading, hidePaidOffLoading] = useLoading()

	async function onSubmitSearchStatus(e) {
		e.preventDefault()

		setError({
			isError: false,
			message: '',
		})

		if (orderDetail) setOrderDetail(null)

		showMainLoading()

		try {
			const { data, errors, status } = await fetch(`order/${orderRef}`)
			if (!status || errors) throw errors

			setOrderDetail(data)
		} catch (err) {
			setError({
				isError: true,
				message: err.message,
			})
		} finally {
			hideMainLoading()
		}
	}

	async function onSubmitUploadImage(paymentType) {
		let imageData = new FormData()
		setErrorPayment({
			isError: false,
			message: '',
		})

		setSuccessUploadingPayment(false)

		if (paymentType === 'pay_dp') {
			imageData.append('dp_proof', downPayment)
			showDownPaymentLoading()
		}
		if (paymentType === 'pay_off') {
			imageData.append('pay_off_proof', payOff)
			showPaidOffLoading()
		}

		const imageUploadOption = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		}

		try {
			const { errors, status } = await post(
				`order/${orderRef}/${paymentType}`,
				imageData,
				imageUploadOption
			)

			if (!status || errors) throw errors

			setSuccessUploadingPayment(true)
			if (paymentType === 'pay_dp') {
				setDownPayment(null)
			}
			if (paymentType === 'pay_off') {
				setPayOff(null)
			}
		} catch (err) {
			setErrorPayment({
				isError: true,
				message: err.message,
			})
		} finally {
			if (paymentType === 'pay_dp') hideDownPaymentLoading()
			if (paymentType === 'pay_off') hidePaidOffLoading()
		}
	}

	function changeFormValue({ target }) {
		const { value } = target
		setOrderRef(value)
	}

	function changeImageValue({ target }) {
		const { files, name } = target

		if (name === 'downPayment') setDownPayment(files[0])
		if (name === 'payOff') setPayOff(files[0])
	}

	return (
		<OrderMain>
			<Wrapper>
				<OrderFormSection>
					<PrimarySectionTitle>Cek Status Pemesanan</PrimarySectionTitle>
					{error.isError && <ErrorMessage message={error.message} />}
					<OrderForm onSubmit={onSubmitSearchStatus}>
						<TextInput
							name="name"
							value={orderRef}
							type="text"
							placeholder="Masukkan kode pesanan Anda"
							onChange={changeFormValue}
							centered
						/>
						<div className="submit-button">
							<PrimaryButton type="submit">
								{mainLoading && <Loading />}
								{!mainLoading && 'Periksa Pesanan Saya'}
							</PrimaryButton>
						</div>
					</OrderForm>
					{orderDetail && <OrderStatusTable data={orderDetail} />}
					{orderDetail && (
						<OrderPaymentContainer>
							<OrderPaymentMessageContainer>
								{errorPayment.isError && (
									<ErrorMessage message={errorPayment.message} />
								)}
								{successUploadingPayment && (
									<SuccessMessage message="Bukti pembayaran telah terkirim. Mohon tunggu konfirmasi selanjutnya" />
								)}
								{(orderDetail.status === ORDER_NEW &&
									orderDetail.status !== ORDER_REJECTED) ||
								!orderDetail.is_dp_paid ||
								!orderDetail.is_paid_off ? (
									<ErrorMessage
										message={
											'Silahkan lakukan pembayaran, kemudian kirimkan foto bukti pembayaran dibawah ini.'
										}
									></ErrorMessage>
								) : (
									''
								)}
							</OrderPaymentMessageContainer>

							{!orderDetail.is_dp_paid && (
								<UploadPaymentContainer>
									<ImageInput
										name="downPayment"
										value={downPayment}
										label="Upload bukti pembayaran uang muka"
										onChange={changeImageValue}
									>
										<div className="image-upload-button">
											<PrimaryButton
												type="button"
												onClickHandler={() => onSubmitUploadImage('pay_dp')}
											>
												{downPaymentLoading && <Loading />}
												{!downPaymentLoading && 'Kirim'}
											</PrimaryButton>
										</div>
									</ImageInput>
								</UploadPaymentContainer>
							)}
							{!orderDetail.is_paid_off && (
								<UploadPaymentContainer>
									<ImageInput
										name="payOff"
										value={payOff}
										label="Upload bukti pembayaran lunas"
										onChange={changeImageValue}
									>
										<div className="image-upload-button">
											<PrimaryButton
												type="button"
												onClickHandler={() => onSubmitUploadImage('pay_off')}
											>
												{paidOffLoading && <Loading />}
												{!paidOffLoading && 'Kirim'}
											</PrimaryButton>
										</div>
									</ImageInput>
								</UploadPaymentContainer>
							)}
						</OrderPaymentContainer>
					)}
				</OrderFormSection>
			</Wrapper>
		</OrderMain>
	)
}
