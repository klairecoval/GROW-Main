const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let InspiredModel = {};

// const convertId = mongoose.Types.ObjectId;
// const setAnswer = (answer) => _.escape(answer).trim();

const InspiredSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
    trim: true,
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
  },

  createdData: {
    type: Date,
    default: Date.now,
  },
});

InspiredSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

InspiredSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return InspiredModel.find(search).select('answer').exec(callback);
};

InspiredModel = mongoose.model('InspiredModel', InspiredSchema);

module.exports = {
  InspiredModel,
  InspiredSchema,
};
