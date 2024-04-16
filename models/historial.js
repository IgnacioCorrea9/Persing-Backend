const mongoose = require("mongoose");

const HistorialSchema = mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    accion: { type: String, required: true },
    creditos: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

HistorialSchema.statics = {
  get: function (query, callback) {
    this.findOne(query, { password: 0 })
      .populate("usuario sector")
      .exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query, { password: 0 }).populate("usuario sector").exec(callback);
  },
  getAllSector: function (query, callback) {
    this.find(query, { password: 0 }).populate("sector").exec(callback);
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
    const user = new this(data);
    user.save(callback);
  },

  getNoPopulate: function (query, callback) {
    this.findOne(query, { password: 0 }).exec(callback);
  },
};

const Historial = (module.exports = mongoose.model(
  "Historial",
  HistorialSchema
));
