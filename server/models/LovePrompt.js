const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let LovePrompt = {};

const convertId = mongoose.Types.ObjectId;
const setAnswer = (answer) => _.escape(answer).trim();

const LoveSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
    trim: true,
  },
});

LoveSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

LovePrompt = mongoose.model('LovePrompt', LoveSchema);

module.exports = {
  LovePrompt,
  LoveSchema,
};
