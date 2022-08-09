const mongoose = require("mongoose");

const TransaccionSchema = mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reference: { type: Number, require: true },
  pago: { type: Number, require: true },
  productos: [[{ type: Object, required: false }]],
  createdAt: { type: Date, required: false, default: Date.now },
});

TransaccionSchema.statics = {
  get: function (query, callback) {
    Transaccion.findOne(query, { password: 0 })
      .populate("usuario")
      .exec(callback);
  },
  getByUserId: function (query, callback) {
    Transaccion.findOne(query).exec(callback);
  },
  getAll: function (query, callback) {
    Transaccion.find(query, { password: 0 }).populate("usuario").exec(callback);
  },
  create: function (data, callback) {
    const transaccion = new this(data);
    transaccion.save(callback);
  },

  getNoPopulate: function (query, callback) {
    Transaccion.findOne(query, { password: 0 }).exec(callback);
  },
};

const Transaccion = (module.exports = mongoose.model(
  "Transaccion",
  TransaccionSchema
));
