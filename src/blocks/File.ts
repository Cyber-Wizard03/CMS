import { Block } from 'payload/types';

const File: Block = {
    slug: 'files',
    labels: {
        singular: 'Фаил',
        plural: 'Файлы',
    },
    fields: [
    
        {
            name: 'files',
            labels: {
                singular: 'Файл',
                plural: 'Файлы',
            },
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'file',
                    type: 'upload',
                    relationTo: 'Filesbox', // required
                    required: true,
                },

            ],
        },
    ],


};
export default File;