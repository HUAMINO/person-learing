var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))

app.all('/aaa', function (req, res) {
  // 支持跨越
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', '*')
  let data = ''
  req.addListener('data', data => {
    data += data
  })
  req.addListener('end', function () {
    console.log(data)
  })
})

app.listen(3000)
