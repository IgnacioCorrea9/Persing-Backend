const mongoose = require("mongoose");

const CompartirSchema = mongoose.Schema({
    publicacion: { type: mongoose.Schema.Types.ObjectId, ref: "Publicacion", required: true },
    usuario: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }],
    

});

CompartirSchema.statics = {
    get: function (query, callback) {
      this.findOne(query, { password: 0 })
      .populate("publicacion usuario")
      .exec(callback);
    },
    getAll: function (query, callback) {
      this.find(query, { password: 0 })
      .populate("publicacion usuario")
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
  
  const Compartir = (module.exports = mongoose.model("Compartir", CompartirSchema));
  
  module.exports.count = function (query,callback) {
    Compartir.countDocuments(query,callback);
  }