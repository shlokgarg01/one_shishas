const express = require('express')
const {sendMail, ping} = require('./sendMail')

const router = express.Router()

router.route('/send_mail').post(sendMail)
router.route('/').get(ping)

module.exports = router