const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// Schema

const UserSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  empresa: { type: mongoose.Schema.Types.ObjectId, ref:"Empresa", required: false },
  genero: { type: String, required: false },
  estrato: { type: Number, required: false },
  nivelEducativo: { type: String, required: false },
  profesion: {type: String, required: false},
  hijos: {type: Number, required: false},
  creditos: { type: Number, required: false },
  intereses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sector",
    required: false,
  }],
  tipo: 
    {
      type: String,
      required: false,
    },
  createdAt: { type: Date, required: false, default: Date.now },
});

UserSchema.statics = {
  get: function (query, callback) {
    this.findOne(query, { password: 0 })
      .populate("intereses empresa")
      .exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query, { password: 0 })
      .populate("intereses empresa")
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
