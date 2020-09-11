// Order Form
export const ORDER_FORM = {
	TSHIRT: {
		embroidery_point_status: false,
		embroidery_notes_status: false,
		screen_printing: true,
		screen_printing_notes_status: true,
		button_status: false,
		use_perepet_status: false,
		kur_rope_status: false,
		stopper_status: false,
		zipper_status: false,
		puring_status: false,
		jacket_type_status: false,
	},
	RAGLAN: {
		embroidery_point_status: false,
		embroidery_notes_status: false,
		screen_printing: true,
		screen_printing_notes_status: true,
		button_status: false,
		use_perepet_status: false,
		kur_rope_status: false,
		stopper_status: false,
		zipper_status: false,
		puring_status: false,
		jacket_type_status: false,
	},
	POLO: {
		embroidery_point_status: true,
		embroidery_notes_status: true,
		screen_printing: true,
		screen_printing_notes_status_status: true,
		button_status_status: false,
		use_perepet_status: false,
		kur_rope_status: false,
		stopper_status: false,
		zipper_status: false,
		puring_status: false,
		jacket_type_status: false,
	},
	SHIRT: {
		embroidery_point_status: true,
		embroidery_notes_status: true,
		screen_printing: true,
		screen_printing_notes_status: true,
		button_status: true,
		use_perepet_status: true,
		kur_rope_status: false,
		stopper_status: false,
		zipper_status: false,
		puring_status: false,
		jacket_type_status: false,
	},
	SWEATER: {
		embroidery_point_status: true,
		embroidery_notes_status: true,
		screen_printing: true,
		screen_printing_notes_status: true,
		button_status: false,
		use_perepet_status: false,
		kur_rope_status: true,
		stopper_status: true,
		zipper_status: false,
		puring_status: false,
		jacket_type_status: false,
	},
	JACKET: {
		embroidery_point_status: true,
		embroidery_notes_status: true,
		screen_printing: true,
		screen_printing_notes_status: true,
		button_status: true,
		use_perepet_status: true,
		kur_rope_status: true,
		stopper_status: true,
		zipper_status: true,
		puring_status: true,
		jacket_type_status: true,
	},
	FORMAL_SUIT: {
		embroidery_point_status: true,
		embroidery_notes_status: true,
		screen_printing: true,
		screen_printing_notes_status: true,
		button_status: true,
		use_perepet_status: false,
		kur_rope_status: false,
		stopper_status: false,
		zipper_status: false,
		puring_status: true,
		jacket_type_status: false,
	},
	LAB_SUIT: {
		embroidery_point_status: true,
		embroidery_notes_status: true,
		screen_printing: true,
		screen_printing_notes_status: true,
		button_status: true,
		use_perepet_status: false,
		kur_rope_status: false,
		stopper_status: false,
		zipper_status: false,
		puring_status: false,
		jacket_type_status: false,
	},
	WEARPACK: {
		embroidery_point_status: true,
		embroidery_notes_status: true,
		screen_printing: true,
		screen_printing_notes_status: true,
		button_status: true,
		use_perepet_status: true,
		kur_rope_status: false,
		stopper_status: false,
		zipper_status: true,
		puring_status: false,
		jacket_type_status: false,
	},
	VEST: {
		embroidery_point_status: true,
		embroidery_notes_status: true,
		screen_printing: true,
		screen_printing_notes_status: true,
		button_status: true,
		use_perepet_status: true,
		kur_rope_status: false,
		stopper_status: false,
		zipper_status: true,
		puring_status: true,
		jacket_type_status: false,
	},
	TOTEBAG: {
		embroidery_point_status: true,
		embroidery_notes_status: true,
		screen_printing: true,
		screen_printing_notes_status: true,
		button_status: true,
		use_perepet_status: true,
		kur_rope_status: false,
		stopper_status: false,
		zipper_status: true,
		puring_status: false,
		jacket_type_status: false,
	},
	DRESS: {
		embroidery_point_status: true,
		embroidery_notes_status: true,
		screen_printing: true,
		screen_printing_notes_status: true,
		button_status: true,
		use_perepet_status: false,
		kur_rope_status: false,
		stopper_status: false,
		zipper_status: true,
		puring_status: false,
		jacket_type_status: false,
	},
	OTHER: {
		embroidery_point_status: true,
		embroidery_notes_status: true,
		screen_printing: true,
		screen_printing_notes_status: true,
		button_status: true,
		use_perepet_status: true,
		kur_rope_status: true,
		stopper_status: true,
		zipper_status: true,
		puring_status: true,
		jacket_type_status: false,
	},
}

export const initialOrderDetailState = {
	embroidery_point_status: false,
	embroidery_notes_status: false,
	screen_printing: false,
	screen_printing_notes_status: false,
	button_status: false,
	use_perepet_status: false,
	kur_rope_status: false,
	stopper_status: false,
	zipper_status: false,
	puring_status: false,
	jacket_type_status: false,
}

// Order Status
export const ORDER_NEW = 'NEW'
export const ORDER_REJECTED = 'REJECTED'
export const ORDER_PAID = 'PAID'
export const ORDER_MATERIALIZING = 'MATERIALIZING'
export const ORDER_CUTTING = 'CUTTING'
export const ORDER_SEWING = 'SEWING'
export const ORDER_SCREEN_PRINTING = 'SCREEN_PRINTING'
export const ORDER_EMBROIDERING = 'EMBROIDERING'
export const ORDER_BUTTONING = 'BUTTONING'
export const ORDER_PIPING = 'PIPING'
export const ORDER_PACKING = 'PACKING'
export const ORDER_COMPLETED = 'COMPLETED'

// Order Type
export const MAKLOON = 'MAKLOON'
export const FULL_ORDER = 'FULL_ORDER'

// Clothes Size, Type, and Quantity
export const LONG_SLEEVE = 'Lengan Panjang'
export const SHORT_SLEEVE = 'Lengan Pendek'

export const CLOTHES_SIZE = [
	'XS',
	'S',
	'M',
	'L',
	'XL',
	'2XL',
	'3X',
	'4XL',
	'5XL',
]

// Other
export const OTHER = 'OTHER'
