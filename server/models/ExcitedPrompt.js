const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let ExcitedModel = {};

const convertId = mongoose.Types.ObjectId;
// const setAnswer = (answer) => _.escape(answer).trim();

const ExcitedSchema = new mongoose.Schema({
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

ExcitedSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

ExcitedSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return ExcitedModel.find(search).select('answer').exec(callback);
};

ExcitedModel = mongoose.model('ExcitedModel', ExcitedSchema);

module.exports = {
  ExcitedModel,
  ExcitedSchema,
};
