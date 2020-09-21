/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Clipboard from 'clipboard'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

import ContainedImage from 'components/Images/ContainedImage'
import {
	PrimaryButton,
	OutlinedButton,
	IconedButton,
} from 'components/Button/Button'
import Icon from 'components/Icon/Icon'

import IconCheck from 'assets/icons/ic-check.svg'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const OrderSuccessContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 3vh 0;
	text-align: center;
	max-width: 600px;

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

		margin-top: 2vh;
	}
`

export default function OrderSuccess({ orderRef, onReOrderHandler }) {
	function goToWhatsappPage() {
		window.open(
			`https://api.whatsapp.com/send?phone=+6281214859797&text=Konfirmasi harga dengan nomor pesanan: ${orderRef}&source=&data=&app_absent=`
		)
	}

	function handleCopyToClipboard() {
		const clip = new Clipboard('#order-ref-code', {
			text: function () {
				return orderRef
			},
		})

		const tooltips = tippy('#copy-btn', {
			content: 'Berhasil menyalin nomor pemesanan!',
			animation: 'fade',
			duration: [0, 300],
		})

		tooltips[0].show()

		clip.on('success', function (e) {
			e.clearSelection()
		})
	}

	return (
		<OrderSuccessContainer>
			<ContainedImage src={IconCheck} alt="icon-check" width="156px" />
			<div className="success-message">
				<h3>Pesanan Sukses</h3>
				<p>Pesanan Anda telah kami terima dan sedang kami proses.</p>
				<p
					style={{
						backgroundColor: '#25D366',
						color: 'white',
						margin: '1vh 0',
						padding: '10px',
						borderRadius: '15px',
					}}
				>
					Silahkan konfirmasi pesanan Anda melalui kontak kami dengan menekan
					tombol "Konfirmasi Pesanan via WA" dibawah ini
				</p>
				<p>
					Terima kasih telah memesan di Kojo Cloth{' '}
					<span role="img" aria-label="emoji-smile">
						&#128512;
					</span>
				</p>
			</div>
			<div className="order-ref">
				<p>Nomor pesanan Anda:</p>
				{orderRef && (
					<p id="order-ref-code" data-clipboard-text={`${orderRef}`}>
						{orderRef}{' '}
						<span style={{ fontSize: '18px' }}>
							<IconedButton
								onClickHandler={handleCopyToClipboard}
								id="copy-btn"
							>
								<Icon icon={faCopy} size="xs" color="#672693" />
							</IconedButton>
						</span>
					</p>
				)}
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
			<div className="re-order-button">
				<OutlinedButton
					outlined
					type="button"
					onClickHandler={goToWhatsappPage}
				>
					Konfirmasi Pesanan via WA
				</OutlinedButton>
			</div>
		</OrderSuccessContainer>
	)
}

OrderSuccess.propTypes = {
	orderRef: PropTypes.string.isRequired,
	onReOrderHandler: PropTypes.func.isRequired,
}
