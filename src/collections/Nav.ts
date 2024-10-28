import NavDropdown from '../blocks/nav/NavDropdown'
import Heading from '../blocks/Heading'
import { GlobalConfig } from 'payload/types'
import NavItem from '../blocks/nav/NavItem'
import NavSeparator from '../blocks/nav/NavSeparator'
export const Nav: GlobalConfig  = {
    slug: 'nav',
  
    access:{
        read: () => true,
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