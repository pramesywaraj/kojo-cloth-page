import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import mediaQueries from 'theme/mediaQueries'
import { IconedButton } from 'components/Button/Button'
import Icon from 'components/Icon/Icon'

import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

import {
	ORDER_NEW,
	ORDER_PROCESSED,
	ORDER_REJECTED,
	ORDER_PAID,
	ORDER_COMPLETED,
	ORDER_CONSTANTS,
} from 'constants/order'

const OrderDetailContainer = styled.section`
	text-align: center;

	width: 90%;
	/* max-width: 520px; */

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

	${mediaQueries('small-screen')`
	  width: 65%;
	`}

	${mediaQueries('desktop')`
		width: 60%;
		.detail-table {
			table-layout: auto;			
		}
	`}
`

const BoldText = styled.p`
	font-weight: 700;
`

const OrderStatusText = styled.p`
	font-weight: 600;
	${({ status }) => {
		switch (status) {
			case ORDER_NEW:
				return css`
					color: ${({ theme }) => theme.colors.primary};
				`
			case ORDER_PROCESSED:
				return css`
					color: ${({ theme }) => theme.colors.success};
				`
			case ORDER_REJECTED:
				return css`
					color: ${({ theme }) => theme.colors.error};
				`
			case ORDER_PAID:
				return css`
					color: ${({ theme }) => theme.colors.success};
				`
			case ORDER_COMPLETED:
				return css`
					color: ${({ theme }) => theme.colors.success};
				`
			default:
				break
		}
	}}
`

const OrderDetailRow = styled.div`
	display: table-row;
	width: ${({ width }) => width || '100%'};
`
const OrderDetailCell = styled.div`
	display: table-cell;
	width: ${({ width }) => width || '100%'};
`

export default function OrderStatusTable({ data }) {
	const {
		name,
		address,
		type,
		material,
		total,
		detail,
		due_date,
		status,
		remark,
		invoice_url,
	} = data

	function goToDownloadInvoice(url) {
		window.open(url)
	}

	return (
		<OrderDetailContainer>
			<div className="order-detail-title">
				<h4>Pesanan Saya</h4>
			</div>
			<div className="detail-table">
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<BoldText>Nama Pemesan</BoldText>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{name}</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<BoldText>Alamat Pemesan</BoldText>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{address}</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<BoldText>Jenis Sandang</BoldText>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{type}</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<BoldText>Bahan</BoldText>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{material}</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<BoldText>Total Pesanan</BoldText>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{total} pcs</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<BoldText>Detil Pesanan</BoldText>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						{detail.map(({ size, quantity, type }, index) => (
							<OrderDetailRow key={index}>
								<OrderDetailCell width="35%">
									<p>{`Ukuran - ${size}`}</p>
								</OrderDetailCell>
								<OrderDetailCell width="20%">
									<p>{`${quantity} pcs`}</p>
								</OrderDetailCell>
								<OrderDetailCell width="35%">
									<p>{type}</p>
								</OrderDetailCell>
							</OrderDetailRow>
						))}
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<BoldText>Tenggat Waktu</BoldText>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<p>{due_date}</p>
					</OrderDetailCell>
				</OrderDetailRow>
				<OrderDetailRow>
					<OrderDetailCell width="40%">
						<BoldText>Status Pesanan</BoldText>
					</OrderDetailCell>
					<OrderDetailCell width="60%">
						<OrderStatusText status={status}>
							{ORDER_CONSTANTS[status]}
						</OrderStatusText>
					</OrderDetailCell>
				</OrderDetailRow>
				{invoice_url && (
					<OrderDetailRow>
						<OrderDetailCell width="40%">
							<BoldText>Unduh Tagihan</BoldText>
						</OrderDetailCell>
						<OrderDetailCell width="60%">
							<IconedButton
								className="button"
								primary
								onClickHandler={() => goToDownloadInvoice(invoice_url)}
							>
								<Icon icon={faFileDownload} size="lg" />
							</IconedButton>
						</OrderDetailCell>
					</OrderDetailRow>
				)}
				{status === ORDER_REJECTED && (
					<OrderDetailRow>
						<OrderDetailCell width="40%">
							<BoldText>Alasan Ditolak</BoldText>
						</OrderDetailCell>
						<OrderDetailCell width="60%">
							<p color="red">{remark}</p>
						</OrderDetailCell>
					</OrderDetailRow>
				)}
			</div>
		</OrderDetailContainer>
	)
}

OrderStatusTable.propTypes = {
	data: PropTypes.object.isRequired,
}
