const mongoose = require("mongoose");

const DestacadoSchema = mongoose.Schema({
  seccion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seccion",
    required: false,
  },
  titulo: { type: String, required: false },
  texto: { type: String, required: false },
  foto: { type: String, required: false },
  video: { type: String, required: false },
  likes: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  ],
  comentarios: { type: Number, required: false, default: 0 },
  alcanzados: { type: Number, required: false, default: 0 },
  createdAt: { type: Date, required: false, default: Date.now },
});

DestacadoSchema.statics = {
  get: function (query, callback) {
    this.findOne(query, { password: 0 })
      .sort("-createdAt")
      .populate("seccion")
      .exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query, { password: 0 })
      .sort("-createdAt")
      .populate("seccion")
      .exec(callback);
  },
  updateById: function (id, updateData, callback) {
    this.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true },
      callback
    );
  },

  removeById: function (removeData, callback) {
    this.findOneAndRemove(removeData, callback);
  },

  removeMany: function (query, callback) {
    this.deleteMany(query, callback);
  },

  create: function (data, callback) {
    const destacado = new this(data);
    destacado.save(callback);
  },

  getNoPopulate: function (query, callback) {
    this.findOne(query, { password: 0 }).exec(callback);
  },
};

const Destacado = (module.exports = mongoose.model(
  "Destacado",
  DestacadoSchema
));
