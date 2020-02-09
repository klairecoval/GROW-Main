const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let HappiestModel = {};

// const convertId = mongoose.Types.ObjectId;
// const setAnswer = (answer) => _.escape(answer).trim();

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

HappiestModel = mongoose.model('HappiestModel', HappiestSchema);

module.exports = {
  HappiestModel,
  HappiestSchema,
};
