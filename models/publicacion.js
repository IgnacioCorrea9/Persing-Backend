const mongoose = require("mongoose");

const PublicacionSchema = mongoose.Schema({
	empresa: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Empresa",
		required: false,
	},
	sector: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Sector",
		required: false,
	},
	firstSaved: { type: String, required: false },
	titulo: { type: String, required: false },
	link: { type: String, required: false },
	linkClicks: { type: Number, required: false, default: 0 },
	texto: { type: String, required: false },
	foto: { type: String, required: false },
	video: { type: String, required: false },
	likes: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
	],
	guardados: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
	],
	comentarios: { type: Number, required: false, default: 0 },
	alcanzados: { type: Number, required: false, default: 0 },
	inversion: { type: Number, required: false, default: 0 },
	valor: { type: Number, required: false, default: 0 },
	destacada: { type: Boolean, required: false, default: false },
	nueva: { type: Boolean, required: false, default: false },
	vtr: { type: Number, required: false },
	engagement: { type: Number, required: false },
	cpc: { type: Number, required: false },
	cpm: { type: Number, required: false },
	createdAt: { type: Date, required: false, default: Date.now },
	deletedAt: { type: Boolean, required: false },
	ctr: { type: Number, required: false },
	ignored: { type: Number, required: false },
	interacted: { type: Number, required: false },
});

PublicacionSchema.statics = {


	
	get: function (query, callback) {
		this.findOne(query, { password: 0 })
			.sort("-createdAt")
			.populate("empresa sector")
			.exec(callback);
	},
	
	getAll: function (query, callback) {
		this.find(query, { password: 0 })
			.sort("-createdAt")
			.populate("empresa sector")
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

	getCount: function(query, callback){
    this.countDocuments(query).exec(callback)
  },

	updateByEmpresa: function(id, update, callback){
		this.findOneAndUpdate(
			{empresa: id},
			{$set: update},
			{new: true},
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

	getNoPopulate: function (query, callback) {
		this.findOne(query, { password: 0 }).exec(callback);
	},
};

const Publicacion = (module.exports = mongoose.model(
	"Publicacion",
	PublicacionSchema
));
