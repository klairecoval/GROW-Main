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
});

InspiredSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

InspiredModel = mongoose.model('InspiredModel', InspiredSchema);

module.exports = {
  InspiredModel,
  InspiredSchema,
};
