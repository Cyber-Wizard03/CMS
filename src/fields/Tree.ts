import type { Field } from 'payload/types'
import type { UploadField } from 'payload/dist/fields/config/types'

const Tree = (options?: Partial<UploadField>): Field => ({
	...options,
	name: 'image',
	label: 'Image',
	type: 'upload',
	relationTo: 'media',
})

export default Tree