// Order Form
export const ORDER_FORM = {
	TSHIRT: {
		embroidery_point: false,
		embroidery_notes: false,
		screen_printing: true,
		screen_printing_notes: true,
		button: false,
		use_perepet: false,
		kur_rope: false,
		stopper: false,
		zipper: false,
		puring: false,
		jacket_type: false,
	},
	RAGLAN: {
		embroidery_point: false,
		embroidery_notes: false,
		screen_printing: true,
		screen_printing_notes: true,
		button: false,
		use_perepet: false,
		kur_rope: false,
		stopper: false,
		zipper: false,
		puring: false,
		jacket_type: false,
	},
	POLO: {
		embroidery_point: true,
		embroidery_notes: true,
		screen_printing: true,
		screen_printing_notes: true,
		button: false,
		use_perepet: false,
		kur_rope: false,
		stopper: false,
		zipper: false,
		puring: false,
		jacket_type: false,
	},
	SHIRT: {
		embroidery_point: true,
		embroidery_notes: true,
		screen_printing: true,
		screen_printing_notes: true,
		button: true,
		use_perepet: true,
		kur_rope: false,
		stopper: false,
		zipper: false,
		puring: false,
		jacket_type: false,
	},
	SWEATER: {
		embroidery_point: true,
		embroidery_notes: true,
		screen_printing: true,
		screen_printing_notes: true,
		button: false,
		use_perepet: false,
		kur_rope: true,
		stopper: true,
		zipper: false,
		puring: false,
		jacket_type: false,
	},
	JACKET: {
		embroidery_point: true,
		embroidery_notes: true,
		screen_printing: true,
		screen_printing_notes: true,
		button: true,
		use_perepet: true,
		kur_rope: true,
		stopper: true,
		zipper: true,
		puring: true,
		jacket_type: true,
	},
	FORMAL_SUIT: {
		embroidery_point: true,
		embroidery_notes: true,
		screen_printing: true,
		screen_printing_notes: true,
		button: true,
		use_perepet: false,
		kur_rope: false,
		stopper: false,
		zipper: false,
		puring: true,
		jacket_type: false,
	},
	LAB_SUIT: {
		embroidery_point: true,
		embroidery_notes: true,
		screen_printing: true,
		screen_printing_notes: true,
		button: true,
		use_perepet: false,
		kur_rope: false,
		stopper: false,
		zipper: false,
		puring: false,
		jacket_type: false,
	},
	WEARPACK: {
		embroidery_point: true,
		embroidery_notes: true,
		screen_printing: true,
		screen_printing_notes: true,
		button: true,
		use_perepet: true,
		kur_rope: false,
		stopper: false,
		zipper: true,
		puring: false,
		jacket_type: false,
	},
	VEST: {
		embroidery_point: true,
		embroidery_notes: true,
		screen_printing: true,
		screen_printing_notes: true,
		button: true,
		use_perepet: true,
		kur_rope: false,
		stopper: false,
		zipper: true,
		puring: true,
		jacket_type: false,
	},
	TOTEBAG: {
		embroidery_point: true,
		embroidery_notes: true,
		screen_printing: true,
		screen_printing_notes: true,
		button: true,
		use_perepet: true,
		kur_rope: false,
		stopper: false,
		zipper: true,
		puring: false,
		jacket_type: false,
	},
	DRESS: {
		embroidery_point: true,
		embroidery_notes: true,
		screen_printing: true,
		screen_printing_notes: true,
		button: true,
		use_perepet: false,
		kur_rope: false,
		stopper: false,
		zipper: true,
		puring: false,
		jacket_type: false,
	},
	OTHER: {
		embroidery_point: true,
		embroidery_notes: true,
		screen_printing: true,
		screen_printing_notes: true,
		button: true,
		use_perepet: true,
		kur_rope: true,
		stopper: true,
		zipper: true,
		puring: true,
		jacket_type: true,
	},
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
