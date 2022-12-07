const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    nameofcomplaint: {
      type: String,
      required: [true, 'Please add a name of complaint'],
    },
    address: {
      type: String,
      required: [true, 'Please add a address'],
    },
    phonenumber: {
      type: String,
      required: [true, 'Please add a phone number'],
    },
    email: {
      type: String,
      required: [true, 'Please add a email'],
    },
    nameofserviceprovider: {
      type: String,
      required: [true, "Please add Officer"]
    },
    typeofcomplaint: {
      type: String,
      required: [true, 'Please add type of complaint'],
    },
    date: {
      type: String,
      required: [true, 'Please add date'],
    },
    witness: {
      type: String,
      required: [true, 'Please add witness'],
    },
    complaint: {
      type: String,
      required: [true, 'Please add complaint'],
    },
    region: {
      type: String,
      required: [true, 'Please add region'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)

