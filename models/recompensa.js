const mongoose = require("mongoose");

const RecompensaSchema = mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, required: true },
    sector: { type: mongoose.Schema.Types.ObjectId, required: true },
    ranking: { type: String, required: false },
    creditos: { type: Number, required: false, default: 0 }
});

RecompensaSchema.statics = {
    get: function (query, callback) {
      this.findOne(query, { password: 0 })
        .populate("usuario sector")
        .exec(callback);
    },
    getAll: function (query, callback) {
      this.find(query, { password: 0 })
        .populate("usuario sector")
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
  
  const Recompensa = (module.exports = mongoose.model("Recompensa", RecompensaSchema));
  