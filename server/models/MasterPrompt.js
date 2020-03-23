const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let MasterModel = {};

const convertId = mongoose.Types.ObjectId;
// const setAnswer = (answer) => _.escape(answer).trim();

const MasterSchema = new mongoose.Schema({
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
    
  category: {
    type: String,
    required: false,  
  },
    
  viewable: {
      type:Boolean,
      default: true,
  },
    
});

MasterSchema.statics.toAPI = (doc) => ({
  answer: doc.answer,
});

MasterSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return MasterModel.find(search).select('answer').exec(callback);
};

MasterModel = mongoose.model('MasterModel', MasterSchema);

module.exports = {
  MasterModel,
  MasterSchema,
};
