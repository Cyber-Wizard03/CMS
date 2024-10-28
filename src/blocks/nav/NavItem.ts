import { Block } from 'payload/types';
import { LinkField } from '../../fields/Link'
const NavItem: Block = {
    slug: 'navitem',
    labels: {
        singular: 'пункт меню',
        plural: 'пункт меню',
    },
    fields:[ 
        {
            type: 'row',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    admin: {
                        width: '50%',
                      }
                },
                LinkField()

            ]
        }
    ]

};
export default NavItem;