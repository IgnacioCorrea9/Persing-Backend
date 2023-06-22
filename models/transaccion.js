const mongoose = require("mongoose");

const TransaccionSchema = mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reference: { type: Number, required: true },
  pago: { type: Number, required: true },
  location: {
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  productos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producto",
      required: false,
    },
  ],
  createdAt: { type: Date, required: false, default: Date.now },
});

TransaccionSchema.statics = {
  get: function (query, callback) {
    Transaccion.findOne(query, { password: 0 })
      .populate("usuario")
      .exec(callback);
  },
  getById: function (query, callback) {
    Transaccion.findById(query).populate("productos usuario").exec(callback);
  },

  getByUserId: function (query, callback) {
    Transaccion.findOne(query).exec(callback);
  },
  getAll: function (query, callback) {
    this.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "usuario",
          foreignField: "_id",
          as: "usuario",
        },
      },
      {
        $lookup: {
          from: "productos",
          localField: "productos",
          foreignField: "_id",
          as: "productos",
        },
      },
    ]).exec(callback);
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

// pais ciudad direccion
