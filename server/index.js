const express = require('express')
const serverUrl = require('./url.js')
const corsMiddleware = require('./middleware/cors.middleware')
const router = require('./request/router')

const app = express()
const PORT = serverUrl.PORT

app.use(corsMiddleware)
app.use('/', router)

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log('Server started on port:', PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start()