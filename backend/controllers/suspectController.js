const asyncHandler = require('express-async-handler')

const Suspect = require('../models/suspectModel')
const User = require('../models/userModel')

// @desc    Get suspect
// @route   GET /api/suspect
// @access  Private
const getSuspects = asyncHandler(async (req, res) => {
  const goals = await Suspect.find({ user: req.user.id })

  res.status(200).json(goals)
})


// @desc    Set suspect
// @route   POST /api/suspect
// @access  Private
const setSuspect = asyncHandler(async (req, res) => {
  const { suspectname, suspectlocation, suspectcrime, additionalinformation } = req.body

  if (!suspectname ) {
    res.status(400)
    throw new Error('Please add a name of Suspect')
  }else if (!suspectlocation) {
    res.status(400)
    throw new Error('Please add suspect Location')
  }else if (!suspectcrime){
    res.status(400)
    throw new Error('Please add suspect Crime')
  }else if (!additionalinformation){
    res.status(400)
    throw new Error('Please add additional Information')
  }

  const suspect = await Suspect.create({
    suspectname: req.body.suspectname,
    suspectlocation: req.body.suspectlocation,
    suspectcrime: req.body.suspectcrime,
    additionalinformation: req.body.additionalinformation,
    user: req.user.id,
  })


  res.status(200).json(suspect)
})

// @desc    Update suspect
// @route   POST /api/suspect
// @access  Private
const updateSuspect = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
  
    res.status(200).json(goals)
})



module.exports = {
  getSuspects,
  setSuspect,
  updateSuspect,
}
