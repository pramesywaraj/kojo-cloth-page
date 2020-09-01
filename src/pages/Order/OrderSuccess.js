import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ContainedImage from 'components/Images/ContainedImage'
import { PrimaryButton } from 'components/Button/Button'

import IconCheck from 'assets/icons/ic-check.svg'

const OrderSuccessContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 3vh 0;
	text-align: center;
	max-width: 800px;

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
		max-width: 348px;
		width: 100%;
	}
`

export default function OrderSuccess({ orderRef, onReOrderHandler }) {
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
