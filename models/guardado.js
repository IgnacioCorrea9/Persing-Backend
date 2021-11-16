const mongoose = require("mongoose");

const GuardadoSchema = mongoose.Schema({
  publicacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publicacion",
    required: false,
  },
  destacado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destacado",
    required: false,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  deletedUser: { type: Boolean, require: false},
  createdAt: { type: Date, required: false, default: Date.now },
});

GuardadoSchema.statics = {
  get: function (query, callback) {
    this.findOne(query, { password: 0 })
      .populate("publicacion usuario destacado")
      .exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query, { password: 0 })
      .populate("publicacion usuario destacado")
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

  deleteByUserId: function(id, update, callback){
    this.updateMany({ usuario: id}, {$set: update}, {}, callback)
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

const Guardado = (module.exports = mongoose.model("Guardado", LikeSchema));

module.exports.count = function (query, callback) {
  Guardado.countDocuments(query, callback);
};
