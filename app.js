const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.listen(3000, function() {
  console.log('server is running on port 3000')
})