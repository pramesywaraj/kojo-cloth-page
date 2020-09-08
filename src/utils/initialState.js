export const initialOrderState = {
	name: '',
	address_street: '',
	address_province: 'DEFAULT',
	address_city: 'DEFAULT',
	address_kecamatan: 'DEFAULT',
	address_village: 'DEFAULT',
	address_postal_code: 'DEFAULT',
	email: '',
	institution: '',
	phone_number: '',
	order_status: '',
	type: 'DEFAULT',
	material: 'DEFAULT',
	detail: [
		{
			size: 'DEFAULT',
			type: '',
			quantity: '',
		},
	],
	order_detail: {
		embroidery_point: '',
		embroidery_notes: '',
		screen_printing: '',
		screen_printing_notes: '',
		button: '',
		use_perepet: '',
		kur_rope: '',
		stopper: '',
		zipper: '',
		puring: '',
		jacket_type: '',
	},
	notes: '',
	design_url: '',
	due_date: '',
}

export const emptyArray = []
