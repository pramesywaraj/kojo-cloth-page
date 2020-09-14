import { FULL_ORDER } from 'constants/order'

export function validateOrder(values, orderStatus, orderDetail) {
	const errors = {}
	const isFullOrder = orderStatus === FULL_ORDER
	// const todayDate = new Date().toISOString().substr(0, 10);

	if ('name' in values) {
		if (!values.name) {
			errors.name = 'Nama belum terisi'
		}
	}

	if ('phone_number' in values) {
		if (!values.phone_number) {
			errors.phone_number = 'Nomor telepon belum terisi'
		} else if (!/^((?:\+62|62)|0)[2-9]{1}[0-9]+$/.test(values.phone_number)) {
			errors.phone_number =
				'Nomor telepon kamu tidak sesuai dengan format pada umumnya.'
		}
	}

	if ('email' in values) {
		if (!/\S+@\S+\.\S+/.test(values.email)) {
			errors.email = 'Alamat email kamu tidak valid'
		}
	}

	if ('institution' in values) {
		if (!/\S+@\S+\.\S+/.test(values.email)) {
			errors.email = 'Alamat email kamu tidak valid'
		}
	}

	if ('address_street' in values) {
		if (!values.address_street) {
			errors.address_street = 'Alamat lengkap kamu belum terisi.'
		}
	}

	if ('address_province' in values) {
		if (!values.address_province) {
			errors.address_province = 'Provinsi belum kamu isi.'
		}
	}

	if ('address_city' in values) {
		if (!values.address_city) {
			errors.address_city = 'Kota belum kamu isi.'
		}
	}

	if ('address_kecamatan' in values) {
		if (!values.address_kecamatan) {
			errors.address_kecamatan = 'Kecamatan belum kamu isi.'
		}
	}

	if ('address_village' in values) {
		if (!values.address_village) {
			errors.address_village = 'Kelurahan/Desa kamu belum terisi.'
		}
	}

	if ('address_postal_code' in values) {
		if (!values.address_postal_code) {
			errors.address_postal_code = 'Nomor Pos kamu belum terisi.'
		}
	}

	if ('order_status' in values) {
		if (!values.order_status) {
			errors.order_status = 'Status pada pesanan kamu belum terisi.'
		}
	}

	if ('type' in values) {
		if (values.type === 'DEFAULT') {
			errors.type = 'Tipe sandang pada pesanan kamu belum terisi.'
		}
	}

	if ('material' in values) {
		if (values.material === 'DEFAULT') {
			errors.material = 'Tipe material sandang pada pesanan kamu belum terisi.'
		}
	}

	if ('due_date' in values) {
		if (!values.due_date) {
			errors.due_date = 'Tentukan tenggat pesanan mu selesai.'
		}
	}

	/////////////////////////////////////////////

	if (isFullOrder) {
		if (orderDetail.embroidery_point_status) {
			if (!values.embroidery_point_status) {
				errors.embroidery_point_status =
					'Tipe bordir pada pesanan kamu belum terisi.'
			}
		}

		if (orderDetail.screen_printing_status) {
			if (!values.screen_printing_status) {
				errors.screen_printing_status =
					'Tipe sablon pada pesanan kamu belum terisi.'
			}
		}

		if (orderDetail.button_status) {
			if (!values.button_status) {
				errors.button_status = 'Tipe kancing pada pesanan kamu belum terisi.'
			}
		}
		if (orderDetail.use_perepet_status) {
			if (!values.use_perepet_status) {
				errors.use_perepet_status =
					'Tipe velcro/perepet pada pesanan kamu belum terisi.'
			}
		}
		if (orderDetail.kur_rope_status) {
			if (!values.kur_rope_status) {
				errors.kur_rope_status = 'Tipe tali kur pada pesanan kamu belum terisi.'
			}
		}
		if (orderDetail.stopper_status) {
			if (!values.stopper_status) {
				errors.stopper_status = 'Tipe stopper pada pesanan kamu belum terisi.'
			}
		}
		if (orderDetail.zipper_status) {
			if (!values.zipper_status) {
				errors.zipper_status = 'Tipe risleting pada pesanan kamu belum terisi.'
			}
		}
		if (orderDetail.puring_status) {
			if (!values.puring_status) {
				errors.puring_status = 'Tipe puring pada pesanan kamu belum terisi.'
			}
		}
		if (orderDetail.jacket_type_status) {
			if (!values.jacket_type_status) {
				errors.jacket_type_status = 'Tipe jaket pada pesanan kamu belum terisi.'
			}
		}
	}

	return errors
}
