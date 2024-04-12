const mongoose = require('mongoose');

const InteractionSchema = mongoose.Schema(
  {
    publication: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Publicacion",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    liked: { type: Boolean, required: false, default: true },
    saved: { type: Boolean, required: false, default: true },
    shared: { type: Boolean, required: false, default: true },
    unsaved: { type: Boolean, required: false, default: true },
    commented: { type: Boolean, required: false, default: true },
    deletedAt: { type: Boolean, required: false },
  },
  {
    timestamps: true,
  }
);

const Interaction = module.exports = mongoose.model(
  "Interaction",
  InteractionSchema
);
