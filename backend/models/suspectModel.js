const mongoose = require('mongoose')

const suspectSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    suspectname: {
      type: String,
      required: [true, 'Please add a suspect name'],
    },
    suspectlocation: {
      type: String,
      required: [true, 'Please add suspect location'],
    },
    suspectcrime: {
      type: String,
      required: [true, 'Please add suspects crime'],
    },
    additionalinformation: {
      type: String,
      required: [true, 'Please add additional information'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Suspect', suspectSchema)

