
import Heading from '../blocks/Heading'
import Image from '../blocks/Image'
import File from '../blocks/File'
import Images from '../blocks/Images'
import { CollectionConfig } from 'payload/types'
import SimpleRichText from '../blocks/SimpleRichText'

const Article: CollectionConfig = {
  slug: 'article',
  labels:{
    singular: 'Статья',
    plural:'Статьи',
  },
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'type', // required
      type: 'radio', // required
      options: [
        // required
        {
          label: 'Новость',
          value: 'News',
        },
        {
          label: 'Профилактика',
          value: 'Prevention',
        },
      ],
     
      admin: {
        layout: 'horizontal',
      },
      required: true

    },
    {
      name: 'slug',
      type: 'text',
      required: true
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'wallpaper',
      type: 'upload',
      relationTo: 'media', // required
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      required: true
    },

    {
      name: 'layout', // required
      type: 'blocks',
      label: 'Шаблон', // required
      minRows: 1,

      blocks: [
        Heading,
        Image,
        Images,
        File,
        SimpleRichText,
      ],
    },


    // Email added by default
    // Add more fields as needed
  ],
}

export default Article