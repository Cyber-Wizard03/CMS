import type { Block } from 'payload/types'
const SimpleRichText:Block = {
    slug: 'simpleRichText',
    labels: {
        singular: 'Редактируемый текст',
        plural: 'Simple Rich Texts',
    },
    fields: [
        {
            name: 'body',
            label: 'Text',
            type: 'richText',
        }
    ]
}
export default SimpleRichText