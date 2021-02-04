const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// Schema

const UserSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  telefono: { type: String, required: false },
  fechaNacimiento: { type: String, required: false },
  ciudad: { type: String, required: false },
  pais: { type: String, required: false },
  direccion: {type: String, required: false},
  sexo: {type: String, required: false},
  lead: { type: String, required: false },
  advisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  favoritos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Programa",
      required: false,
    },
  ],
  serviciosMedicos: [
    {
      servicio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ServicioMedico",
        required: false,
      },
      semanas: { type: Number, required: false },
      valor: { type: Number, required: false },
      pagado: { type: Boolean, required: false },
      fechaCompra: { type: String, required: false },
    },
  ],
  respuestasTermometro: [
    {
      numero: { type: Number, required: false },
      respuesta: { type: Boolean, required: false },
    },
  ],
  comercial: {type: Number, required: false},
  puntajeTermometro: { type: Number, required: false },
  pasaporte: { type: String, required: false },
  numeroPasaporte: {type: String, required: false},
  paisPasaporte: {type: String, required: false},
  vencimientoPasaporte: {type: String, required: false},
  leHanNegadoVisas: {type: Boolean, required: false, default: false},
  negaciones: [{
    pais: {type: String, required: false},
    motivo: {type: String, required: false},
    fecha: {type: String, required: false},
  }],
  diploma: { type: String, required: false },
  notas: { type: String, required: false },
  diplomaPregrado: {type: String, required: false},
  notasPregrado: {type: String, required: false},
  foto: { type: String, required: false },
  programasVisitados: { type: Number, required: false, default: 0 },
  tipoDocumento: { type: String, required: false },
  numeroDocumento: { type: String, required: false, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fechaAceptacionTerminos: { type: Date, required: false },
  ipAceptacionTerminos: { type: String, required: false },
  activo: { type: Boolean, required: false, default: true },
  tipo: {
    type: String,
    required: false,
    enum: ["Estudiante", "Recruitment", "Advisor", "Administrador"],
    default: "Estudiante",
  },
  documentosAdicionales: [
    {
    nombre: {type: String, required: true},
    archivo: {type: String, required: true}
    },
  ],
  presupuestoMinimo: {type: Number, required: false},
  presupuestoMaximo: {type: Number, required: false},
  tipoFinanciacion: {type: String, required: false},
  comentarios: {type: String, required: false},
  interesesAcademicos: [{
    disciplina: {type: String, required: false},
    pais: {type: String, required: false},
    nivelDeEstudios: {type: String, required: false},
  }],
  idiomas: [
    {
        nombre: {type: String, required: false},
        nivel: {type: String, required: false},
        certificados: [
            {
                nombre: {type: String, required: false},
                calificacion: {type: Number, required: false},
                archivo: {type: String, required: false}
            }
        ]
    }
  ],
  lastLogin: {type: Date, required: false},
  vistas: { type: Number, required: false },
  createdAt: { type: Date, required: false, default: Date.now },
});

UserSchema.statics = {
  get: function (query, callback) {
    this.findOne(query, { password: 0 })
      .populate("advisor serviciosMedicos.servicio terminos.termino")
      .populate({
        path: 'favoritos',
        populate: {
          path: 'universidad',
        }
      })
      .exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query, { password: 0 })
      .populate("advisor favoritos serviciosMedicos.servicio terminos.termino")
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
  getNoPopulate: function(query, callback) {
    this.findOne(query, { password: 0 })
    .exec(callback);
  }
};

const User = (module.exports = mongoose.model("User", UserSchema));

// Specific backend methods

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

module.exports.getUserByEmail = function (email, callback) {
  const query = { email: email };
  User.findOne(query, callback);
};

module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      var UserSchema = mongoose.model("User");
      UserSchema.find({ email: newUser.email }, (err, res) => {
        if (res.length == 0) {
          newUser.save(callback);
        } else {
          callback("Usuario Registrado", null);
        }
      });
    });
  });
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
