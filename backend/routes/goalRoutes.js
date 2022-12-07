const express = require('express')
const router = express.Router()
const {
  getGoals,
  getGoalsAdmin,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/admin').get(getGoalsAdmin)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router
