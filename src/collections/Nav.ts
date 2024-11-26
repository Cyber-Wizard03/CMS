import NavDropdown from '../blocks/nav/NavDropdown'
import Heading from '../blocks/Heading'
import { GlobalConfig } from 'payload/types'
import NavItem from '../blocks/nav/NavItem'
import NavSeparator from '../blocks/nav/NavSeparator'
import { isAdmin } from './access/isAdmin'
export const Nav: GlobalConfig  = {
    slug: 'nav',
    admin:{
        group:"Навигация"
      },
  label: 'Меню',
  access: {
    read:() => true,
    update:isAdmin,
  },
    
    fields: [
       
        {
            name: 'layout',
            label: 'Пункты меню',
            type: 'blocks',
            blocks: [
                NavDropdown,
                NavItem,
                NavSeparator
            ]


        }

    ]

}