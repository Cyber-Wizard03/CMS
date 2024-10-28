import type { Block } from 'payload/types'
import ImageField from '../fields/Image'

const Images: Block = {
	slug: 'images',
	labels: {
		singular: 'Галерея',
		plural: 'Галерея',
	},
	fields: [
		{
			name: 'images',
			labels: {
                singular: 'Изображение',
                plural: 'Изображения',
            },
			type: 'array',
			required: true,
			fields: [ImageField()],
		},
	],
}

export default Images