const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ collection: "user-data" }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
