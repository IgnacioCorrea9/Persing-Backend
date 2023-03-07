const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Schema
const UserSchema = mongoose.Schema({
  nombre: { type: String, required: false },
  apellido: { type: String, required: false },
  age: { type: String, required: true, default: " " },
  email: { type: String, required: true },
  password: { type: String, required: true },
  empresa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empresa",
    required: false,
  },
  genero: { type: String, required: true, default: " " },
  estrato: { type: Number, required: false },
  nivelEducativo: { type: String, required: false },
  ocupacion: { type: String, required: false },
  hijos: { type: Boolean, required: false },
  cantidadHijos: { type: Number, required: false },
  mascotas: { type: Boolean, required: false },
  cantidadMascotas: { type: Number, required: false },
  estadoCivil: { type: String, required: false },
  creditos: { type: Number, required: false },
  calificacionApp: { type: Number, required: false },
  intereses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sector",
      required: false,
    },
  ],
  tipo: {
    type: String,
    required: true,
    enum: ["consumidor", "administrador", "superadministrador"],
  },
  deletedAt: { type: Date, required: false },
  lastSeen: { type: Date, required: false },
  lastUpdate: { type: Date, required: false },
  createdAt: { type: Date, required: false, default: Date.now },
});

UserSchema.statics = {
  get: function (query, callback) {
    this.findOne(query, { password: 0 }).populate("empresa").exec(callback);
  },

  getAll: function (query, callback) {
    this.find(query, { password: 0 })
      .sort({ createdAt: "desc" })
      .populate("intereses empresa")
      .exec(callback);
  },

  getCount: function (query, callback) {
    this.countDocuments(query).exec(callback);
  },

  updateById: function (id, updateData, callback) {
    this.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true },
      callback
    );
  },

  updateByEmpresa: function (empresaId, update, callback) {
    this.findOneAndUpdate(
      { empresa: empresaId },
      { $set: update },
      { new: true },
      callback
    );
  },

  create: function (data, callback) {
    const user = new this(data);
    user.save(callback);
  },

  getNoPopulate: function (query, callback) {
    this.findOne(query, { password: 0 }).exec(callback);
  },

  deleteUserById: function (id, update, callback) {
    this.findOneAndUpdate(
      { _id: id },
      { $set: update },
      { new: true },
      callback
    );
  },

  getDeletedUsers: function (query, callback) {
    this.find(query, { password: 0 })
      .populate("intereses empresa")
      .exec(callback);
  },
};

const User = (module.exports = mongoose.model("User", UserSchema));

// Specific backend methods

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

module.exports.getUserByEmail = function (email, callback) {
  const query = { email: email };
  User.findOne(query).populate("empresa").exec(callback);
};

module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(newUser.password, salt, (err2, hash) => {
      if (err2) throw err2;
      newUser.password = hash;
      var UserSchema = mongoose.model("User");
      UserSchema.find({ email: newUser.email }, (err3, res) => {
        if (res.length == 0) {
          newUser.save(callback);
        } else {
          callback(
            "El correo ingresado ya se encuentra registrado en nuestra plataforma",
            null
          );
        }
      });
    });
  });
};

module.exports.hashPassword = function (user, newPassword, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(newPassword, salt, (err2, hash) => {
      if (err2) throw err2;
      callback(null, hash);
    });
  });
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
