import express from 'express'
import path from 'path';
import payload from 'payload'


require('dotenv').config()
const app = express()

const host = '127.0.0.1';
const port = 4000;
app.use('/assets', express.static(path.resolve(__dirname, './assets')));
var https = require('https');
const fs = require('fs');
const options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/guzkod.ru/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/guzkod.ru/privkey.pem')
};
// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  https.createServer(options, app).listen(port, host, function() {
    console.log(`Server listens https://${host}:${port}`);
   });
}

start()
