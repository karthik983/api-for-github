const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema();

module.exports = mongoose.model("Indi", UserSchema, "user");
