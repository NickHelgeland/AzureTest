var express = require('express')
var router = express.Router()
//var message = require('../Data/message')

let message = 'Hello World'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(message)
})

router.post('/', function(req, res, next) {
  message = req.body.message
  res.send(`Message changed to ${message}`)
})

module.exports = router;
