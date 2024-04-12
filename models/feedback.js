const mongoose = require("mongoose");

const FeedbackSchema = mongoose.Schema({
  rating: { type: Number, required: true },
  comentario: { type: String, require: false },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, required: false, default: Date.now },
});

FeedbackSchema.statics = {
  getByUserId: function (query, callback) {
    this.findOne(query, {}, { sort:{ createdAt: -1 }}).exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query).populate("usuario").exec(callback);
  },
  create: function (data, callback) {
    const Feedback = new this(data);
    Feedback.save(callback);
  },
};

const Feedback = (module.exports = mongoose.model("Feedback", FeedbackSchema));
