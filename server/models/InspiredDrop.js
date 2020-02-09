const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let InspiredPrompt = {};

const convertId = mongoose.Types.ObjectId;
const setAnswer = (answer) => _.escape(answer).trim();

const InspiredSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
    trim: true,
  },
});

InspiredSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

InspiredPrompt = mongoose.model('InspiredPrompt', InspiredSchema);

module.exports = {
  InspiredPrompt,
  InspiredSchema,
};
