const mongoose = require('mongoose');

const PagosSchema = mongoose.Schema({
  publicacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publicacion',
    required: true,
  },
  empresa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true,
  },
  inversion: { type: Number, required: true },
  porcentajes: [{ type: Object, required: true }],
  createdAt: { type: Date, required: false, default: Date.now },
});

PagosSchema.statics = {
  get: function (query, callback) {
    this.findOne(query).populate('publicacion empresa').exec(callback);
  },
  getEmpresa: function (query, callback) {
    this.find(query)
      .sort({ createdAt: 'desc' })
      .populate('publicacion empresa')
      .exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query)
      .sort({ createdAt: 'desc' })
      .populate('publicacion empresa')
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
    const pago = new this(data);
    pago.save(callback);
  },
};

const Pagos = (module.exports = mongoose.model('Pagos', PagosSchema));
