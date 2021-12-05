const mongoose = require("mongoose");

const SaveSchema = mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  publicacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publicacion",
    required: false,
  },
  alreadyRewarded: { type: Boolean, default: false, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
});

SaveSchema.statics = {
  upsert: function (query, data, callback) {
    this.findOneAndUpdate(
      query,
      data,
      {
        upsert: true,
      },
      callback
    );
  },
  getAll: function (query, callback) {
    this.find(query).exec(callback);
  },
  getOne: function (query) {
    return this.findOne(query).exec();
  },
  updateSave: function (query, data) {
    return this.findOneAndUpdate(query, data, {
      new: true,
    }).exec();
  },
};

const Save = (module.exports = mongoose.model("Save", SaveSchema));
