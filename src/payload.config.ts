import path from 'path'


import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Article from './collections/Article'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Nav } from './collections/Nav'
import { Files } from './collections/Files'
import { Footer } from './collections/Footer'

// import Logo from './graphics/Logo';
// import Icon from './graphics/Icon';
import {Logo} from './graphics/Logo';
import {Dashboard} from './views/Dashboard'
import { Feedback } from './collections/Feedback'
// import {Feedback} from './views/Feedback'
// import {Feedback} from './views/Feedback'

export default buildConfig({
  // serverURL: 'http://localhost:4000',
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
   
      titleSuffix: '- GUZKOD ADMIN',
      favicon: '/assets/logo.svg',
      ogImage: '/assets/logo.svg',
  
    },
    components: {
      views:{
        AfterNavLinks:Feedback,
      },
      graphics: {
        Logo,
        // Icon,
      },
    },
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Pages,
    Article,
    Media,
    Files,
  ],
  globals: [
    Nav,
    Footer,
    Feedback,
  ],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
