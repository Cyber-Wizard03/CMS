import type { Block } from 'payload/types'
import ImageField from '../fields/Image'

const Image: Block = {
	slug: 'image',
	labels: {
		singular: 'Изображение',
		plural: 'Изображения',
	},
	fields: [ImageField()],
}

export default Image