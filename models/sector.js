const mongoose = require("mongoose");

const SectorSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: [{ type: String, required: true }],
});

SectorSchema.statics = {
    get: function (query, callback) {
      this.findOne(query, { password: 0 })
        .exec(callback);
    },
    getAll: function (query, callback) {
      this.find(query, { password: 0 })
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
  
  const Sector = (module.exports = mongoose.model("Sector", SectorSchema));
  