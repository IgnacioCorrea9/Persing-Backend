const mongoose = require('mongoose');

const EmpresaSchema = mongoose.Schema({
  nombre: { type: String, required: false },
  sectores: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Sector', required: false },
  ],
  nit: { type: String, required: false },
  logo: { type: String, required: false },
  email: { type: String, required: false },
  descripcion: { type: String, required: false },
  estado: {
    type: String,
    required: false,
    enum: ['aprobado', 'rechazado', 'pendiente'],
    default: 'pendiente',
  },
  deletedAt: { type: Date, required: false },
  createdAt: { type: Date, required: false, default: Date.now },
});

EmpresaSchema.statics = {
  get: function (query, callback) {
    this.findOne(query, { password: 0 }).populate('sectores').exec(callback);
  },

  getAll: function (query, callback) {
    this.find(query, { password: 0 })
      .sort({ createdAt: 'desc' })
      .populate('sectores')
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

  removeById: function (id, callback) {
    this.findOneAndUpdate(
      { _id: id },
      { $set: { deletedAt: Date.now() } },
      { new: true },
      callback
    );
  },

  getCount: function (query, callback) {
    this.countDocuments(query).exec(callback);
  },

  create: function (data, callback) {
    const user = new this(data);
    user.save(callback);
  },

  getNoPopulate: function (query, callback) {
    this.findOne(query, { password: 0 }).exec(callback);
  },
};

const Empresa = (module.exports = mongoose.model('Empresa', EmpresaSchema));
