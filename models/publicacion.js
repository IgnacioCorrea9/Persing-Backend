const mongoose = require("mongoose");

const PublicacionSchema = mongoose.Schema({
    empresa: { type: mongoose.Schema.Types.ObjectId, ref: "Empresa", required: false },
    sector: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sector", required: false }],
    titulo: { type: String, required: false },
    link: { type: String, required: false },
    texto: { type: String, required: false },
    foto: { type: String, required: false },
    video: { type: String, required: false },
    likes: { type: Number, required: false },
    comentarios: { type: Number, required: false },
    alcanzados: { type: Number, required: false },
    inversion: { type: Number, required: false },
    vtr: { type: String, required: false },
    engagement: { type: String, required: false },
    cpc: { type: String, required: false },
    cpm: { type: String, required: false },

});

PublicacionSchema.statics = {
    get: function (query, callback) {
      this.findOne(query, { password: 0 })
        .populate("sector empresa")
        .exec(callback);
    },
    getAll: function (query, callback) {
      this.find(query, { password: 0 })
        .populate("sector empresa")
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
  
  const Publicacion = (module.exports = mongoose.model("Publicacion", PublicacionSchema));
  