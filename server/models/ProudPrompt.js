const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let ProudModel = {};

// const convertId = mongoose.Types.ObjectId;
// const setAnswer = (answer) => _.escape(answer).trim();

const ProudSchema = new mongoose.Schema({
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

ProudSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

ProudSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return ProudModel.find(search).select('answer').exec(callback);
};

ProudModel = mongoose.model('ProudModel', ProudSchema);

module.exports = {
  ProudModel,
  ProudSchema,
};
