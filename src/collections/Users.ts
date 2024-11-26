import { CollectionConfig } from 'payload/types'
import { isAdmin } from './access/isAdmin'
import { isAdminOrSelf } from './access/isAdminOrSelf'

const Users: CollectionConfig = {
  slug: 'users',
  labels:{
    singular: 'Пользователь',
    plural:'Пользователи',
  },
  auth: true,
  admin: {
    useAsTitle: 'firstName',
      group:"Пользователи"
  },
  access: {
    create: isAdmin,
    read:isAdminOrSelf
  },

  fields: [
    {
      type: 'row',
      fields: [
        {
          label: 'Имя',
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          label: 'Фамилия',
          name: 'lastName',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'roles',
      label: 'Роль',
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: 'select',
      hasMany: true,
      defaultValue: ['user'],
      access: {
        // Only admins can create or update a value for this field
        create: isAdmin,
        update: isAdmin,
      },
      options: [
        {
          label: 'Администратор',
          value: 'admin',
        },
        {
          label: 'Редактор',
          value: 'editor',
        },
        {
          label: 'Пользователь',
          value: 'user',
        },
      ]
    },
   
  ],
}

export default Users
