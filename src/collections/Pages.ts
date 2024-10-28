import Images from '../blocks/Images'
import Image from '../blocks/Image'
import Heading from '../blocks/Heading'
import File from '../blocks/File'
import SimpleRichText from '../blocks/SimpleRichText'
import { CollectionConfig } from 'payload/types'



export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'namepage',
    },
    labels: {
        singular: 'Страница',
        plural: 'Страницы',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'namepage',
            label: 'Название страницы',
            type: 'text',
            required: true,
        },
        {
            name: 'URL',
            label: 'Адресс страницы',
            type: 'text',
            required: true,
        },
        {
            name: 'layout',
            label: 'Шаблон',
            type: 'blocks',
            blocks: [
                Heading,
                Image,
                Images,
                File,
                SimpleRichText,
            ]


        }

    ]

}