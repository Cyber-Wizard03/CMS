import NavDropdown from '../blocks/nav/NavDropdown'
import Heading from '../blocks/Heading'
import { GlobalConfig } from 'payload/types'
import NavItem from '../blocks/nav/NavItem'
import NavSeparator from '../blocks/nav/NavSeparator'
export const Footer: GlobalConfig = {
    slug: 'footer',

    access: {
        read: () => true,
    },

    fields: [
   
        {
            name: 'List', // required
            type: 'array', // required
            label: 'Список',
            minRows: 1,
            maxRows: 4,

            fields: [
                {
                    name: 'NameBlock', // required
                    type: 'text', // required
                    required: true,
                },
                {
                    name: 'List', // required
                    type: 'array', // required
                    label: 'Список',
                    minRows: 1,
                    maxRows: 10,
                    fields: [
                        {
                            name: 'Name', // required
                            type: 'text', // required
                            required: true,
                        },
                        {
                            name: 'Link', // required
                            type: 'text', // required
                            required: true,
                        },
                    ]
                }
            ],
}]

}