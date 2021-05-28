const mongoose = require("mongoose");

const CompraProductoSchema = mongoose.Schema({
  producto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
    required: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

CompraProductoSchema.statics = {
  get: function (query, callback) {
    this.findOne(query, { password: 0 })
      .populate("producto usuario")
      .exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query, { password: 0 })
      .populate("producto usuario")
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
  create: function (data, callback) {
    const user = new this(data);
    user.save(callback);
  },

  getNoPopulate: function (query, callback) {
    this.findOne(query, { password: 0 }).exec(callback);
  },
};

const CompraProducto = (module.exports = mongoose.model(
  "CompraProducto",
  CompraProductoSchema
));

module.exports.count = function (query, callback) {
  CompraProducto.countDocuments(query, callback);
};
