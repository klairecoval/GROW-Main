const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let AccountModel = {};

const AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

// format data to api
AccountSchema.statics.toAPI = (doc) => {
  const account = {
    username: doc.username,
    _id: doc._id,
  };

  return account;
};

// find username
AccountSchema.statics.findByUsername = (name, callback) => {
  const search = {
    username: name,
  };

  return AccountModel.findOne(search, callback);
};

AccountModel = mongoose.model('Account', AccountSchema);

module.exports = {
  AccountModel,
  AccountSchema,
};
