const express = require('express')
const router = express.Router()
const {
    getSuspects,
    setSuspect,
    updateSuspect,
} = require('../controllers/suspectController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getSuspects).post(protect, setSuspect)
router.route('/:id').put(protect, updateSuspect)

module.exports = router
