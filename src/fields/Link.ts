import type { Field } from 'payload/types'
import type { UploadField } from 'payload/dist/fields/config/types'

export const LinkField = (options?: Partial<UploadField>): Field => ({
    ...options,
    name: 'link',
    type: 'relationship', 
    relationTo: 'pages', 
    hasMany: false,
   

    admin: {
        width: '50%',
        
      }


});
 