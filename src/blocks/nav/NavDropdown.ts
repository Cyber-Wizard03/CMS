import { LinkField } from '../../fields/Link'
import { Block } from 'payload/types';
import NavSeparator from './NavSeparator';
import NavItem from './NavItem';


const NavDropdown: Block = {
    slug: 'navdropdown',
    labels: {
        singular: 'Заголовок',
        plural: 'Заголовки',
    },
    fields: [
        {
            name: 'label',
            type: 'text',

        },
       { 
        name: 'list',
        type: 'array', // required
        label: 'Image Slider',
        minRows: 2,
        maxRows: 10,
        interfaceName: 'CardSlider', // optional
        labels: {
          singular: 'Slide',
          plural: 'Slides',
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
    }, 
    ]
};
export default NavDropdown;