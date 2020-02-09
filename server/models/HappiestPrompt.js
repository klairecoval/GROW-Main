const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let HappiestPrompt = {};

const convertId = mongoose.Types.ObjectId;
const setAnswer = (answer) => _.escape(answer).trim();

const HappiestSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
    trim: true,
  },
});

HappiestSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

HappiestPrompt = mongoose.model('HappiestPrompt', HappiestSchema);

module.exports = {
  HappiestPrompt,
  HappiestSchema,
};
