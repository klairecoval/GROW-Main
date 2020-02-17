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
});

ProudSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

ProudModel = mongoose.model('ProudModel', ProudSchema);

module.exports = {
  ProudModel,
  ProudSchema,
};
