const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let HappiestModel = {};

const convertId = mongoose.Types.ObjectId;
// const setAnswer = (answer) => _.escape(answer).trim();

const HappiestSchema = new mongoose.Schema({
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

HappiestSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

HappiestSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return HappiestModel.find(search).select('answer').exec(callback);
};

HappiestModel = mongoose.model('HappiestModel', HappiestSchema);

module.exports = {
  HappiestModel,
  HappiestSchema,
};
