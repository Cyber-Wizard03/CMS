import { CollectionConfig } from 'payload/types'
import { isAdmin } from './access/isAdmin';

export const Files: CollectionConfig = {
    slug: 'Filesbox',
    admin:{
      group:"Файлы"
    },
    labels:{
      singular: 'Файл',
      plural:'Файлы',
    },
    access: {
      read:() => true,
      create: isAdmin,
      update:isAdmin,
    },
    upload: {
      staticURL: '/media',
      staticDir: 'media/Files',
   
    //   : ['imamimeTypesge/*'],
    },
    fields: [
      {
        name: 'name',
        label: 'Название файла',
        type: 'text',
        required: true,
      },
    ],
    hooks: {
      beforeOperation: [async ({ args }) => {
        const files = args.req?.files;
        if (files && files.file && files.file.name) {
          const parts = files.file.name.split('.');
          files.file.name = `${(Math.random() + 1).toString(36).substring(2)}.${parts[parts.length - 1]}`;
        }
      }]
    }
}

