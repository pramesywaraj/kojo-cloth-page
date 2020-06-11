import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PropTypes from 'prop-types'

import useLoading from 'hooks/useLoading'

import Wrapper from 'components/Layout/Wrapper'
import { PrimarySectionTitle } from 'components/Misc/SectionTitle'
import { TextInput } from 'components/Input/TextInput'
import { PrimaryButton } from 'components/Button/Button'

import Loading from 'components/Loading/Loading'
import { ErrorMessage } from 'components/Message/Message'

import {
	ORDER_NEW,
	ORDER_REJECTED,
	ORDER_PAID,
	ORDER_MATERIALIZING,
	ORDER_CUTTING,
	ORDER_SEWING,
	ORDER_SCREEN_PRINTING,
	ORDER_EMBROIDERING,
	ORDER_BUTTONING,
	ORDER_PIPING,
	ORDER_PACKING,
	ORDER_COMPLETED,
} from 'constants/order'

const OrderMain = styled.main`
	padding-top: 8vh;
	min-height: 80vh;
	text-align: center;

	display: flex;
	flex-direction: column;

	justify-content: center;
`

const OrderFormSection = styled.section`
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

		display: flex;
		flex-direction: row;
		justify-content: center;
	}
`

const OrderDetailContainer = styled.section`
	text-align: center;

	.order-detail-title {
		width: 100%;
		text-align: center;
		margin-bottom: 2vh;
	}

	.detail-table {
		display: table;
		table-layout: fixed;
		border-collapse: separate;
		border-spacing: 0 10px;

		width: 100%;
		text-align: initial;
		margin: 0 auto;
	}
`

const OrderDetailRow = styled.div`
	display: table-row;
	width: ${({ width }) => width || '100%'};
`
const OrderDetailCell = styled.div`
	display: table-cell;
	width: ${({ width }) => width || '100%'};
`

function OrderDetail({ data }) {
	const {
		order_ref,
		name,
		address,
		type,
		material,
		total,
		detail,
		due_date,
		status,
	} = data

	function statusCheck(status) {
		switch (status) {
			case ORDER_NEW:
				return 'Belum dibayar'
			case ORDER_REJECTED:
				return 'Ditolak'
			case ORDER_PAID:
				return 'Sudah dibayar'
			case ORDER_MATERIALIZING:
				return 'Pembahanan'
			case ORDER_CUTTING:
				return 'Sedang dipotong'
			case ORDER_SEWING:
				return 'Sedang dijahit'
			case ORDER_SCREEN_PRINTING:
				return 'Sedang disablon'
			case ORDER_EMBROIDERING:
				return 'Sedang dibordir'
			case ORDER_BUTTONING:
				return 'Sedang pemasangan kancing'
			case ORDER_PIPING:
				return 'Sedang diobras'
			case ORDER_PACKING:
				return 'Sedang dipacking'
			case ORDER_COMPLETED:
				return 'Selesai'
			default:
				return ''
		}
	}

	return (
		<OrderDetailContainer>
			<div className="order-detail-title">
				<h4>Pesanan Saya</h4>
			</div>
			<div className="detail-table">
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<p>Kode Pesanan</p>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p style={{ fontWeight: 700 }}>{order_ref}</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<p>Nama Pemesan</p>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{name}</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<p>Alamat Pemesan</p>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{address}</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<p>Tipe Sandang</p>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{type}</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<p>Bahan</p>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{material}</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<p>Total Pesanan</p>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{total} pcs</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<p>Detil Pesanan</p>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{detail}</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<p>Tenggat Waktu</p>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{due_date}</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<p>Status Pesanan</p>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{statusCheck(status)}</p>
					</OrderDetailCell>
				</OrderDetailRow>
			</div>
		</OrderDetailContainer>
	)
}

OrderDetail.propTypes = {
	data: PropTypes.object.isRequired,
}

export default function OrderStatusCheck() {
	const [orderRef, setOrderRef] = useState('')
	const [orderDetail, setOrderDetail] = useState(null)
	const [error, setError] = useState({
		isError: false,
		message: '',
	})

	const [loading, showLoading, hideLoading] = useLoading()

	async function onSubmitSearchStatus(e) {
		e.preventDefault()

		if (orderDetail) setOrderDetail(null)

		showLoading()

		try {
			const { data } = await axios.get(
				`${process.env.REACT_APP_API_URL}/order/${orderRef}`
			)

			if (!data.success || data.errors) throw data.errors

			setOrderDetail(data.data)
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
		const { value } = target
		setOrderRef(value)
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
								{loading && <Loading />}
								{!loading && 'Periksa Pesanan Saya'}
							</PrimaryButton>
						</div>
					</OrderForm>
					{orderDetail && <OrderDetail data={orderDetail} />}
				</OrderFormSection>
			</Wrapper>
		</OrderMain>
	)
}
