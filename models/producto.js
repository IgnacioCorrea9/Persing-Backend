const mongoose = require("mongoose");

const ProductoSchema = mongoose.Schema({
	sector: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Sector",
		required: false,
	},
	titulo: { type: String, required: false },
	descripcion: { type: String, required: false },
	foto: { type: String, required: false },
	precio: { type: Number, required: true },
	precioDescuento: { type: Number, required: false },
	descuento: { type: Boolean, required: false, default: false },
	compras: { type: Number, required: false, default: 0 },
	createdAt: { type: Date, required: false, default: Date.now },
});

ProductoSchema.statics = {
	get: function (query, callback) {
		this.findOne(query, { password: 0 })
			.sort("-createdAt")
			.populate("sector")
			.exec(callback);
	},
	getAll: function (query, callback) {
		this.find(query, { password: 0 })
			.sort("-createdAt")
			.populate("sector")
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

	getNoPopulate: function (query, callback) {
		this.findOne(query, { password: 0 }).exec(callback);
	},
};

const Producto = (module.exports = mongoose.model("Producto", ProductoSchema));
