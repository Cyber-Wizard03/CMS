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
import {Files} from './collections/Files'
import { Footer } from './collections/Footer'

export default buildConfig({
  // serverURL: 'http://localhost:4000',
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Pages,
    Article,
    Media,
    Files,
  ],
  globals:[
Nav,
Footer,
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
