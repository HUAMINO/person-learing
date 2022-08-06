var express = require('express')
var app = express()
app.use(express.static(__dirname + '/public'))

app.get('/aaa', function (req, res) {
  res.send('111111')
})

app.listen(3000)
