const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let ExcitedModel = {};

// const convertId = mongoose.Types.ObjectId;
// const setAnswer = (answer) => _.escape(answer).trim();

const ExciteSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
    trim: true,
  },
});

ExciteSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

ExcitedModel = mongoose.model('ExcitedModel', ExciteSchema);

module.exports = {
  ExcitedModel,
  ExciteSchema,
};
