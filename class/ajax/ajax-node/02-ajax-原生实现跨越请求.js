var express = require('express')
var app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))

app.all('/aaa', function (req, res) {
  // 支持跨越
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', '*')

  res.send('111111')
})

app.listen(3000)
