import { Block } from 'payload/types';

const Heading: Block = {
  slug: 'heading',
  labels: {
    singular: 'Заголовок',
    plural: 'Заголовки',
},
  fields: [
    {
      name: 'Text',
      type: 'text',
     
    },
    
  ]
};
export default Heading;