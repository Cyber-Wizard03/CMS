import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  labels:{
    singular: 'Пользователь',
    plural:'Пользователи',
  },
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}

export default Users
