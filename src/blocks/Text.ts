import { Block } from 'payload/types';
import { buildConfig } from 'payload/config'
import { slateEditor } from '@payloadcms/richtext-slate'
import { lexicalEditor } from '@payloadcms/richtext-lexical';
const Text: Block = {
    slug: 'test',
    labels: {
      singular: 'форматируемый текст',
      plural: 'форматируемый текст',
  },
    fields: [
      {
        name: 'content',
        type: 'richText',
        // Pass the Slate editor here and configure it accordingly
        editor: lexicalEditor({})
      }
    ]
}

export default Text