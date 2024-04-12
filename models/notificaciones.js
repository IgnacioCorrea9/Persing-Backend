const mongoose = require('mongoose');

const NotificacionesSchema = mongoose.Schema({
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
  accion: { type: String, required: false },
  hito: { type: String, required: false },
  createdAt: { type: Date, required: false, default: Date.now },
});

NotificacionesSchema.statics = {
  get: function (query, callback) {
    this.findOne(query).populate('publicacion').exec(callback);
  },
  getEmpresa: function (query, callback) {
    this.find(query)
      .sort({ createdAt: 'desc' })
      .populate('publicacion')
      .exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query)
      .populate('publicacion')
      .sort({ createdAt: 'desc' })
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
    const notificacion = new this(data);
    notificacion.save(callback);
  },
};

const Notificaciones = (module.exports = mongoose.model(
  'Notificaciones',
  NotificacionesSchema
));
