const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let LoveModel = {};

const convertId = mongoose.Types.ObjectId;
// const setAnswer = (answer) => _.escape(answer).trim();

const LoveSchema = new mongoose.Schema({
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

LoveSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

LoveSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return LoveModel.find(search).select('answer').exec(callback);
};

LoveModel = mongoose.model('LoveModel', LoveSchema);

module.exports = {
  LoveModel,
  LoveSchema,
};
