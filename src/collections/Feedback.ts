import NavDropdown from '../blocks/nav/NavDropdown'
import Heading from '../blocks/Heading'
import { GlobalConfig } from 'payload/types'
import NavItem from '../blocks/nav/NavItem'
import NavSeparator from '../blocks/nav/NavSeparator'
import { FeedbackViews } from '../views/Feedback/Feedback'
export const Feedback: GlobalConfig  = {
    slug: 'feedback',
    admin: {
        group: "Обратная связь",
        components:{
            views: {
                Edit:FeedbackViews,
            }
        }
    },
    label: 'Обратная связь',
    access: {
        read: () => true,
    },
    fields: []
}