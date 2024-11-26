import { CollectionConfig } from 'payload/types';
// import { isAdmin, isAdminFieldLevel } from '../../access/isAdmin';
import { isAdminOrSelf } from '../access/isAdminOrSelf';
import { isAdmin, isAdminFieldLevel } from '../access/isAdmin';
// import { isAdminOrSelf } from '../../access/isAdminOrSelf';

export const Users: CollectionConfig = {
  slug: 'users',
  labels:{
    singular: 'Пользователь',
    plural:'Пользователи',
  },
  auth: {
    // This property controls how deeply "populated"
    // relationship docs are that are stored in the req.user.
    // It should be kept to as low as possible, which 
    // keeps performance fast.
    depth: 0,
  },
  admin: {
    useAsTitle: 'firstName',
  },
  access: {
    // Only admins can create users
    create: isAdmin,
    // Admins can read all, but any other logged in user can only read themselves
    read: isAdminOrSelf,
    // Admins can update all, but any other logged in user can only update themselves
    update: isAdminOrSelf,
    // Only admins can delete
    delete: isAdmin,
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
      defaultValue: ['editor'],
      access: {
        // Only admins can create or update a value for this field
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
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
      ]
    },
   
  ],
};