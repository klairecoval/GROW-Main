const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let ThankfulModel = {};

// const convertId = mongoose.Types.ObjectId;
// const setAnswer = (answer) => _.escape(answer).trim();

const ThankfulSchema = new mongoose.Schema({
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

ThankfulSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

ThankfulSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return ThankfulModel.find(search).select('answer').exec(callback);
};

ThankfulModel = mongoose.model('ThankfulModel', ThankfulSchema);

module.exports = {
  ThankfulModel,
  ThankfulSchema,
};
