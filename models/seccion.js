const mongoose = require("mongoose");

const SeccionSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  icono: {
    type: String,
    required: false,
    default:
      "https://persing.s3.amazonaws.com/default/Icon+-+Light+Lila%40300x.png",
  },
  createdAt: { type: Date, required: false, default: Date.now },
});

SeccionSchema.statics = {
  get: function (query, callback) {
    this.findOne(query, { password: 0 }).exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query, { password: 0 }).exec(callback);
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
  create: function (data, callback) {
    const seccion = new this(data);
    seccion.save(callback);
  },

  getNoPopulate: function (query, callback) {
    this.findOne(query, { password: 0 }).exec(callback);
  },
};

const Seccion = (module.exports = mongoose.model("Seccion", SeccionSchema));
