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
});

ThankfulSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

ThankfulModel = mongoose.model('ThankfulModel', ThankfulSchema);

module.exports = {
  ThankfulModel,
  ThankfulSchema,
};
