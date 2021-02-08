const mongoose = require("mongoose");

const ClickSchema = mongoose.Schema({
    publicacion: { type: mongoose.Schema.Types.ObjectId, ref: "Publicacion", required: true },
    usuario: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }],
    

});

ClickSchema.statics = {
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
  
  const Click = (module.exports = mongoose.model("Click", ClickSchema));
  